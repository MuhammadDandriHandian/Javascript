// membuat aksi pada p2 menggunakan method onclick(event handler)
const paragraf = document.querySelector('.p2');
function ubahWarna(){
    paragraf.style.backgroundColor = 'coral'
}
paragraf.onclick = ubahWarna;

const judul = document.getElementById('judul');
function cetakMiring(){
    judul.style.fontStyle = 'italic'
}
judul.onclick = cetakMiring;

// membuat aksi pada p4 menggunakan method addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('dblclick', function(){
    const ul = document.querySelector('section#b ul')
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Ini baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})

/* KEGUNAAN
- Event handler akan menimpa aksi sebelumnya sehingga aksi yang dijalankan hanya aksi yang terakhir
- addEventListener akan menjalankan semua aksi yang dituliskan

MOUSE EVENT
click, dblclick, mouseover, mouseenter, mouseup, wheel, ..
*/


