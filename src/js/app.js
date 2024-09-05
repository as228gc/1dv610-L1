import { ceasarCipher } from './ciphers/ceasar.js'
import { atbashCipher } from './ciphers/atbash.js'

/**
 * Displays the given name with a greeting.
 *
 * @param {string} name - The name to be displayed.
 */
function setNameDisplay (name) {
  const nameDisplay = document.querySelector('#name')
  nameDisplay.innerText = `Hello, ${name}!`
}

// Handle name input submit
const nameForm = document.querySelector('#name-form')
let userInput
nameForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const inputField = document.getElementById('name-input')
  userInput = inputField.value
  inputField.value = ''
  setNameDisplay(userInput)
  document.querySelector('#toggle').classList.replace('d–none', 'd–block') // Display the button
})

// Handle cipher form submit.
let isToggled = false
const cipherForm = document.querySelector('#cipher-form')
cipherForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const button = document.querySelector('#toggle')

  if (!isToggled) {
    switch (document.querySelector('#ciphers').value) {
      case 'ceasar':
        setNameDisplay(ceasarCipher(userInput))
        break
      case 'atbash':
        setNameDisplay(atbashCipher(userInput))
        break
      default:
        break
    }
    button.innerText = 'Decrypt name'
  } else {
    setNameDisplay(userInput)
    button.innerText = 'Encrypt name'
  }
  isToggled = !isToggled
})
