function verificar () {
    n1 = document.getElementById("n1").innerHTML
    n2 = document.getElementById("n2").value
    if( n1 == n2 ) {
        alert("Você acertou!")
    } else {
        alert("Você errou!")
    }
    resetar()
}

function resetar () {
    r = Math.floor(Math.random() * 10)

    n1 = document.getElementById("n1").innerHTML = r
    n2 = document.getElementById("n2").value = ""
}