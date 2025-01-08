//FUNCTION

//funzione che genera una lista di 10 email tramite api boolean ed un ciclo for
function createList(){
    for(let i = 1; i <= 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function (newMail) {
            const currentMail = newMail.data.response
            console.log(currentMail)
            ListElm.innerHTML += `<li><img src="./img/mail.svg" alt="mailogo"> ${currentMail}</li>`
        })
    }
}

//funzione che elimina dall'HTML la vecchia lista e ne crea una nuova utilizzando la funzione createList()
function createNewList(){
    ListElm.innerHTML = ``
    createList()
}

//DOM ELEMENTS
const ListElm = document.getElementById("mailList")
const BtnElm = document.getElementById("btn")

//EVENT

//richiamo della funzione createList() per la creazione della lista di email iniziale
createList()

//richiamo della funzione createNewList() al click del bottone per generare una nuova lista di email
BtnElm.addEventListener("click", createNewList)
