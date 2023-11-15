// spread 연산자
// 반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할 (== 객체의 값을 펼친다!!!)
// spread in array
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b]; // [1, 2, 3, 4, 5]
console.log(spread);

// spread in string
const c = [...'HELLO']; // [ 'H', 'E', 'L', 'L', 'O' ]
const d = 'HELLO'.split(''); // [ 'H', 'E', 'L', 'L', 'O' ]
console.log(c);
console.log(d);

// spread in object
const chip = {
    base: 'chip',
    company: 'lotte',
};

const potatoChip = {
    ...chip,
    flavor: 'potato',
};

const sweetPotatoChip = {
    ...chip,
    flavor: 'sweet potato',
};

console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);

// 실습
const word1 = 'abc';
const word2 = 'xyz';

const wordArr = [...word1, ...word2];
console.log(wordArr)