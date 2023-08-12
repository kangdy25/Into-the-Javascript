const { type } = require("express/lib/response");

function samyukgo(number) {
    if (number % 9 === 0) {
        console.log('박수 2번 ㄱㄱ');
    } else if (number % 3 === 0) {
        console.log('박수 1번');
    } else {
        console.log('통과');
    }
}

function hapkyuk(garon, minbup) {
    if ((garon >= 0 && garon <= 100) && 
    (minbup >= 0 && minbup <= 100)) {
        let score = garon + minbup;
        if (garon < 40 || minbup < 40) {
            alert('앙 탈락띠');
            if (score >= 120) {
                console.log('합격');
            } else if (score < 120) {
                console.log('불합격');
            } 
        } 
    }

}