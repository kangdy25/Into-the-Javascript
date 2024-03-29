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

// 마우스 따운!! 스와이프 나와!!!
let start = 0;
let isPressed = false; 
let coordinate = 0;

// 캐러셀 별 마우스 다운시 시작좌표 설정 및 마우스 다운 이벤트 확인
for (let i = 0; i < $('.slide-box').length; i++) {
    $('.slide-box').eq(i).on('mousedown', (e)=>{
        start = 0;
        isPressed = true;
        start = e.clientX;
    })
}

// 첫 번째 캐러셀 스와이프 (왼쪽 X, 오른쪽 O)
$('.slide-box').eq(0).on('mousemove', (e)=>{
    if (isPressed == true) {
        coordinate = e.clientX - start;
        if (coordinate > 0) {
            $('.slide-container').css('transform', `translateX(0px)`)
        } else {
            $('.slide-container').css('transform', `translateX(${coordinate}px)`)
        }
    }
})
$('.slide-box').eq(0).on('mouseup', (e)=>{
    isPressed = false;
    if (coordinate < -200) {
        $('.slide-container').css('transform', `translateX(-100vw)`)
    } else {
        $('.slide-container').css('transform', `translateX(0vw)`)
    }
})

// 두 번째 캐러셀 스와이프 (왼쪽 O, 오른쪽 O)
let coordinate2 = 0
$('.slide-box').eq(1).on('mousemove', (e)=>{
    if (isPressed == true) {
        coordinate2 = e.clientX - start;
        console.log("좌표 2은" + coordinate2)
        if (coordinate2 > 0) {
            $('.slide-container').css('transform', `translateX(calc(-100vw + ${coordinate2}px))`);
        } else if (coordinate2 < 0) {
            $('.slide-container').css('transform', `translateX(calc(-100vw + ${coordinate2}px))`);
        } 
    }
})
$('.slide-box').eq(1).on('mouseup', (e)=>{
    isPressed = false;
    if (coordinate2 < -200) {
        $('.slide-container').css('transform', `translateX(-200vw)`)
    } else if (coordinate2 > 200){
        $('.slide-container').css('transform', `translateX(0vw)`)
    } else {
        $('.slide-container').css('transform', `translateX(-100vw)`)
    }
})

// 세 번째 캐러셀 스와이프 (왼쪽 O, 오른쪽 X)
let coordinate3 = 0
$('.slide-box').eq(2).on('mousemove', (e)=>{
    if (isPressed == true) {
        coordinate3 = e.clientX - start;
        console.log("좌표 3은" + coordinate3)
        if (coordinate3 > 0) {
            $('.slide-container').css('transform', `translateX(calc(-200vw + ${coordinate3}px))`);
        } else if (coordinate3 < 0) {
            $('.slide-container').css('transform', `translateX(-200vw)`);
        } 
    }
})
$('.slide-box').eq(2).on('mouseup', (e)=>{
    isPressed = false;
    if (coordinate3 < 200) {
        $('.slide-container').css('transform', `translateX(-200vw)`)
    }  else {
        $('.slide-container').css('transform', `translateX(-100vw)`)
    }
})
