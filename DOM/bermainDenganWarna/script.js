 // gak perlu panggil body juga boleh
 const body = document.getElementsByTagName('body')[0]
 const btn = document.querySelector('button');
 function ubahWarna(){
     // body.style.backgroundColor = 'lightblue';
     body.classList.toggle('biru-muda');
 }
 btn.onclick = ubahWarna;

 // buat button acak warna
 const bAcakWarna = document.createElement('button');
 const tAcakWarna = document.createTextNode('Acak Warna');
 bAcakWarna.appendChild(tAcakWarna);
 bAcakWarna.setAttribute('type', 'button');
 btn.after(bAcakWarna);
 function acakWarna(){
     const r = Math.round(Math.random() * 255 + 1);
     const g = Math.round(Math.random() * 255 + 1);
     const b = Math.round(Math.random() * 255 + 1);
     body.style.backgroundColor = 'rgb('+ r +','+ g + ','+ b +')'
 }
 bAcakWarna.onclick = acakWarna;

 // buat slide warna
 const sMerah = document.querySelector('input[name=sMerah]');
 const sHijau = document.querySelector('input[name=sHijau]');
 const sBiru = document.querySelector('input[name=sBiru]');

 sMerah.addEventListener('input', function(){
     const r = sMerah.value;
     const g = sHijau.value;
     const b = sBiru.value;
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
 });
 sHijau.addEventListener('input', function(){
     const r = sMerah.value;
     const g = sHijau.value;
     const b = sBiru.value;
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
 });
 sBiru.addEventListener('input', function(){
     const r = sMerah.value;
     const g = sHijau.value;
     const b = sBiru.value;
     document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
 });

 // buat warna sesuai perginya cursor
 document.body.addEventListener('mousemove', function(event){
     const xPos = Math.round((event.clientX / window.innerWidth) * 255);
     const yPos = Math.round((event.clientY / window.innerWidth) * 255);
     document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
 });