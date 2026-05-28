function quizcode() {
    let codes = document.getElementById("code").value;
    window.location.href =  `./quiz/${codes}/`;
}