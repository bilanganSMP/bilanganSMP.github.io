// mengambil data dan menampilkanya


let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
console.log(namavariabel);
    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // rangkai konten soal;
            let bg_pertanyaan = document.createElement('div');
            bg_pertanyaan.setAttribute('class', 'bg_pertanyaan');
            if (i != 0) {
                bg_pertanyaan.className += " hilang";
            }

            let no = document.createElement('div');
            no.setAttribute('class', 'no');

            let soal = document.createElement('p');
            let text_soal = document.createTextNode('Soal ke ');

            let span = document.createElement('span');
            let text_span = document.createTextNode(i + 1);

            span.appendChild(text_span);
            soal.appendChild(text_soal);
            soal.appendChild(span);
            no.appendChild(soal);
            bg_pertanyaan.appendChild(no);

            // ---------------------------------

            let inti_pertanyaan = document.createElement('div');
            inti_pertanyaan.setAttribute('class', 'inti_pertanyaan');

            let pertanyaannya = document.createElement('div');
            pertanyaannya.setAttribute('class', 'pertanyaannya');

            let new_p = document.createElement('p');
            let text_p = document.createTextNode(soaldata);

            new_p.appendChild(text_p);
            pertanyaannya.appendChild(new_p);
            inti_pertanyaan.appendChild(pertanyaannya);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

           

            // ---------------------------------

            let soall = document.createElement('div');
            soall.setAttribute('class', 'soall');

            for (let ii = 0; ii < 4; ii++) {
                let bg_pilihan = document.createElement('label');
                bg_pilihan.setAttribute('class', 'bg_pilihan');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'radio' + i);
                if (ii == 0) {
                    input.setAttribute('value', 'a');
                } else if (ii == 1) {
                    input.setAttribute('value', 'b');
                } else if (ii == 2) {
                    input.setAttribute('value', 'c');
                } else {
                    input.setAttribute('value', 'd');
                }

                let textnya = document.createElement('span');
                textnya.setAttribute('class', 'textnya');

                let nav_pilihan = document.createElement('span');
                nav_pilihan.setAttribute('class', 'nav_pilihan');

                let new_p1 = document.createElement('p');
                let text_p1 = document.createTextNode(jwb[ii]);

                new_p1.appendChild(text_p1);
                textnya.appendChild(nav_pilihan);
                textnya.appendChild(new_p1);
                bg_pilihan.appendChild(input);
                bg_pilihan.appendChild(textnya);
                soall.appendChild(bg_pilihan);
            }

            // ---------------------------------

            inti_pertanyaan.appendChild(soall);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let nav_sebelum = document.createElement('div');
            nav_sebelum.setAttribute('class', 'nav_sebelum');
            if (i == 0) {
                nav_sebelum.className += " disable";
            }

            let new_p2 = document.createElement('p');
            let text_p2 = document.createTextNode('Sebelumnya');

            new_p2.appendChild(text_p2);
            nav_sebelum.appendChild(new_p2);
            inti_pertanyaan.appendChild(nav_sebelum);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            

            // ---------------------------------

            let nav_selanjut = document.createElement('div');
            nav_selanjut.setAttribute('class', 'nav_selanjut');
            if (i == (cek.length - 1)) {
                nav_selanjut.className += " disable";
            }

            let new_p4 = document.createElement('p');
            let text_p4 = document.createTextNode('Selanjutnya');

            new_p4.appendChild(text_p4);
            nav_selanjut.appendChild(new_p4);
            inti_pertanyaan.appendChild(nav_selanjut);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // ---------------------------------

            let div_jawaban = document.createElement('div');
            div_jawaban.setAttribute('class', 'pertanyaannya hilang');


            let new_pp = document.createElement('p');
            let text_pp = document.createTextNode("Jawaban  = " + nih);

            new_pp.appendChild(text_pp);
            div_jawaban.appendChild(new_pp);

            inti_pertanyaan.appendChild(div_jawaban);

            // ---------------------------------

            let clear = document.createElement('div');
            clear.setAttribute('class', 'clear');
            inti_pertanyaan.appendChild(clear);
            bg_pertanyaan.appendChild(inti_pertanyaan);

            // letakkan di 
            const bd = document.getElementById('kiri');
            bd.appendChild(bg_pertanyaan);
        }

        // akhir if
        // perintah tombol selanjutnya
        // ---------------------------------

        let bg_pertanyaannya = document.querySelectorAll('.bg_pertanyaan');
        let tmbl_selanjutnya = document.querySelectorAll('.nav_selanjut');
        for (let i = 0; i < tmbl_selanjutnya.length - 1; i++) {
            tmbl_selanjutnya[i].addEventListener('click', function () {

                let bgnya = tmbl_selanjutnya[i].parentElement.parentElement;
                // menghilangkan bg_sekarang
                bgnya.className += " hilang";
                // menampilkan bg_pertanyaan selanjutnya
                bg_pertanyaannya[i + 1].className = bg_pertanyaannya[i + 1].className.replace("hilang", "");
            });

        }

        // ---------------------------------
        // perintah tombol kembali
        let tmbl_sebelumnya = document.querySelectorAll('.nav_sebelum');
        for (let i = 0; i < tmbl_sebelumnya.length; i++) {
            tmbl_sebelumnya[i].addEventListener('click', function () {
                if (i != 0) {
                    let bgnya = tmbl_sebelumnya[i].parentElement.parentElement;
                    bgnya.className += " hilang";
                    // menampilkan bg_pertanyaan selanjutnya
                    bg_pertanyaannya[i - 1].className = bg_pertanyaannya[i - 1].className.replace("hilang", "");
                }
            });
        }

        // ---------------------------------
        // tangkap soall pilihan yang dklik dan beri warna di nav soal
        let soallnya = document.querySelectorAll('.soall');
        let soal_navnya = document.querySelectorAll('.soal_nav');

        for (let i = 0; i < soallnya.length; i++) {
            soallnya[i].addEventListener('click', function () {

                let pilihannya = document.querySelectorAll('.bg_pilihan input');
                for (let j = 0; j < pilihannya.length; j++) {
                    pilihannya[j].addEventListener('click', function () {
                        soal_navnya[i].className = soal_navnya[i].className.replace("belum", " sudah");
                    });
                }


            });
        }

     

        // ---------------------------------
        // cek jawaban
        let selesai = document.querySelector('.selesai');

        selesai.addEventListener('click', function () {
            let sarat = 0;

            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_navnya[t].className.indexOf('sudah') == 10)) {
                    sarat = sarat + 1;
                }
            }

            if (sarat == jwbs.length) {
                // array kunci
                // console.log(jwbs);
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                let pils_soal = document.querySelectorAll('input');
                for (let i = 0; i < jwbs.length; i++) {
                    for (let j = 0; j < pils_soal.length; j++) {
                        console.log(j);
                        // menonaktifkan pilihan
                        if(j==0 || j==1 || j==2 ){

                        }else{
                        pils_soal[j].setAttribute('disabled', 'true');

                        if (pils_soal[j].attributes.name.nodeValue == 'radio' + i) {
                            if (pils_soal[j].checked == true) {
                                // cek jawaban dengan kunci
                                if (pils_soal[j].value == jwbs[i]) {
                                    hasilakhir = hasilakhir + 10;
                                    benarr = benarr + 1;
                                } else {
                                    hasilakhir = hasilakhir;
                                }
                            }
                        }
                    }

                    }

                }
               
                if (hasilakhir<75){
                    document.getElementById("emot1").src = "../logo/sad.png";
                    document.getElementById("remedial").classList.add("tombolsoal");
                    document.getElementById("remedial").classList.remove("hilang");  
                }else{
                    document.getElementById("selesai").classList.add("tombolsoal");
                    document.getElementById("selesai").classList.remove("hilang"); 
                }
				let kitahasil = document.getElementById('kiri');
				let kitahasil1 = document.getElementById('kanan');
				let muncul = document.getElementById('hasiljawaban');
				kitahasil.className = kitahasil.className.replace('contentt', 'hilang');
				kitahasil1.className = kitahasil1.className.replace('contentt', 'hilang');
				muncul.className = muncul.className.replace('hilang', 'contentt');
                document.getElementById("skor").innerHTML = "Skor Anda Adalah : "+hasilakhir+"";
                createTask(namavariabel,kelasvariabel,hasilakhir);
                let skornya = document.querySelector('.skor');
                skornya.innerText = hasilakhir;
                



            } else {
                alert('soal belum terjawab semuanya');
            }


        });
 

        // ---------------------------------
        // nav_soal diklik
        let klik_nav_soal = document.querySelectorAll('.soal_nav');
        for (let l = 0; l < klik_nav_soal.length; l++) {
            klik_nav_soal[l].addEventListener('click', function () {
                let pindah_bgsoalnya = document.querySelectorAll('.bg_pertanyaan');
                for (let k = 0; k < pindah_bgsoalnya.length; k++) {

                    if (k == l) {
                        pindah_bgsoalnya[k].className = pindah_bgsoalnya[k].className.replace(" hilang", " ");
                    } else {
                        if (pindah_bgsoalnya[k].className.indexOf('hilang') == -1) {
                            pindah_bgsoalnya[k].className += ' hilang';
                        }
                    }
                }
            });
        }



    }
}


