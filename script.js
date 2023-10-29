let homeTotal = 0
let homeScore = document.getElementById("home-score")
let guestTotal = 0
let guestScore = document.getElementById("guest-score")

function homeAddOne() {
  homeTotal += 1
  homeScore.textContent = (homeTotal)
}

function homeAddTwo() {
  homeTotal += 2
  homeScore.textContent = (homeTotal)
}

function homeAddThree() {
  homeTotal += 3
  homeScore.textContent = (homeTotal)
}

function guestAddOne() {
  guestTotal += 1
  guestScore.textContent = (guestTotal)
}

function guestAddTwo() {
  guestTotal += 2
  guestScore.textContent = (guestTotal)
}

function guestAddThree() {
  guestTotal += 3
  guestScore.textContent = (guestTotal)
}