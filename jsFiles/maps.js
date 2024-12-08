function initMap(){

    const school = [
        {
            locationName: 'Manuel S. Enverga University Foundation',
            lat: 13.949528885095686,
            lng: 121.62067671717195,
            address: 'Manuel S. Enverga University Foundation, Enverga Blvd, Ibabang Dupay, Lucena, 4301 Quezon Province'
        }
    ];
   
    const schoolMarker = './amenitiesIcons/school.png';

    const eatery = [
        {
            locationName: 'Kubbos',
            lat:  13.952349029816173,
            //, 
            lng: 121.62192154652325,
            address: 'XJ2C+WQJ, Geneva St, Lucena, 4301 Quezon'
        },
        {
            locationName: 'Isaiahs FoodHub',
            lat: 13.951817640537817,
            lng: 121.6215854852652,
            address: '710 Madrid St, Lucena, 4301 Quezon'
        },
        {
            locationName: 'Albod Eatery',
            lat: 13.950447389694139, 
            lng: 121.61955836612536,
            address: ' Lucena, 4301 Quezon'
        },
       
        {
            locationName: ' KUYA JAIME TAPSILOGAN',
            lat: 13.945188007428747,
            lng: 121.62363988896242,
            address: 'Lucena, 4301 Quezon'
        },
        {
            locationName: 'KAINAN KINA INAY',
            lat: 13.95226007376938,
            
            lng: 121.62255600955565,
            address: 'Madrid St, Lucena, 4301 Quezon'
        }
    ];
    const eateryMarker = './amenitiesIcons/restaurant.png';

    const laundry = [
        {
            locationName: 'Spinman Laundry Shop',
            lat: 13.952500310638857,

            lng:  121.62182407016176,
            address: 'Geneva Street Enverga University Village, Lucena, 4301 Quezon'
        },
        {
            locationName: 'Tub Spin Laundry Services',
            lat: 13.960021631950493 ,
            
            lng: 121.62117187708473 ,
            address: '9141 Moscow St, Lucena, 4301 Quezon'
        },
        {
            locationName: 'FJVS Laundry House',
            lat: 13.944613776803378,
            lng: 121.62343123242701,
            address: 'Enverga Blvd, Lucena, 4301 Quezon'
        },
        {
            locationName: 'Mabulang Buhay Laundry Shop',
            lat: 13.953050662582816,
      
            lng: 121.62228038355225,
            address: 'Lucena, 4301 Quezon'
        }
    ];

    const laundryMarker = './amenitiesIcons/laundry.png';

    const stores = [
        {
            locationName: 'GEORELLE STORE',
            lat: 13.95389941881349,
            lng: 121.62108153826065,
            address: 'XJ3C+FCQ, Geneva St, Lucena, 4301 Quezon'
        },
        {
            locationName: 'RC MINI MART',
            lat: 13.9520324525851 ,
           
            lng: 121.62205527217958,
            address: 'Lucena, 4301 Quezon'
        },
        {
            locationName: 'JULIET STORE',
            lat: 13.94491176654864,
            lng: 121.62347635980879,
            address: 'WJVF+V9W, Enverga Blvd, Lucena, 4301 Quezon'
        },
        {
            locationName: 'ALFAMART STORE',
            lat: 13.943303259076197,
            
            lng: 121.62396575335399,
            address: '8 Enverga Blvd, Lucena, 4301 Quezon'
        },
        {
            locationName: 'QuicKMart',
            lat: 13.9533232198466,
            lng: 121.61940825574518,
            address: 'Columbia St. Site, University Village, Lucena, 4301 Quezon'
        }
        
    ];
    const storesMarker = './amenitiesIcons/store.png';

    const apartments = [
        {
            locationName: 'Pink Mansion',
            lat: 13.954444075592942,
            lng: 121.62078170453746,
            address: 'Geneva St. corner Poland St., <br> Ilayang Dupay, 4301, Finland St, Lucena'
        }, 
        {
            locationName: 'THERABRIDGE THERAPY CENTER',
            lat: 13.95611649262073 ,
            lng: 121.62045774016529,
            address: 'Moscow Street corner Bangkok Street,<br> University Village, Brgy. Ibabang Dupay, Lucena'
        }, 
        {
            locationName: 'Tambiloc Compound Apartment',
            lat: 13.955037356488786 ,
            lng: 121.61943105161463,
            address: 'Baranggay, University Village, Site, 45 Yale St, LC, 4301 Quezon'
        }, 
        {
            locationName: '14 Geneva Apartment',
            lat: 13.953874861154388 ,
            lng: 121.62125804110443,
            address: '14 Geneva St'
        }, 
        {
            locationName: '460 Harvard Apartment',
            lat: 13.954440035306163,
            lng: 121.62277684165659,
            address: '460 Harvard St'
        }, 
        {
            locationName: '888 Miami Apartment',
            lat: 13.945828126749163,
            lng: 121.62110440674668,
            address: '888 Miami St, Lucena, 4301 Quezon'
        }, 
        {
            locationName: '6 Venice Apartment',
            lat: 13.9461161979838,
            lng: 121.62153950978164,
            address: '6 Venice St., Lucena, 4301 Quezon'
        }, 
        {
            locationName: '730 Madrid Building Apartment',
            lat: 13.953807207982182,
            lng: 121.6249644777515,
            address: '730 Madrid St., Lucena, 4301 Quezon'
        } 
        
    ];

    const centerMap = { lat: 13.949643375351963, lng: 121.62041489492017 }; 

    const mapOptions = {
        center: centerMap,
        zoom: 16,
        disableDefaultUI: true
    }

    const apartmentMarker = './amenitiesIcons/apartment.png';

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow({
        minWidth: 200,
        maxWidth: 200
    });

    const bounds = new google.maps.LatLngBounds();

    for (let i = 0; i<apartments.length; i++){
        const marker = new google.maps.Marker({
            position: {lat: apartments[i]['lat'], lng: apartments[i]['lng']},
            map: map,
            icon: apartmentMarker
        });

        function createInfoWindow(){
        const infoWindowContent = `<div class="feh-content">
            <h3 class="font-bold">${apartments[i].locationName}</h3>
                <p>${apartments[i].address}</p></div>`;

            google.maps.event.addListener(marker, 'click' , function(){
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);
            });

            bounds.extend(new google.maps.LatLng(apartments[i]['lat'], apartments[i]['lng']));
            map.fitBounds(bounds); 
        }
        createInfoWindow();

        google.maps.event.addListener(infoWindow, 'closeclick', function () {
            map.fitBounds(bounds);
        });


    }

    for (let j = 0; j<stores.length; j++){
        const markerStore = new google.maps.Marker({
            position: {lat: stores[j]['lat'], lng: stores[j]['lng']},
            map: map,
            icon: storesMarker
        });

        function createStoreInfo(){
        const storeInfoContent = `<div class="feh-content">
            <h3 class="font-bold">${stores[j].locationName}</h3>
                <p>${stores[j].address}</p></div>`;

            google.maps.event.addListener(markerStore, 'click' , function(){
                infoWindow.setContent(storeInfoContent);
                infoWindow.open(map, markerStore);
            });

            
        }
        createStoreInfo();
    }

    for (let k = 0; k<laundry.length; k++){
        const markerLaundry = new google.maps.Marker({
            position: {lat: laundry[k]['lat'], lng: laundry[k]['lng']},
            map: map,
            icon: laundryMarker
        });

        function createLaundryInfo(){
        const laundryInfoContent = `<div class="feh-content">
            <h3 class="font-bold">${laundry[k].locationName}</h3>
                <p>${laundry[k].address}</p></div>`;

            google.maps.event.addListener(markerLaundry, 'click' , function(){
                infoWindow.setContent(laundryInfoContent);
                infoWindow.open(map, markerLaundry);
            });
        }
        createLaundryInfo();
    }

    for (let l = 0; l<eatery.length; l++){
        const markerEatery = new google.maps.Marker({
            position: {lat: eatery[l]['lat'], lng: eatery[l]['lng']},
            map: map,
            icon: eateryMarker
        });

        function createEateryInfo(){
        const eateryInfoContent = `<div class="feh-content">
            <h3 class="font-bold">${eatery[l].locationName}</h3>
                <p>${eatery[l].address}</p></div>`;

            google.maps.event.addListener(markerEatery, 'click' , function(){
                infoWindow.setContent(eateryInfoContent);
                infoWindow.open(map, markerEatery);
            });
        }
        createEateryInfo();
    }

    for (let m = 0; m<school.length; m++){
        const markerSchool = new google.maps.Marker({
            position: {lat: school[m]['lat'], lng: school[m]['lng']},
            map: map,
            icon: schoolMarker
        });

        function createSchoolInfo(){
        const schoolInfoContent = `<div class="feh-content">
            <h3 class="font-bold">${school[m].locationName}</h3>
                <p>${school[m].address}</p></div>`;

            google.maps.event.addListener(markerSchool, 'click' , function(){
                infoWindow.setContent(schoolInfoContent);
                infoWindow.open(map, markerSchool);
            });
        }
        createSchoolInfo();
    }

}