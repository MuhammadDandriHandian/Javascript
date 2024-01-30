/* 
document.createElement()           untuk membuat elemet
document.createTextNode()          untuk membuat teks
node.appendChild()                 untuk memasukan teks baru ke element baru dan memasukan ke akhir element
node.insertBefore(baru,sebelum)    untuk memasukan element dan teks baru ke antara element lama
parentNode.removeChild()           untuk hapus element
parentNode.replaceChild(lama,baru) untuk mengganti element
 */

// PAKE appendChild()
// tambah paragraf baru setelah paragraf 3
// buat element dan teks baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('ini baru pake appendChild');
// simpan teks ke pBaru
pBaru.appendChild(teksPBaru);
// simpan di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// tambah paragraf 5
const p5 = document.createElement('p');
const teksP5 = document.createTextNode('paragraf 5 baru appendChild');
p5.appendChild(teksP5);
const sectionB = document.getElementById('b');
sectionB.appendChild(p5);

// tambah h1 di akhir body
const h1 = document.createElement('h1');
const teksH1 = document.createTextNode('Hi World appendChild');
h1.appendChild(teksH1);
document.body.appendChild(h1)

// tambah li baru setelah item 1 menggunakan insertBefore
const liBaru = document.createElement('li');
const teksLi = document.createTextNode('item baru insertBefore');
liBaru.appendChild(teksLi);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// tambah spasi di antara section
const spasi = document.createElement('p');
const teks = document.createTextNode('=========insertBefore==========');
spasi.appendChild(teks);
const div = document.getElementById('container');
// masukan pada div elemenet baru spasi sebelum sectionB
div.insertBefore(spasi, sectionB)

// hapus element paragraf 1
const p = document.getElementsByTagName('p');
sectionA.removeChild(p[0]);

// replace element paragraf 4
const p4baru = document.createElement('p');
const teksp4 = document.createTextNode('ini replace');
p4baru.appendChild(teksp4);
sectionA.replaceChild(p4baru, p[2]);
