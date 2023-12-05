// Select 요소가 선택되었을 때 동작하는 함수
document.querySelector(".form-select").addEventListener("change", (e)=>{
    let element = document.querySelector("#hide-form");
    let selectedValue = e.target.value;
    let shirtSize = [95, 100, 105];
    let pantsSize = [28, 30, 32];

    if (selectedValue === "shirt") {
        element.classList.remove("form-hide");
        $('.form-select').eq(1).html('')
        sizeForm = shirtSize.forEach((data)=>{
            $('.form-select').eq(1).append(`<option>${data}</option>`)
        })
    } else if (selectedValue === "cap") {
        element.classList.add("form-hide");
    } else if (selectedValue === "pants") {
        element.classList.remove("form-hide");
        $('.form-select').eq(1).html('')
        sizeForm = pantsSize.forEach((data)=>{
            $('.form-select').eq(1).append(`<option>${data}</option>`)
        })
    }
})

// HTML 생성 - 방법 1
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// // HTML 생성 - 방법 2
// var b = '<p>안녕하슈</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', b);
