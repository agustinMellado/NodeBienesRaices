(function () {

    const lat = -41.13348;
    const lng = -71.31015;
    const mapa = L.map('mapa').setView([lat, lng], 13);
    let marker; //marcador.

    //Utilizar los servicios de Provider y Geocoder.
    const geocodeService = L.esri.Geocoding.geocodeService();



    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    //el pin
    marker = new L.marker([lat, lng], {
        draggable: true,
        autoPan: true//permite mover el pin y sigue el movimieento del mapa

    })
        .addTo(mapa);
    //detecta el movimiento del pin 
    marker.on('moveend', function (event) {
        marker = event.target //elemento que movemos.

        const posicion = marker.getLatLng();//toma la lat y long del elemento
        //centramos a la posicion seleccionada
        mapa.panTo(new L.LatLng(posicion.lat, posicion.lng))

        //obtener la informacion de las calles al soltar el pin
        geocodeService.reverse().latlng(posicion, 13).run(function (error, resultado) { 
            //al presionar larga un popup con la direccion
            marker.bindPopup(resultado.address.LongLabel) 

            //llenar los campos
            document.querySelector('.calle').textContent = resultado?.address?.Address ?? '';//lectura
            //datos a guardar
            document.querySelector('#calle').value = resultado?.address?.Address ?? '';
            document.querySelector('#lat').value = resultado?.latlng?.lat ?? '';
            document.querySelector('#lng').value = resultado?.latlng?.lng ?? '';
        })

    })
})()