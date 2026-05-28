function quizcode() {
    let codes = document.getElementById("code").value;
    window.location.href =  `https://quizmo-voton.vercel.app/quiz/${codes}/index.html`;
}