dat.open('GET', 'latihan5.json', true);
dat.send();


var namavariabel = "kosong";
var kelasvariabel = "kosong" ;    
var sekolahvariabel = "kosong";

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCPusVlafmDrm2ygaGchmOtOtEFTdOrYiM",
    authDomain: "nilaibilangan.firebaseapp.com",
    databaseURL: "https://nilaibilangan.firebaseio.com",
    projectId: "nilaibilangan",
    storageBucket: "nilaibilangan.appspot.com",
    messagingSenderId: "215560965842",
    appId: "1:215560965842:web:4afcc591a1cc058c43a70b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let kirim = document.getElementById('selesai');

  var d = new Date();
  var t = d.getTime();
  var counter = t;
  var Tanggal = new Date();
  var Hari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  var Bulan =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  var hariini = Hari[Tanggal.getDay()];
  var tanggalangka = Tanggal.getDay();
  var bulanini = Bulan[Tanggal.getMonth()];
  var tahun = Tanggal.getFullYear();
  var jam = Tanggal.getHours()+":"+Tanggal.getMinutes()+":"+Tanggal.getSeconds()
  // kirim.addEventListener('click', function (e) {
    
//     e.preventDefault();
   
//     createTask(namavariabel,kelasvariabel,nilai);

// })

function createTask(namavariabel,kelasvariabel,hasilakhir){
    console.log(counter);
    counter+=1;
    console.log(counter);
    console.log(hasilakhir);
    var task ={
        sekolah:sekolahvariabel,
        nama: namavariabel,
        id:counter,
        kelas:kelasvariabel,
        nilai:hasilakhir,
        waktu:jam+" "+hariini+", "+tanggalangka+" "+bulanini+" "+tahun
    }
    let db= firebase.database().ref("nilaisubbab5/"+counter);
    db.set(task);

}

function readlah(){
      
    var takut= firebase.database().ref("kuncikuis/");
    let tmp = document.querySelector('body');
    takut.on("child_added",function(data){
        var takutvalue = data.val();
        if ((takutvalue.kuis=="kuis5")&&(takutvalue.nilai==1)){
            console.log("cc")
            tmp.innerHTML+=`<div class="gakbisa"> <p>ULANGAN TIDAK DAPAT DIBUKA</p></div>
            
            `
        }else{

        }
        
    });
    
    }

function mulaiaja(){
    var a = document.getElementById("tengah");
    var b = document.getElementById("kiri");
    var c = document.getElementById("kanan");
    namavariabel = document.getElementById("nama").value;
    kelasvariabel = document.getElementById("kelas").value;
    sekolahvariabel = document.getElementById("sekolah").value;
    MathJax.typeset()
if(kelasvariabel=="0"||namavariabel==""||sekolahvariabel==""){
    window.alert("isikan nama, kelas dan asal sekolah")
}else{
    a.className = a.className.replace("contentt","hilang");
    b.className = b.className.replace("hilang","contentt");
    c.className = c.className.replace("hilang","contentt");
    console.log(kelasvariabel);
    MathJax.typeset()
}
}