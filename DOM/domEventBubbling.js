// const close = document.querySelectorAll('.close');
// close.forEach(function(el) {
//     el.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();         // untuk mengindari aksi default
//         e.stopPropagation();        // untuk menhindari bubbling

//     });
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click', function(e){
//         alert('ok')
//     })
// })

/* event bubbling adalah ketika card di beri event maka close pun akan
   terkena event dari card, maka untuk menangainya diberi method stopPropagation()
*/

/* script yang lebih betul hanya memberi satu event saja pada container
    jadi container akan membaca jika user mengklik close maka target display = none
*/
const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){
        e.target.parentElement.style.display = 'none';
    }
})
