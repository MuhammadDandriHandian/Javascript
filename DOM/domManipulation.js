/* DOM MANIPULATION
- innerHTML = untuk mengubah isi html
- style.color = untuk mengubah css
- setAttribute('id', 'judul') = untuk menambah atribute (tapi menimpa attribute sebelumnya)
- getAttribute = untuk memanggail attribute
- removeAttribure = untuk menghapus attribute

classList (untuk utak atik class pake ini)
- element.classList.add() = tambah class
- element.classList.remove() = hapus class
- element.classList.toggle() = jika class belum ada maka akan menambahkan, jika sudah akan menghapus
- element.classList.item() = untuk mengetahui class tertentu di sebuah element
- element.classList.contains() = cek element mempunyai class tertentu apa tidak
- element.classList.repalce() = menggaganti class yg baru
*/

// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Hello M Dandri</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<ul><li>Hai</li><li>Hai</li></ul>';

// const judul = document.querySelector('#judul');
// judul.style.color = 'green';
// judul.style.backgroundColor = 'salmon'

const a = document.querySelector('section#a a');
// tambah atribute
a.setAttribute('id', 'link');
// munculkan atribute
console.log(a.getAttribute('href'));
// hapus atribute
// a.removeAttribute('href');

///////////////////////////////////////
// manipulasi untuk mengelola class
const p2 = document.querySelector('.p2');
//tambah class
p2.classList.add('label');
// hapus class
p2.classList.remove('p2');
// tambah/kurang (kondisional)
p2.classList.toggle('label')
// untuk mengetahui nama kelas pada sebuah elemen menggunakan indeks
p2.classList.item(2);
// menanyakan class ada atau tidak
p2.classList.contains('p2');
// mengganti class (class yg ingin diganti, nama class baru)
p2.classList.replace('p2', 'par2');  

