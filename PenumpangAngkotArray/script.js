
let penumpang = ['dandri', 'apip', 'nugi']
function tambahPenumpang(namaPenumpang){
    for(let i = 0; i < penumpang.length; i++){
        if(penumpang[i] == namaPenumpang){
            return 'Penumpang sudah didalam angkot';
        } else if(penumpang[i] == undefined){
            penumpang[i] = namaPenumpang;
            return penumpang
        } else if (i == penumpang.length - 1){
            penumpang.push(namaPenumpang);
            return penumpang;
        }
    }
}

function hapusPenumpang(namaPenumpang){
    for(let i = 0; i < penumpang.length; i++){
        if (namaPenumpang == penumpang[i]){
            penumpang[i] = undefined;
            return penumpang;
        } else if (i == penumpang.length - 1 ){
            return 'Penumpang sudah turun';
        }
    }
}
console.log(penumpang)