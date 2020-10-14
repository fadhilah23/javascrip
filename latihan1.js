alert("Berat Ideal Kamu");
var nama = prompt("Masukan Nama");
var gender = prompt("Masukan Gender");
var tinggi = prompt("Masukan Tinggi Badan");
var hasil1 = (tinggi - 100)-((tinggi -100)*0.1);
var hasil2 = (tinggi - 100)-((tinggi -100)*0.15);
if (gender == "pria"||
	gender == "Pria") {
	document.write("Hai " +nama+ ". Berat idealmu adalah : " +hasil1);
}
if (gender == "wanita"||
	gender == "Wanita"){
	document.write("Hai " +nama+ ". Berat idealmu adalah : " +hasil2);
}