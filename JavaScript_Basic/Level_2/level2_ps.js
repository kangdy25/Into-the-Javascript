// 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
function calcMS(min, sec) {
    let ms = (min * 60 * + sec) * 1000;
    return ms;
}

// 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
// 근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 
// 주의사항은 가격으로 10.3 이런거 넣으면 뒤에 소수점 길게 나올 수도 있으니 알아서 처리해보든가 합시다. 

function discount(price, first) {
    let discountPrice;
    if (first === true) {
        discountPrice = (0.9 * price - 1.5);
    } else {
        discountPrice = (0.9 * price);
    }
    return parseFloat(discountPrice.toFixed(2));
}