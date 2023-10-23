// 스크롤 시 폰트 사이즈 변경
window.addEventListener('scroll', ()=>{
    if (window.scrollY > 300) {
        $('.logo').css('font-size', '10px')
    } else {
        $('.logo').css('font-size', '40px')
    }
})
// div의 스크롤바 내린 양 + 눈에 보이는 div 높이 == div의 실제 높이
document.querySelector('.lorem').addEventListener('scroll', ()=>{
    let scrollAmount = document.querySelector('.lorem').scrollTop; // 현재 페이지 스크롤양
    let Height = document.querySelector('.lorem').clientHeight; // 현재 웹페이지 보이는 높이
    let scrollHeight = document.querySelector('.lorem').scrollHeight;
    console.log(scrollAmount, Height, scrollHeight)
    if (scrollAmount + Height == scrollHeight) {
        alert('다 읽었노')
    }
})