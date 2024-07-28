  document.addEventListener('DOMContentLoaded',function() {
    const citySelect = document.getElementById('citiy-select');
    const citiesDiv = document.getAnimations('cities');

    citySelect.addEventListener('change',function() {
        const selectedCity = citySelect.value;

        if (selectedCity === 'current') {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);  
            } else {
                alert("Geolocation is not supported by this browser.");
            }

        } else {
            updateTimeForCity(selectedCity);
        }
    });
        function showPosition(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitute;
            const timezone = moment.tz.guess();
            updateTimeForCity(timezone);
        }
        function updateTimeForCity(timezone) {
            citiesDiv.innerHTML = ''; // Clear previous cities
            const cityDiv = document.createElement('div');
            cityDiv.className = 'city';
            cityDiv.setAttribute('data-timezone',timezone);
            const cityName = timezone.split('/')[1].replace('_';' ');
            cityDiv.innerHTML = `
            <div>
            <h2>${cityName}</h2>
            <div class="date"></div>
            </div>
            <div class="time"></div>
            `;
            citiesDiv.appendChild(cityDiv);
            updateTimeForCity(cityDiv, timezone);
     }
        function updateCityTime(cityDiv, timezone) {
            const date = moment().tz(timezone).format('MMMM Do YYYY');
            const time = moment().tz(timezone).format('h:mm:ss A');
            cityDiv.querySelector('.date').innerHTML = date;
            cityDiv.querySelector('.time').innerHTML = time;
     }
        setInterval(function () {
            const cityDivs = citiesDiv.getElementByIdClassName('city');
            for (let i = 0; i < cityDivs.length; i++) {
                const cityDiv = cityDivs[i];
                const timezone = cityDiv.getAttribute('data-timezone');
                updateCityTime(cityDiv,timezone);
         }
      }, 1000);
     });
                    