let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let totalHome = 0
let totalGuest = 0

// BUTTONS HOME -------------------------------

function add11() {
    totalHome += 1
    homeEl.textContent = totalHome
    changeColor()
}

function add21() {
    totalHome += 2
    homeEl.textContent = totalHome
    changeColor()
}

function add31() {
    totalHome += 3
    homeEl.textContent = totalHome
    changeColor()
}

// BUTTONS GUEST -------------------------------

function add12() {
    totalGuest += 1
    guestEl.textContent = totalGuest
    changeColor()
}

function add22() {
    totalGuest += 2
    guestEl.textContent = totalGuest
    changeColor()
}

function add32() {
    totalGuest += 3
    guestEl.textContent = totalGuest
    changeColor()
}

// HIGHLIGHT THE WINNER -------------------------------

function changeColor() {
    if (totalHome > totalGuest) {
        homeEl.style.color = "green"
        guestEl.style.color = "#F94F6D"
    } else if (totalHome < totalGuest) {
        guestEl.style.color = "green"
        homeEl.style.color = "#F94F6D"
    }
}

// START A NEW GAME -------------------------------

function newGame() {
    totalHome = 0
    homeEl.textContent = 0
    homeEl.style.color = "#F94F6D"
    
    totalGuest = 0
    guestEl.textContent = 0
    guestEl.style.color = "#F94F6D"
}
