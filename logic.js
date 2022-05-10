// Toutes les variables (arrays)

const code2 = ["trigCM1", "A", "ganaRN1", "69", "2"]
const code3 = ["paraCM1", "A", "ganaRN3", "69", "3"]
const code4 = ["ganaCM3", "A", "paraRN2", "69", "4"]
const code5 = ["paraCM2", "A", "geomRN2", "69", "5"]
const code6 = ["algeCM2", "A", "geomRN1", "69", "6"]
const code7 = ["trigCM2", "A", "ganaRN4", "69", "7"]
const code8 = ["escaCM4", "A", "algeRN3", "69", "8"]
const code9 = ["geomCM2", "A", "ganaRN2", "69", "9"]
const codeA = ["paraCM3", "A", "paraRN3", "69", "A"]
const codeB = ["geomCM4", "A", "trigRN4", "69", "B"]
const codeC = ["trigCM3", "A", "algeRN4", "69", "C"]
const codeE = ["algeCM1", "A", "paraRN4", "69", "E"]
const codeH = ["escaCM3", "A", "escaRN3", "69", "H"]
const codeK = ["escaCM2", "A", "escaRN2", "69", "K"]
const codeL = ["geomCM1", "A", "paraRN1", "69", "L"]
const codeN = ["algeCM4", "A", "escaRN4", "69", "N"]
const codeP = ["ganaCM2", "A", "geomRN3", "69", "P"]
const codeR = ["paraCM4", "A", "algeRN2", "69", "R"]
const codeS = ["escaCM1", "A", "trigRN1", "69", "S"]
const codeT = ["ganaCM4", "A", "geomRN4", "69", "T"]
const codeU = ["geomCM3", "A", "trigRN3", "69", "U"]
const codeW = ["trigCM4", "A", "escaRN1", "69", "W"]
const codeX = ["algeCM3", "A", "trigRN2", "69", "X"]
const codeY = ["ganaCM1", "A", "algeRN1", "69", "Y"]


const algeCM = [codeE, code6, codeX, codeN]
const paraCM = [code3, code5, codeA, codeR]
const escaCM = [codeS, codeK, codeH, code8]
const geomCM = [codeL, code9, codeU, codeB]
const trigCM = [code2, code7, codeC, codeW]
const ganaCM = [codeY, codeP, code4, codeT]
const algeRN = [codeY, codeR, code8, codeC]
const paraRN = [codeL, code4, codeA, codeE]
const escaRN = [codeW, codeK, codeH, codeN]
const geomRN = [code6, code5, codeP, codeT]
const trigRN = [codeS, codeX, codeU, codeB]
const ganaRN = [code2, code9, code3, code7]

const partieA = [algeCM, paraCM, escaCM, geomCM, trigCM, ganaCM]
const partieB = [algeRN, paraRN, escaRN, geomRN, trigRN, ganaRN]

const tout = [code2, code3, code4, code5, code6, code7, code8, code9, 
codeA, codeB, codeC, codeE, codeH, codeK, codeL, codeN, codeP, codeR, 
codeS, codeT, codeU, codeW, codeX, codeY]


// GÉNÉRER UN CODE 

var codeExam = ""
var arrayCodeExam = []
var x = 0

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generate() {
codeExam = ""
x = 0
    for (i = 0; i < 6; i++) {
        shuffle(partieA[i])
        let tempArray = partieA[i].slice(4 - variables[i])
        let tempLength = tempArray.length
        if (tempLength > 0) {
            for (k = 0; k < tempLength; k++) {
                arrayCodeExam[x] = (tempArray[k])[4]
                x += 1
            }
        }
    }
    shuffle(arrayCodeExam)
    for (i = 0; i < 8; i++) {
        codeExam += arrayCodeExam[i]
    }
    x = 0
    codeExam += "-"
    for (i = 0; i < 6; i++) {
        shuffle(partieB[i])
        let tempArray = partieB[i].slice(4 - variables[i + 6])
        let tempLength = tempArray.length
        if (tempLength > 0) {
            for (k = 0; k < tempLength; k++) {
                arrayCodeExam[x] = (tempArray[k])[4]
                x += 1
            }
        }
    }
    shuffle(arrayCodeExam)
    for (i = 0; i < 8; i++) {
        codeExam += arrayCodeExam[i]
    }
    document.getElementById("tableau").style.display = "none"
    document.getElementById("vérif").style.display = "none"
    document.getElementById("generatedcode").innerHTML = "Votre code est: "+codeExam
    document.getElementById("generatedcode").style.color = "yellow"
    document.getElementById("messagebas").style.display = "inherit"
    document.getElementById("liencahier").style.display = "inherit"
    
}
// VALIDER + SETUP LE CODE
var valide = 0
var lettreTempo = ""
var boutonsQuestions = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]
var boutonsRéponsesA = ["1A", "1B", "1C", "1D", "1E", "2A", "2B", "2C", "2D", "2E",
                        "3A", "3B", "3C", "3D", "3E", "4A", "4B", "4C", "4D", "4E",
                        "5A", "5B", "5C", "5D", "5E", "6A", "6B", "6C", "6D", "6E",
                        "7A", "7B", "7C", "7D", "7E", "8A", "8B", "8C", "8D", "8E"]
