// saat tombol icon diklik lakukan 

let nav = document.querySelector(".icon");
nav.addEventListener('click', function () {
    let navigasi = document.getElementById("nav");
    let konten = document.getElementById("konten");
    let bawah = document.getElementById("bawah");
    let kiri = document.getElementById("kiri");
    let kanan = document.getElementById("kanan");

    if (navigasi.className.indexOf('navigasi-hilang') == -1) {
        navigasi.className += " navigasi-hilang";
        konten.className = konten.className.replace("konten", "konten-penuh");
        bawah.className = bawah.className.replace("bawah-hilang", "bawah");
        kiri.className += " konten-ubah";
        kanan.className += " konten-ubah";
    } else {
        navigasi.className = navigasi.className.replace("navigasi-hilang", "");
        konten.className = konten.className.replace("konten-penuh", "konten");
        bawah.className = bawah.className.replace("bawah", "bawah-hilang");
        kiri.className = kiri.className.replace("konten-ubah", "");
        kanan.className = kanan.className.replace("konten-ubah", "");
    }
})