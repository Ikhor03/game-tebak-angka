let start = confirm(`
Game Tebak angka
rules:
1. Pemain berjumlah 2 orang
2. admin akan mengacak angka dari 1-3
3. Para pemain menebak antara angka 1-3 
4. Satu putaran permainan adalah 5 ronde
5. Tebakan angka tidak boleh sama antar pemain
6. Pemain yang menjawab benar akan mendapatkan score 10
7. Pemenang adalah pemain dengan score terbanyak
`);


const tebakAngka = () => {
    let scorePlayer1 = 0;
    let scorePlayer2 = 0;
    let pemenangRonde = '';
    let player1 = '';
    let player2 = '';

    let i = 1;
    let ulang = true;
    while (ulang === true) {
        let bandar = Math.floor(Math.random() * 3 + 1);
        // let bandar = 1;
        player1 = prompt("Giliran Player 1 menebak:");
        player2 = prompt(`Giliran Player 2 menebak:`);
        if (player1 > 3 || player1 < 1 || player2 > 3 || player2 < 1) {
            alert("Tebak hanya dikisaran angka 1 sampai 3");
            let reload = confirm("Ulangi?");
            if (!reload) {
                alert("Yasudah")
                ulang = false;
            }
        }
        else if (player1 === player2) {
            alert("Kalian tidak boleh menebak angka yang sama");
            let reload = confirm("Ulangi?");
            if (!reload) {
                alert("Yasudah")
                ulang = false;
            }
        }

        else {
            i++;
            if (Number(player1) === bandar) {
                scorePlayer1++;
                pemenangRonde = 'DIMENANGKAN OLEH PLAYER 1'
            } else if (Number(player2) === bandar) {
                scorePlayer2++;
                pemenangRonde = 'DIMENANGKAN OLEH PLAYER 2'
            } else {
                pemenangRonde = 'SERI'
            }

            alert(`
                Nomor bandar = ${bandar}
                _________________________
                Jawaban Player 1 = "${player1}"
                Jawaban Player 2 = "${player2}"
                __________________________

                Putaran ke-${i - 1} ${pemenangRonde}

                Score:
    
                ${scorePlayer1} untuk Player 1;
                ${scorePlayer2} untuk Player 2
                `)

            if (i === 6) {
                ulang = false;
                // return alert(`Game Selesai`)
                return scorePlayer1 > scorePlayer2 ? alert(`Selamat PLAYER 1 kamu MENANG dengan score ${scorePlayer1} - ${scorePlayer2}`) :
                    scorePlayer2 > scorePlayer1 ? alert(`Selamat PLAYER 2 kamu MENANG dengan score ${scorePlayer2} - ${scorePlayer1}`) :
                        alert(`SERI dengan score ${scorePlayer1} dan ${scorePlayer2}`);

            }

            alert(`Putaran ke-${i}`)

        }
    }

}


if (start) {
    tebakAngka();
} else {
    alert("yasudah kalau tidak mau bermain")
}