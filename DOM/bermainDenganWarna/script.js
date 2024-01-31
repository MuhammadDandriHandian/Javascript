// ubah warna menjadi light blue mode
const ubahWarna = document.getElementsByTagName('button')[0];
const div = document.getElementById('satu');
ubahWarna.addEventListener('click', function(){
    document.body.classList.toggle('black');
}) 

// membuat aksi acak warna dengan membuat button terlebih dahulu
const btBaru = document.createElement('button');
const teksBt = document.createTextNode('Acak Warna');
btBaru.appendChild(teksBt);
ubahWarna.after(btBaru)
btBaru.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

// buat aksi bar warna
const sMerah = document.querySelector('input[name = sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


 // buat warna sesuai perginya cursor
 const div3 = document.getElementById('tiga');
 div3.addEventListener('mousemove', function(event){
     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
     const yPos = Math.round((event.clientY / window.innerWidth) * 255);
     div3.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
 });