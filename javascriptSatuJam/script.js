// var nama = 'Muhammad Dandri Handian';
// var umur = 23;
// var jurusan = 'Teknik Informatika';
// var kota = 'Cianjur';
// var istri = null;

// umur = 24;

// if (istri == null){
//     istri = 'belum menikah';
// } else {
//     istri = 'sudah menikah '
// }

// // switch (istri){
// //     case 'aura':
// //         istri = 'sudah menikah dengan aura'
// //         break
// //     case 'lala':
// //         istri = 'sudah menikah dengan lala'
// //         break
// //     default :
// //         istri = 'belum menikah'
// //         break
// // }

// alert(`Hallo nama saya ${nama} usia saya ${umur} dari jurusan ${jurusan}, saya berasal dari kota ${kota} dan status saya ${istri}`)

// var saldoAwal = 2000000;
// var saldoAkhir = 500000;
// var saldo = saldoAwal - saldoAkhir;

// alert(`Saldo awal anda sebesar ${saldoAwal} dan saldo akhir anda sebesar ${saldoAkhir}, maka pengurangan saldo anda sebesar ${saldo}`)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // array

// let kota = ['Cianjur', 'Bandung', 'Jakarta'];
// alert(kota);
// alert(kota[2]);

// // concat
// alert(kota.join(' - '))

// // tambah akhir
// kota.push('Tangerang');
// alert(kota)

// // hapus akhir
// kota.pop()
// alert(kota)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // looping for

// for( let i = 1; i <= 100; i++){
//     console.log(`${i}. Saya akan sukses dan memberikan manfaat untuk sekitar`)
// }

// // pake array (mapping)
// let kota = ['Cianjur', 'Bandung', 'Jakarta', 'Tangerang', 'Sumedang', 'Banten'];
// for (let i = 0; i < kota.length; i++){
//     console.log(kota[i])
// }

// // looping while

// let i = 1;
// while(i <= 5){
//     console.log(i + ' saya akan memberikan manfaat untuk sekitar');
//     i++
// }

// let a = 5;
// do {
//     console.log(a + ' Hello World');
//     a++
// } while (a <= 5)

// // latihan
// promt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
// let bayar = 50000;
// let uang = prompt(`Total yang harus dibayar sebesar ${bayar}
// Masukan uang anda : `);

// let totalUang = uang - bayar;

// if (bayar > uang){
//     alert('Uang anda tidak cukup')
// } else {
//     alert('Kembalian anda sebesar ' + totalUang);
// }

// menentukan hari dari tanggal yag ada saat ini di pc kalian
let hari = new Date().getDay();
let tanggal = new Date().getDate();

switch (hari){
    case 1:
        hari = 'Senin'
        break;
    case 2:
        hari = 'Selasa'
        break;
    case 3:
        hari = 'Rabu'          
        break;
    case 4:
        hari = 'Kamis'
        break;
    case 5:
        hari = 'Jumat'
        break;
    case 6:
        hari = 'Sabtu'
        break;
    case 7:
        hari = 'Minggu'
        break;
}
console.log(`Ini adalah hari ${hari} dan tanggal ${tanggal}`);