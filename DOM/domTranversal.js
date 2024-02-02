/* METHOD DOM Tranversal
   - parentNode             = mengembalikan node (bila ada enter di html nanti enternya yg terbaca)
   - parentElement          = mengembalikan element
   - nextSibling            = node
   - nextElementSibling     = element
   - previousSibling        = node
   - previousElementSibling = element
*/

// // hapus card
// const card = document.querySelector('.card');
// const x = document.querySelector('.close');
// x.addEventListener('click', function(){
//     card.style.display = 'none'
// });

// // untuk mengahpus semua card menggunakan dom traversal
// const x = document.querySelectorAll('.close');
// for(let i = 0; i < x.length; i++){
//     x[i].addEventListener('click', function(){
//         x[i].parentElement.style.display = 'none';
//     })
   
// }

// // atau functionnya dinamain
// const x = document.querySelectorAll('.close');
// for(let i = 0; i < x.length; i++){
//     x[i].addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//     })
   
// }

// atau pake forEach = untuk looping
const close = document.querySelectorAll('.close');
close.forEach(function(el) {
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});