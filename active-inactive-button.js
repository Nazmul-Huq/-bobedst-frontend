function toggleCard(cardId){

    let card = document.getElementById(cardId)
    let btn = document.getElementById("btn-" + cardId)
    let link = document.getElementById("card-img")

    if(card.classList.contains("disabled", "card-img")) {
        //Enabling.
        card.classList.remove("disabled")
        btn.innerHTML = "Disable"
        link.classList.remove("disabled-link")
    } else {
        //Disabling
        card.classList.add("disabled")
        btn.innerHTML = "Enable"
        link.classList.add("disabled-link")

    }

}

