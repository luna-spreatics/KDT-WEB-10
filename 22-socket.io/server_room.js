const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('room');
});

// 채팅방에 참여한 유저 조회
function getUsersInRoom(room) {
  // 사용자 정보를 저장하는 배열
  const users = [];

  const clients = io.sockets.adapter.rooms.get(room); // 지정된 방에 클라이언트(socket id) 목록 가져오기
  console.log(`${room} 채팅방의 클라이언트 목록 조회 :: ${clients}`);

  if (clients) {
    for (const socketId of clients) {
      const userSocket = io.sockets.sockets.get(socketId); // 특정 소켓 ID에 해당하는 클라이언트 소켓의 정보 가져오기
      const userName = userSocket?.user || '알수없음'; // 사용자 정보가 없을 경우를 대비하여 기본값('알수없음') 설정

      // 사용자에게 메세지 보내기 위해 객체 형태로 변경: { name: 유저이름, key: 소켓아이디 }
      const info = { name: userName, key: socketId };

      users.push(info); // 배열에 객체 정보 추가
    }
  }

  return users;
}

// 채팅방 정보를 저장하는 배열
const roomList = [];

// 정리
// - socket: 접속한 클라이언트
// - io: 모든 클라이언트
// - 탭 단위로 접속시 고유 socket.io 생성
io.on('connection', (socket) => {
  //console.log(io.sockets);

  // 채팅방 목록 보내기
  socket.emit('roomList', roomList);

  // 채팅방 만들기
  socket.on('create', (roomName, userName, cb) => {
    // join(방이름): 해당 방이름으로 없다면 생성. 존재하면 입장
    // socket.rooms에 socket.id 값과 방이름 확인 가능
    socket.join(roomName);

    // socket은 객체니까 원하는 값을 할당 가능!
    socket.room = roomName;
    socket.user = userName;

    // 채팅방에 입장한 사용자에게 notice 이벤트 전송 (입장 공지)
    socket.to(roomName).emit('notice', `${socket.user}님이 입장하셨습니다`);

    // 채팅방 목록 갱신
    if (!roomList.includes(roomName)) {
      roomList.push(roomName);
      io.emit('roomList', roomList); // 갱신된 채팅방 목록은 모두가 봐야함
    }

    // 채팅방에 있는 모든 유저를 조회해서 전송
    const usersInRoom = getUsersInRoom(roomName);
    // 채팅방에 있는 모든 클라이언트에게 "모든 유저 목록"을 전송함 (select 태그 업데이트 용도)
    io.to(roomName).emit('userList', usersInRoom);

    // 콜백 실행 (옵셔널하지만, 이 경우에는 위 작업이 이루어진 후에 프론트에서 해야할 작업이 있음!)
    cb();
  });

  socket.on('sendMessage', (message) => {
    if (message.user === 'all') {
      // 현재 소켓이 속한 채팅방에 있는 모든 클라이언트들에게 'newMessage' 이벤트를 발생시켜 메시지를 전송
      io.to(socket.room).emit('newMessage', message.message, message.nick);
    } else {
      // 해당 사용자에게 메세지 전송
      io.to(message.user).emit('newMessage', message.message, message.nick);
      // 자기 자신한데 메시지 전송 (본인 화면에도 메세지가 나와야 하므로)
      socket.emit('newMessage', message.message, message.nick);
    }
  });

  // 소켓 연결 끊어짐
  socket.on('disconnect', () => {
    // 특정 소켓이 어떤 채팅방에 속한다면
    if (socket.room) {
      // 해당 채팅방에서 나가게 됨
      socket.leave(socket.room);
    }
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
