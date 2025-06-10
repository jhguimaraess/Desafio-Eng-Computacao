function checkMorseAnswer() {
    const answerInput = document.getElementById('morse-answer');
    const feedback = document.getElementById('morse-feedback');
    const answer = answerInput.value.trim().toLowerCase();

    if (!answer) {
        feedback.textContent = "Digite uma resposta antes de verificar!";
        feedback.className = "feedback error";
        feedback.style.display = "block";
        return;
    }

    const normalize = text =>
    text.normalize("NFD")
        .replace(/\p{Diacritic}/gu, "");

    const entradaNormalizada = normalize(answer);
    const hashEntrada = CryptoJS.MD5(entradaNormalizada).toString();


    const hashCorreto = "9a334330941d0051d5b25848c651b6f4";

    if (hashEntrada === hashCorreto) {
        feedback.textContent = "Parabéns, está correto!";
        feedback.className = "feedback success";
        feedback.style.display = "block";
        
        setTimeout(() => {
            document.getElementById('morse-challenge').classList.add('hidden');
            document.getElementById('final-result').classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 800);
    } else {
        feedback.textContent = "Hmm, não parece correto. Tente novamente!";
        feedback.className = "feedback error";
        feedback.style.display = "block";
    }


    console.log(entradaNormalizada);
    console.log(hashEntrada);
}

function toggleMorseHelp() {
    const morseTable = document.getElementById('morse-table');
    if (morseTable.style.display === "table") {
        morseTable.style.display = "none";
    } else {
        morseTable.style.display = "table";
    }
}