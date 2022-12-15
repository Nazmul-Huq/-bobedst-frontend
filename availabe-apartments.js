
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


const getAllAvailableApartments = async () => {
    const response = await fetch( endPointUrl, {
        method: 'GET',
        headers: {
            'content-type' : 'application/json'
        }
    })

    var apartments = await response.json();

    document.getElementById('id').value = apartments.id;
    document.getElementById('available_to_rent').value = apartments.id
}


fetch(endPointUrl)
.then(response => response.json())
.then(data => {
    if(data.isAvailable){
        "Apartment available"
    }else{
        "Apartment isnt available"
    }
})