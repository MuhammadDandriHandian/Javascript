var penumpang = ['dandri', undefined, 'ari'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang
    } else {
        for (var i = 0; i < penumpang.length; i++){
            if (penumpang[i] == undefined){
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang){
                return 'penumpang sudah ada di dalam angkot';
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang)
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        return 'angkot sedang kosong, tidak mungkin ada penumpang turun'
    } else {
        for (var i = 0; i < penumpang.length; i++){
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang; 
            } else if ( i == penumpang.length - 1){
                return 'penumpang tidak ada di dalam angkot';
            }
        }
    }
}

console.log(penumpang)

