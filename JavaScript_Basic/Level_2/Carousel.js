// 캐러셀 슬라이드 디폴트 세팅
const slide = $('.slide-box');
let currentSlide = 0;

// 캐러셀 숫자별 이동 버튼 기능
function ToSlide(e) {
    const index = (e.target.getAttribute('data-index'));
    currentSlide = index;
    let translate = -100 * currentSlide;
    $('.slide-container').css('transform', `translateX(${translate}vw)`);
    console.log('현재 슬라이드 ' + currentSlide);
}
//  넘버 버튼 클릭 시 캐러셀 이동
let slideBtn = document.querySelectorAll('.slide-btn');
slideBtn.forEach(btn => {
    btn.addEventListener('click', ToSlide);
})

// 캐러셀 이전, 다음 버튼 기능
$('.after').on('click', ()=>{
    if (currentSlide < slide.length - 1) {
        currentSlide++;
        let translate = -100 * currentSlide;
        $('.slide-container').css('transform', `translateX(${translate}vw)`)
    }
    console.log('현재 슬라이드 ' + currentSlide)
})
$('.before').on('click', ()=>{
    if (0 < currentSlide) {
        currentSlide--;
        let translate = -100 * currentSlide;
        $('.slide-container').css('transform', `translateX(${translate}vw)`)
    }
    console.log('현재 슬라이드 ' + currentSlide)
})