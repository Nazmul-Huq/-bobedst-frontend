var endPointUrl;

function setUpEvents(){
    //console.log("setUpEvents")
    const queryString = window.location.search;
    //console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    //console.log(queryString)
    const id = urlParams.get('id');
    //console.log(id)
    endPointUrl = 'http://localhost:8080/getApartment/'+id;

    getApartment()

}


const getApartment = async () => {
    const response = await fetch(endPointUrl, 
        {method: 'GET',
    headers: {'Content-Type': 'application/json'}
        }
                                )
var individualApartment = await response.json();
console.log(individualApartment.id)

document.getElementById('id').innerHTML = individualApartment.id;
document.getElementById('location').innerHTML = individualApartment.location;
document.getElementById('size').innerHTML = individualApartment.size;
document.getElementById('room').innerHTML = individualApartment.room;
document.getElementById('storageRoom').innerHTML = individualApartment.storageRoom;
document.getElementById('laundryRoom').innerHTML = individualApartment.laundryRoom;
document.getElementById('rent').innerHTML = individualApartment.rent;
document.getElementById('paymentToHeat').innerHTML = individualApartment.paymentToHeat;
document.getElementById('paymentToWater').innerHTML = individualApartment.paymentToWater;
document.getElementById('deposit').innerHTML = individualApartment.deposit;
document.getElementById('prepaidRent').innerHTML = individualApartment.prepaidRent;
document.getElementById('text').innerHTML = individualApartment.text;

}
    

window.onload = function(){
    setUpEvents();
};