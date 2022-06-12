// Toutes les variables (arrays)

const code2 = ["trigCM1", "D", "ganaRN1", "NTIw", "2"]
const code3 = ["paraCM1", "D", "ganaRN3", "MjE5", "3"]
const code4 = ["ganaCM3", "D", "paraRN2", "NzA=", "4"]
const code5 = ["paraCM2", "B", "geomRN2", "NzU2", "5"]
const code6 = ["algeCM2", "B", "geomRN1", "ODg1", "6"]
const code7 = ["trigCM2", "D", "ganaRN4", "NjA1", "7"]
const code8 = ["trigCM5", "B", "algeRN3", "MTI3", "8"]
const code9 = ["geomCM2", "B", "ganaRN2", "NzQw", "9"]
const codeA = ["paraCM3", "D", "paraRN3", "NjE4", "A"]
const codeB = ["geomCM4", "C", "trigRN4", "NDI4", "B"]
const codeC = ["trigCM3", "E", "algeRN4", "MTA4", "C"]
const codeE = ["algeCM1", "D", "paraRN4", "NzIx", "E"]
const codeH = ["geomCM5", "D", "ganaRN5", "NTQw", "H"]
const codeK = ["paraCM5", "A", "trigRN5", "NzQ0", "K"]
const codeL = ["geomCM1", "D", "paraRN1", "MTYw", "L"]
const codeM = ["ganaCM5", "B", "algeRN5", "NTMz", "M"]
const codeN = ["algeCM4", "C", "geomRN5", "ODI4", "N"]
const codeP = ["ganaCM2", "E", "geomRN3", "NTIw", "P"]
const codeR = ["paraCM4", "D", "algeRN2", "Mzg0", "R"]
const codeS = ["algeCM5", "C", "trigRN1", "MjIy", "S"]
const codeT = ["ganaCM4", "D", "geomRN4", "MzA2", "T"]
const codeU = ["geomCM3", "D", "trigRN3", "Mjk0", "U"]
const codeW = ["trigCM4", "C", "paraRN5", "Mzcx", "W"]
const codeX = ["algeCM3", "E", "trigRN2", "ODgx", "X"]
const codeY = ["ganaCM1", "E", "algeRN1", "NzU=", "Y"]


const algeCM = [codeE, code6, codeX, codeN, codeS]
const paraCM = [code3, code5, codeA, codeR, codeK]
const geomCM = [codeL, code9, codeU, codeB, codeH]
const trigCM = [code2, code7, codeC, codeW, code8]
const ganaCM = [codeY, codeP, code4, codeT, codeM]
const algeRN = [codeY, codeR, code8, codeC, codeM]
const paraRN = [codeL, code4, codeA, codeE, codeW]
const geomRN = [code6, code5, codeP, codeT, codeN]
const trigRN = [codeS, codeX, codeU, codeB, codeK]
const ganaRN = [code2, code9, code3, code7, codeH]

const partieA = [algeCM, paraCM, geomCM, trigCM, ganaCM]
const partieB = [algeRN, paraRN, geomRN, trigRN, ganaRN]

const tout = [code2, code3, code4, code5, code6, code7, code8, code9, 
codeA, codeB, codeC, codeE, codeH, codeK, codeL, codeM, codeN, codeP, codeR, 
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
    for (i = 0; i < 5; i++) {
        shuffle(partieA[i])
        let tempArray = partieA[i].slice(5 - variables[i])
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
    for (i = 0; i < 5; i++) {
        shuffle(partieB[i])
        let tempArray = partieB[i].slice(5 - variables[i + 5])
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
        for (k=0; k<25; k++) {
            if (lettreTempo == (tout[k])[4]){
                codePartieA[i] = tout[k]
                valide += 1 
            }
        }
    lettreTempo = document.getElementById("soncode").value.substr(i+9, 1)
        for (k=0; k<25; k++) {
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
    document.getElementById("affichequestion").innerHTML = ""
    document.getElementById("affichequestion").style.backgroundImage = "url(ImagesQVF/"+(codePartieA[number-1])[0]+".jpg"
} 
function qstB(number) {
    currentQuestion.style.color = "blue"
    currentQuestion.style.backgroundColor = "white"
    currentQuestion = boutonsQuestions[number+7]
    currentQuestion.style.color = "white"
    currentQuestion.style.backgroundColor = "blue"
    document.getElementById("affichequestion").innerHTML = ""
    document.getElementById("affichequestion").style.backgroundImage = "url(ImagesQVF/"+(codePartieB[number-1])[2]+".jpg"
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
        document.getElementById("lien1").href = atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xWG5ZVU92a1k2MU5FOS1RNVlNTVdPT1dzbGlJTkFlUU4vdmlldz91c3A9c2hhcmluZw==")
        document.getElementById("lien2").href = atob("aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xd0c1SEZ1ZUxMUnNNYlMta2FzdUROU0Rkc0ROZFNRd1Ivdmlldz91c3A9c2hhcmluZw==")
  
    } else {
        document.getElementById("results").style.color = "red"
        document.getElementById("msgresults").innerHTML = "Vous n'avez pas atteint le seuil minimal... N'hésitez pas à aller chercher de l'aide..."
        document.getElementById("lien1").style.display = "none"
        document.getElementById("lien2").style.display = "none"
    }
}
