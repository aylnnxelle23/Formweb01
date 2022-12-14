// menangkap semua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
// jika diklik akan menjalankan fungsi computerChoice
    a.addEventListener("click",(element)=> {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    //menangkap element result dg queryselector untuk menampung
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result"); 

    //membuat array pilihan untuk komputer
    let choices = ["Rock","Paper","Scissors"];

    // pilihan nrandom untuk komputer
    pilihanComputer.innerHTML =
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dg pilihan user (DRAW)
    if (pilihanComputer == pilihanComputer) {
        alert("DRAW");
    }

    // jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors"){
        alert("YOU WIN!");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock"){
        alert("YOU WIN!");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN!");
    }

    //computer menang
    if (pilihanComputer == "Rock" && pilihanUser == "Scissors"){
        alert("COMPUTER WIN!");
    }else if(pilihanComputer == "Paper" && pilihanUser == "Rock"){
        alert("COMPUTER WIN!");
    }else if(pilihanComputer == "Scissors" && pilihanUser == "Paper"){
        alert("COMPUTER WIN!");
    }
}