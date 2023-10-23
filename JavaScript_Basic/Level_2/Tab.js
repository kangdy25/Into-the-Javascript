const tabButton = $('.tab-button');
const tabContent = $('.tab-content')

// for (let i = 0; i < tabButton.length; i++) {
//     tabButton.eq(i).on('click', ()=>{
//         tabOpen(i);
//     })
// }

$('.list').click((e)=>{
    console.log(e.target.dataset.id)
    tabOpen(parseInt(e.target.dataset.id))
})

function tabOpen(num) {
    tabButton.removeClass('orange');
    tabButton.eq(num).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(num).addClass('show');
}