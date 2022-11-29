class Apartment{
    endpointUrl = "http://localhost:8080/api/v1/apartment";

    constructor(data){
        this.data = data;
        this.fetchApartmentData();
    }

    async fetchApartmentData(){
        let response = await fetch(this.endpointUrl)
        this.data = await response.json()
        this.updateIndexPage()
    }

    updateIndexPage(){
        var apartmentList = this.data

        for (let index = 0; index < apartmentList.length; index++) {
            let apartment = apartmentList[index]
            console.log(apartment.floor)

            
        }


    }

}

var apartment = new Apartment();