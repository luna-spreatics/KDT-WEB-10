// 실습 3
function solution(num) {
  var answer = "";
  if (num % 2 === 0) answer = "Even";
  else answer = "Odd";
  return answer;
}

// 실습 4
function solution(n) {
  // 방법 1
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) answer += "박";
    else answer += "수";
  }
  // 방법2
  let repeatNum = parseInt(n / 2);
  var answer = "수박".repeat(repeatNum);

  if (n % 2 !== 0) answer += "수";

  return answer;
}

// 실습 5
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// 실습 6
function solution(n) {
  var answer = 0;

  // 방법 1
  let arr = String(n).split("");
  arr.forEach((a) => {
    answer += parseInt(a);
  });

  // 방법2
  while (n >= 10) {
    answer += n % 10;
    n = parseInt(n / 10);
  }
  answer += n;

  return answer;
}

// 실습 7
function solution(numbers) {
  var answer = 0;
  for (let i = 1; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}
