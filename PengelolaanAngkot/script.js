// function Angkot(supir, jurusan, penumpang, kas){
//     this.supir = supir;
//     this.jurusan = {
//         awal : jurusan[0],
//         akhir : jurusan[1]
//     };
//     this.penumpang = penumpang;
//     this.kas = kas;

//     this.penumpangNaik = function(namaPenumpang){
//         if (penumpang.length == 0){
//             this.penumpang.push(namaPenumpang);
//             return this.penumpang;
//         } else {
//             for(var i = 0; i < penumpang.length; i++){
//                 if (this.penumpang[i] == undefined){
//                 this.penumpang[i] = namaPenumpang;
//                 return this.penumpang
//                 } else if (penumpang[i] == namaPenumpang){
//                     return 'penumpang sudah ada di dalam angkot';
//                 } else if (i == penumpang.length - 1) {
//                     penumpang.push(namaPenumpang)
//                     return penumpang;
//                 }
//             }
//         }
//     }

//     this.penumpangTurun = function(namaPenumpang, bayar){
//         if (this.penumpang.length == 0){
//             alert('Belum ada penumpang');
//             return false;
//         }
//         for (var i = 0; i < penumpang.length; i++){
//             if (this.penumpang[i] == namaPenumpang){
//                 this.penumpang[i] = undefined;
//                 this.kas += bayar;
//                 return this.penumpang;
//             } else {
//                 (this.penumpang[i] == namaPenumpang);
//                 return 'tidak ada penumpang yang bernama' + namaPenumpang;
//             }
//         }
//     }
// }


// var angkot = new Angkot('Ahdan Naudal', ['Dago', 'Cicaheum'], ['dandri'], 0);
// var angkot2 = new Angkot('Aliudin Maksur', ['Ramayana', 'Pasir Hayam'], [], 110000);
