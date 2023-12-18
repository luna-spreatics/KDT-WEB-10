import { useEffect, useState } from 'react';
import axios from 'axios';
// import PostItem from './PostItem';

// https://jsonplaceholder.typicode.com/
const fakePosts = [
  {
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut',
  },
  {
    id: 4,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
  },
  {
    id: 5,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quisest aut tenetur dolor neque',
  },
  {
    id: 6,
    title: 'dolorem eum magni eos aperiam quia',
    body: 'ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae',
  },
  {
    id: 7,
    title: 'magnam facilis autem',
    body: 'dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quidem repellat excepturi ut quia sunt ut sequi eos ea sed quas',
  },
  {
    id: 8,
    title: 'dolorem dolore est ipsam',
    body: 'dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae',
  },
  {
    id: 9,
    title: 'nesciunt iure omnis dolorem tempora et accusantium',
    body: 'consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provident voluptas autem voluptas',
  },
  {
    id: 10,
    title: 'optio molestias id quia eum',
    body: 'quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error',
  },
];

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // [Before]
    // const getPosts = () => {
    //   setPosts(fakePosts);
    // };

    // [After]
    // getPosts 함수 만든 이유
    // : useEffect를 사용할 땐 비동기 작업을 함수로 래핑한 다음 useEffect콜백에서 호출
    // https://velog.io/@posinity/%EC%97%90%EB%9F%AC-Warning-useEffect-must-not-return-anything-besides-a-function-which-is-used-for-clean-up
    // => useEffect는 비동기 함수를 직접적으로 지원하지 않음. 비동기함수를 사용하려면 내부에 비동기 함수를 정의하고 바로 호출
    const getPosts = async () => {
      // axios
      //   .get('https://jsonplaceholder.typicode.com/posts')
      //   .then((res) => console.log(res.data));

      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      // console.log(res.data);

      setPosts(res.data.slice(0, 10));
    };

    // [Before]
    setTimeout(() => {
      getPosts();
    }, 2000);

    // [After]
    // getPosts();
  }, []);

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div className="PostItem" key={post.id}>
              <div>
                <span className="id">No. {post.id}</span>
                <span className="title">- {post.title}</span>
              </div>
              <p className="body">{post.body.slice(0, 120)}...</p>
            </div>
          );
        })
      ) : (
        <h2>Loading...</h2>
      )}
      {/* {posts.length > 0 ? (
        posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })
      ) : (
        <h2>Loading...</h2>
      )} */}
    </div>
  );
};

export default PostList;
