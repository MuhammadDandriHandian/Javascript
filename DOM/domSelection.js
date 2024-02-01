/* DOM SELECTION
1. document.getElementById()
2. document.getElementsByTagName()
3. document.getElementsByClassName()
4. document.querySelector()
5. document.querySelectorAll()
*/

// document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'gray';
judul.innerHTML = 'Dandri Handian';

// document.getElementsByTagName() 
// -> mengembalikan HTMLColections
const p = document.getElementsByTagName('p')
p[0].style.backgroundColor = 'coral';
p[2].style.backgroundColor = 'blue';

for (let i = 0; i < p.length; i++){
    p[i].style.color = 'green';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '40px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Hai ganteng';


// document.getElementsByClassName() 
// -> mengembalikan HTMLColections
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diganti dari javascript';


// document.querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = "green";
p4.style.backgroundColor = 'lightBlue'

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.fontSize = '30px'

// document.querySelectorAll() untuk mengambil semua selector
const scsn = document.querySelectorAll('section');
scsn[0].style.backgroundColor = 'yellow';

// penulisan bisa seperti ini agar tidak mencari seluruh document
const sectionB = document.querySelector('#b ul');
const li3 = sectionB.getElementsByTagName('li');
li3[2].style.fontSize = '40px';

