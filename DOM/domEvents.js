// eventHandler()

// melakukan aksi pada saat klik p3 maka background akan berubah
// panggil p3 
const p3 = document.querySelector('.p3');
// buat function untuk merubah warna
function ubahWarna(){
    p3.style.backgroundColor = 'lightblue';
}
// aksi agar berubah warna pada saat di click
p3.onclick = ubahWarna;

// merubah tulisan h1 pada saat di klik
const h1 = document.getElementById('judul');
function ubahTulisan(){
    h1.innerHTML = 'Muhammad Dandri Handian';
    h1.style.color = 'coral';
}
h1.onclick = ubahTulisan;

// addEventListener() (REKOMENDASI)
/* Mouse Event = click, dblclick, mouseover, mouseenter,
                mouseup, mouseleave, wheel, ..
   Keyboard Event = keydown, keypress, keyup, ..
   Form Event = reset, submit, ..
*/
// merubah background item 2 pada saat di click
const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.addEventListener('dblclick', function(){
    li2.style.backgroundColor = 'green';
})

// menambah element li baru pada saat klik p4 dan mengganti tulisan p4
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    p4.innerHTML = "eits udah ditambahin tuh"
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('ini baru');
    liBaru.appendChild(teksLiBaru);
    const ul = document.querySelector('section#b ul');
    ul.appendChild(liBaru);
})

// melakukan aksi pada p1 ketika mouse masuk bgnya grey, ketika keluar lagi white
const p1 = document.getElementsByClassName('p1')[0];
p1.addEventListener('mouseenter', function(){
    p1.style.backgroundColor = 'grey';
    p1.innerHTML = 'Hallo nama saya Muhammad Dandri Handian, saya lulusan s1 jurusan teknik informatika dari kampus Universitas Komputer Indonesia'
});
p1.addEventListener('mouseleave', function(){
    p1.style.backgroundColor = 'white';
    p1.innerHTML = 'paragraf 1';
})
