var endPointUrl;

window.onload = function apartment(){
    getIdFromUrl();
}

function getIdFromUrl(){
    const queryString = window.location.search;
    console.log(queryString)
    const urlParams = new URLSearchParams(queryString);
    console.log(queryString)
    const id = urlParams.get('id');
    console.log(id)
    endPointUrl = 'http://localhost:8080/getApartment/{id}'+id;
    console.log(endPointUrl);
}

const getApartment = async () => {
    const response = await fetch(endPointUrl, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    
});
console.log(data)

var individualApartment = await Response.json();

document.getElementById('id').value = individualApartment.id;
document.getElementById('location').value = individualApartment.location;
document.getElementById('size').value = individualApartment.size;
document.getElementById('room').value = individualApartment.room;
document.getElementById('storageRoom').value = individualApartment.storageRoom;
document.getElementById('laundryRoom').value = individualApartment.laundryRoom;
document.getElementById('rent').value = individualApartment.rent;
document.getElementById('paymentToHeat').value = individualApartment.paymentToHeat;
document.getElementById('paymentToWater').value = individualApartment.paymentToWater;
document.getElementById('deposit').value = individualApartment.deposit;
document.getElementById('prepaidRent').value = individualApartment.prepaidRent;
}