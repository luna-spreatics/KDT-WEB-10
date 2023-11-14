// rest 파라미터
// 1. 함수에서 rest를 사용할 때
const values = [10, 20, 30, 40, 50, 60];

function get(a, b, ...rest) {
    console.log('a >>', a); // 10
    console.log('b >>', b); // 20
    console.log('rest >>', rest); // [ 30, 40, 50, 60 ]
}

get(...values); // spread 연산자로 펼쳐서 넣어줌
get(values);
// a >> [ 10, 20, 30, 40, 50, 60 ]
// b >> undefined
// rest >> []

// 2. 객체에서 rest
const icecream = {
    company: 'lotte',
    flavor: 'choco',
    price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); // choco
console.log(rest); // { company: 'lotte', price: 1000 }

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1); // 1
console.log(two1); // 2
console.log(rest2); // [ 3, 4, 5, 6, 7, 8 ]