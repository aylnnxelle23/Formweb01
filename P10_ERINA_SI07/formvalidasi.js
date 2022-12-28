function validasi() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let jam_keberangkatan = document.getElementById("jam_keberangkatan").value;
    let tujuan_keberangkatan = document.getElementById("tujuan_keberangkatan").value;
    let jmlh_tiket = document.getElementById("jmlh_tiket").value;
    let form = document.getElementById("form");

    if(nama != "" && email != "" && jam_keberangkatan != "" && tujuan_keberangkatan != "" && jmlh_tiket != ""){
       form.setAttribute("action","formvalidasi2.html");
    }else{
        alert("Validasi gagal, data harus diisi lengkap!");
    }

}


