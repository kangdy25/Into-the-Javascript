// Date 객체를 이용하여 현재 날짜 생성
let date = new Date();

// 기본 캘린더 출력 함수
const renderCalendar= ()=>{
    // Date 객체 내의 메서드를 이용하여 "년"과 "월" 불러오기
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    // year-month 클래스에 현재의 "년"과 "월" 삽입 (이때 월에는 1을 더해줘야 한다.)
    document.querySelector(".year-month").textContent = `${viewYear}년 ${viewMonth + 1}월`;

    // Date 객체의 "일(date)"에 해당하는 부분에 0을 전달하면 지난 달의 마지막 날을 출력한다.
    const prevLast = new Date(viewYear, viewMonth, 0); // 지난 달의 마지막 날
    const thisLast = new Date(viewYear, viewMonth + 1, 0); // 이번 달의 마지막 날

    // Date 객체 내의 메서드를 이용하여 "날짜"와 "요일" 불러오기
    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    // 날짜를 담을 배열 생성
    const prevDates = [];
    // keys() 메서드를 이용하여 배열 이터레이터 생성 후 1을 더해주고, slice 메서드를 이용해 0 값 삭제
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    // 지난 달 마지막 요일이 토요일이 아니라면 (토요일일 경우, 지난 달 표시할 필요 X)
    if (PLDay !== 6) { 
        for (let i = 0; i < PLDay + 1; i++) {
            // prevDate 배열에 마지막 날짜부터 1씩 줄어든 값을 배열 앞쪽에 추가한다.
            // Ex) 30, 29, 28 ...
            prevDates.unshift(PLDate - i);
        }
    }

    // 이번 달 마지막 날짜의 요일을 기준으로 필요한 개수를 파악하여 nextDate 배열에 추가한다.
    // Ex) 1, 2, 3 ...
    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    // concat 메서드를 활용하여 prevDate, thisDate, nextDate 배열을 모두 합친다.
    const dates = prevDates.concat(thisDates, nextDates);

    // 합쳐진 dates 배열의 요소를 돌면서 요소를 출력하는 html을 생성한다. 
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);
    dates.forEach((date, i)=>{
        const condition = (i >= firstDateIndex && i < lastDateIndex + 1)
                            ? 'this' 
                            : 'other';
        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })

    // join 메서드로 배열의 모든 요소를 연결하여 하나의 문자열로 만든다.
    document.querySelector('.dates').innerHTML = dates.join('');

    // 오늘 날짜 특별 표시하기
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
}
renderCalendar();

// 이전 달 클릭 시 이전 달 캘린더 화면에 출력
const prevMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

// 다음 달 클릭 시 다음 달 캘린더 화면에 출력
const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

// 이번 달 클릭 시 이번 달 캘린더 화면에 출력
const goToday = () => {
    date = new Date();
    renderCalendar();
}

