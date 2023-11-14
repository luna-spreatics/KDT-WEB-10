// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

// 클래스 정의 (틀을 만듦)
class House {
    // 생성자 함수
    // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    // 메서드 1: 집의 나의를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요! `);
    }

    // 메서드 2: 집의 창문 개수 출력
    getWindow() {
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
}

// 클래스(틀)를 이용해 객체를 찍어보자(생산해보자!)
const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >>', house1);
console.log(typeof house1); // object
console.log(house1.year);
house1.getAge();
house1.getWindow();

// house2: 2007년에 지어진 "자이" 이름이고, 창문은 10개
const house2 = new House(2007, '자이', 10);
console.log(house2);
house2.getAge();
house2.getWindow();

// 클래스 상속
// 부모 클래스: House
// 자식 클래스 Apartment
class Apartment extends House {
    constructor(year, name, window, floor, windowMaker) {
        // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
        super(year, name, window);
        this.floor = floor;
        this.windowMaker = windowMaker;
    }

    getAptInfo() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 
        총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}이다.`;
    }

    // 오버라이딩(overriding)
    // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
    getWindow() {
        return `${this.name} 아파트의 ${this.window} 개의 창문은 
        ${this.windowMaker} 회사에서 생산되었습니다.`;
    }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'KCC');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());