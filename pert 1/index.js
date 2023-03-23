var username = "wildanelek123";
var password = "test123";
var token;

function prosesLogin(uname, pw) {
    if (uname == "wildanelek12" && pw == "test123") {
        token = "INITOKENLOGIN";
        ambilDataUser(token);
    } else {
        console.log("USER TIDAK DITEMUKAN")
    }
}

function ambilDataUser(tkn) {
    if (tkn) {
        console.log('====================================');
        console.log("Berhasil Mendapatkan Data User");
        console.log('====================================');
    } else {
        console.log('====================================');
        console.log("Anda tidak mempunyai akses");
        console.log('====================================');
    }
}

prosesLogin(username, password);
