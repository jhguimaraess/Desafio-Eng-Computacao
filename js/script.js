
function checkMorseAnswer() {
    const answerInput = document.getElementById('morse-answer');
    const feedback = document.getElementById('morse-feedback');

    const answer = answerInput.value.trim().toLowerCase();
    const correct = "codifique suas ideias";

    if (!answer) {
        feedback.textContent = "Digite uma resposta antes de verificar!";
        feedback.className = "feedback error";
        feedback.style.display = "block";
        return;
    }

    const normalize = text =>
        text.normalize("NFD")
            .replace(/\p{Diacritic}/gu, "")
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();

    if (normalize(answer) === normalize(correct)) {
        feedback.textContent = "Parabéns, está correto!";
        feedback.className = "feedback success";
        feedback.style.display = "block";

        setTimeout(() => {
            document.getElementById('morse-challenge').classList.add('hidden');
            document.getElementById('final-result').classList.remove('hidden');
            window.scrollTo(0, 0);
        }, 1500);
    } else {
        feedback.textContent = "Hmm, não parece correto. Tente novamente!";
        feedback.className = "feedback error";
        feedback.style.display = "block";
    }
}

function toggleMorseHelp() {
    const morseTable = document.getElementById('morse-table');
    if (morseTable.style.display === "table") {
        morseTable.style.display = "none";
    } else {
        morseTable.style.display = "table";
    }
}