var boutonsRéponsesB = ["RN1", "RN2", "RN3", "RN4", "RN5", "RN6", "RN7", "RN8"]
var codePartieA = []
var codePartieB = []
function validate(pagenumber) {
valide = 0
codePartieA = []
codePartieB = []
for (i=0; i<8; i++) {
    lettreTempo = document.getElementById("soncode").value.substr(i, 1)
        for (k=0; k<24; k++) {
            if (lettreTempo == (tout[k])[4]){
                codePartieA[i] = tout[k]
                valide += 1 
            }
        }
    lettreTempo = document.getElementById("soncode").value.substr(i+9, 1)
        for (k=0; k<24; k++) {
            if (lettreTempo == (tout[k])[4]){
                codePartieB[i] = tout[k]
                valide += 1 
            }
    }
}
for (i=8; i>0; i--) {
    for (j=0; j<i-1; j++) {
        if(codePartieA[i-1] == codePartieA[j]){
            valide = 0
        }
        if(codePartieB[i-1] == codePartieB[j]){
            valide = 0
        }
    }
} 
if(valide == 16){
    if(pagenumber == 1){
        document.getElementById("messagehaut").style.display = "none"  
        document.getElementById("questionsA").style.display = "inherit"  
        document.getElementById("questionsB").style.display = "inherit"  
        document.getElementById("affichequestion").style.display = "inherit"  
        for(i=0; i<16; i++){
            boutonsQuestions[i] = document.getElementById(boutonsQuestions[i])
        }
    
} else if(pagenumber == 2){
    document.getElementById("messagehaut").style.display = "none"
    document.getElementById("réponsesA").style.display = "inherit"
    document.getElementById("réponsesB").style.display = "inherit"
    document.getElementById("entrerréponse").style.display = "inherit"
    for(i=0; i<40; i++){
        boutonsRéponsesA[i] = document.getElementById(boutonsRéponsesA[i])
    }
    console.log(boutonsRéponsesA)
    for(i=0; i<8; i++){
        boutonsRéponsesB[i] = document.getElementById(boutonsRéponsesB[i])
    }
} 
} else{
    document.getElementById("soncode").value = ""
    document.getElementById("veuillez").innerHTML = "Votre code est incorrect. Veuillez réessayer."
    document.getElementById("veuillez").style.color = "red"
    
}
}

// GÉNÉRER LES IMAGES DES QUESTIONS (PARTIE RECEIVE)
var currentQuestion = document.getElementById("A1")
function qstA(number) {
    currentQuestion.style.color = "blue"
    currentQuestion.style.backgroundColor = "white"
    currentQuestion = boutonsQuestions[number-1]
    currentQuestion.style.color = "white"
    currentQuestion.style.backgroundColor = "blue"
    document.getElementById("affichequestion").innerHTML = "Là, ça affiche la question du Tag: "+ (codePartieA[number-1])[0]
} 
function qstB(number) {
    currentQuestion.style.color = "blue"
    currentQuestion.style.backgroundColor = "white"
    currentQuestion = boutonsQuestions[number+7]
    currentQuestion.style.color = "white"
    currentQuestion.style.backgroundColor = "blue"
    document.getElementById("affichequestion").innerHTML = "Là, ça affiche la question du Tag: "+ (codePartieB[number-1])[2]
} 

// CHANGER LA RÉPONSE DU USER (PARTIE CORRECT)
var currentAnswer = [document.getElementById("1A"), document.getElementById("2A"), document.getElementById("3A"), document.getElementById("4A"),
 document.getElementById("5A"), document.getElementById("6A"), document.getElementById("7A"), document.getElementById("8A")]
var nombreTempo = 0
var lettres = ["A", "B", "C", "D","E"]
var userAnswerA = []
function answer(number1, number2) {
    nombreTempo = 5*(number1-1)+number2-1
    currentAnswer[number1-1].style.background = "none"
    currentAnswer[number1-1].style.color = "white"
    currentAnswer[number1-1] = boutonsRéponsesA[nombreTempo]
    currentAnswer[number1-1].style.backgroundColor = "aquamarine"
    currentAnswer[number1-1].style.color = "black"
    userAnswerA[number1-1] = lettres[number2-1]
} 
// {} [] <> //
// CORRIGER LA RÉPONSE
var bonnesRéponsesA = 0
var bonnesRéponsesB = 0
var userAnswerB = []
function corriger() {
    for(i=0; i<8; i++){
        userAnswerB[i] = boutonsRéponsesB[i].value
    }
    bonnesRéponsesA = 0
    bonnesRéponsesB = 0
    for(i=0; i<8; i++){
        if((codePartieA[i])[1] == userAnswerA[i]){
            bonnesRéponsesA += 1
        }
        if((codePartieB[i])[3] == userAnswerB[i]){
            bonnesRéponsesB += 1
        }
    }
    document.getElementById("results").innerHTML = "Partie A: "+bonnesRéponsesA+"/8  Partie B: "+bonnesRéponsesB+"/8"
    if (bonnesRéponsesA > 3 && bonnesRéponsesB > 2){
        document.getElementById("results").style.color = "lime"
        document.getElementById("msgresults").innerHTML = "Vous avez maintentant accès au corrigé et à la liste de questions"
        document.getElementById("lien1").style.display = "inherit"
        document.getElementById("lien2").style.display = "inherit"
    } else {
        document.getElementById("results").style.color = "red"
        document.getElementById("msgresults").innerHTML = "Vous n'avez pas atteint le seuil minimal... N'hésitez pas à aller chercher de l'aide..."
        document.getElementById("lien1").style.display = "none"
        document.getElementById("lien2").style.display = "none"
    }
}