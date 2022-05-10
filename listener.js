// PARTIE CREATE: AFFICHER LE BOUTON//

const variables = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const idCmb = [document.getElementById("cmb1"), document.getElementById("cmb2"), document.getElementById("cmb3"), document.getElementById("cmb4"),
document.getElementById("cmb5"), document.getElementById("cmb6"), document.getElementById("cmb7"), document.getElementById("cmb8"),
document.getElementById("cmb9"), document.getElementById("cmb10"), document.getElementById("cmb11"), document.getElementById("cmb12"),]

const idSlides = [document.getElementById("slider1"), document.getElementById("slider2"), document.getElementById("slider3"), document.getElementById("slider4"),
document.getElementById("slider5"), document.getElementById("slider6"), document.getElementById("slider7"), document.getElementById("slider8"),
document.getElementById("slider9"), document.getElementById("slider10"), document.getElementById("slider11"), document.getElementById("slider12"),]

document.getElementById("tableau").addEventListener("change", calculer)
function calculer() {
    let i, j, k
    var sumA = 0
    var sumB = 0

    for (i = 0; i < 12; i++) {
        variables[i] = Number(idSlides[i].value)
        idCmb[i].innerHTML = variables[i]
    }
    for (i = 0; i < 6; i++) {
        sumA += variables[i]
        sumB += variables[i + 6]
    }
    document.getElementById("total").innerHTML = "Partie A: " + sumA + "/8   Partie B: " + sumB + "/8"
    if (sumA == 8 && sumB == 8) {
        document.getElementById("total").style.color = "lime"
        document.getElementById("vérif").style.display = "initial"
    } else {
        document.getElementById("total").style.color = "yellow"
        document.getElementById("vérif").style.display = "none"
    }
}

