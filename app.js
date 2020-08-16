// hide the loader
document.getElementById('loader').style.display = 'none';

// event listeners
document.getElementById('button').addEventListener('click', function(){

    // hide the results
    document.getElementById('loader').style.display = 'block';
    setTimeout(getGeoID, 2000);
});


function getGeoID(){
    fetch('https://freegeoip.app/json/')
    .then(res => res.json())
    .then(data =>{
        console.log(data);

        document.querySelector('.collection').innerHTML = `
        <li class="collection-item">CITY: <h5>${data.city}</h5></li>
        <li class="collection-item">IP ADDRESS: <h5>${data.ip}</h5></li>
        <li class="collection-item">COUNTRY CODE:<h5>${data.country_code}</h5></li>
        <li class="collection-item">COUNTRY NAME: <h5>${data.country_name}</h5></li>
        <li class="collection-item">REGION CODE: <h5>${data.region_code}</h5></li>
        <li class="collection-item">REGION NAME: <h5>${data.region_name}</h5></li>
        <li class="collection-item">LATITUDE: <h5>${data.latitude}</h5></li>
        <li class="collection-item">LONGITUDE : <h5>${data.longitude}</h5></li>
        
        `;
    })

    document.getElementById('loader').style.display = 'none';
    document.querySelector('.collection').style.display = 'block';
}

let clear = document.getElementById('button1');


// clear the result
clear.addEventListener('click',function(){
    document.querySelector('.collection').style.display = 'none';
});

