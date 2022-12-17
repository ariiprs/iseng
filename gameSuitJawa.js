var tanya = true;

while( tanya ){

// menangkap pilihan player

var p = prompt('pilih : gajah, semut, orang');

// menangkap pilihan komputer
// membangkitkan bilangan random

var comp = Math.random();

if( comp < 0.34 ){
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.67 ){
    comp = 'orang';
} else {
    comp = 'semut';
}


var hasil = '';

if( p == comp ){
    hasil = 'mantap seri';
} else if( p == 'gajah'){
    hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';

} else if ( p == 'orang'){
    hasil = ( comp == 'gajah') ? 'KALAH' : 'menang';
   
} else if ( p == 'semut') {
    hasil = ( comp == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'lu salah masukin data';
}

alert( 'kamu memilih ' + p + ' dan komputer memilih ' + comp + '\n' + hasil );

tanya = confirm('mau main lagi?');

}

alert('terima kasih banyak telah bermain')

// menentukan rules


//tampilkan hasilnyaa


