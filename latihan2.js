var barang = ["Buku", " Tas", " Kacamata", " Bolpoin", " Penghapus"];
barang.sort();
barang_input = prompt("Masukkan Nama Barang");
barang.push(barang_input);
cari = prompt("Cari Barang");
var i;
for (i = 0;i < barang.length; i++){
	if(cari == barang[i]){
		alert("Barang "+cari+" ditemukan");
		console.log("Barang "+cari+" ditemukan");
		break;
	}
	if (i == barang.length - 1) {
		barang.push(cari);
		alert("Barang "+cari+" tidak ditemukan");
		console.log("Barang "+cari+" tidak ditemukan");
		console.log("Barang "+cari+" berhasil ditemukan");
		alert("Barang "+cari+" berhasil ditambah");
		break;
	}
}
document.write(barang.sort());