// esercizio di oggi: Email List
// nome repo: js-email-list
// Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Doc Axios: https://axios-http.com/
// Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
// Buon Lavoro

//FUNCTION
axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then(function (newMail) {
    // handle success
    const currentMail = newMail.data.response
    console.log(currentMail)
    ListElm.innerHTML = `<li>${currentMail}</li>`
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

//DOM ELEMENTS
const ListElm = document.getElementById("mailList")

//EVENT