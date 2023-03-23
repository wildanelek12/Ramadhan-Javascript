var nama = "Nadia Arianesya";
var username = "neeesya";
var umur = 20;
var password = "nesya123";
var instansi = "UM";
var token;

function generateRandomNumber() {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

function prosesLogin(username, password) {
  if (username == "neeesya" && password == "nesya123") {
    // let token = generateRandomNumber();
    console.log("BERHASIL MASUK");
    // console.log("TOKEN ANDA = " + token);
    ambilData(nama, username, umur, instansi);
  } else if (username == "neeesya" && password !== "nesya123") {
    console.log("PASSWORD ANDA SALAH");
  } else {
    console.log("USER TIDAK DITEMUKAN");
  }
}

function ambilData(nama, username, umur, instansi) {
  if (umur >= 21) {
    console.log("Nama : " + nama);
    console.log("Username : " + username);
    console.log("Umur : " + umur);
    console.log("Kategori : dewasa");
    console.log("Instansi : " + instansi);
  } else {
    console.log("Nama : " + nama);
    console.log("Username : " + username);
    console.log("Umur : " + umur);
    console.log("Instansi : " + instansi);
  }
}

prosesLogin(username, password);
