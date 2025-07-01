// 미션1. DOM API

// index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.
// DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.

let $text = document.getElementById('text')
let $btn = document.getElementById('changeTextButton')

console.log($text)
console.log($btn)

function changeContent() {
    $text.textContent = '요소 변경됨';
}

$btn.addEventListener('click', changeContent)


// 미션2. DOM API & Select Tag

// 단, createElement, appendChild를 사용해서 생성해주세요.
// select 태그의 값을 변경할 때마다, 변경된 값을 출력하는 기능도 작성해주세요.

const $app = document.getElementById('app');

let options = [
	{ text: "Javascript", value: "javascript" },
	{ text: "Next.js", value: "next" },
	{ text: "React.js", value: "react" },
	{ text: "TypeScript", value: "typescript" },
];

const $select = document.createElement('select');
$select.id = 'skills';

options.forEach((element)=>{
	let $option = document.createElement("option");
	$option.textContent = element.text;
	$option.value = element.value;

	$select.appendChild($option);
})

$app.appendChild($select);

$select.addEventListener('change', (e) => {
    console.log(e.target.value);
});
