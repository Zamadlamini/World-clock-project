function updateTime() {
    document.querySelectorAll('.city').forEach(city => {
        const timezone = city.getAttribute('data-timezone');
        const now = moment().tz(timezone);
        city.querySelector('.date').innerHTML = now.format('MMMM Do YYYY');
        city.querySelector('.time').innerHTML = now.format('h:mm:ss') + '<small>' + now.format('A') + '</small>';
    }); 
}
document.getElementById('city-select').addEventListener('change',function() {
    const cityDiv = document.createElement('div');
    cityDiv.className = 'city';
    cityDiv.setAttribute('data-timezone', selectedTimezone);
    const now = moment().tz(selectedTimezone);
    cityDiv.innerHTML = `
    <div>
    <h2>${this.options[this.selectedindex].text}</h2>
    <div class ="date">${now.format('MMMM Do YYYY')}</div>
    </div>
    <div class="time">${now.format('h:mm:ss')}<small>${now.format('A')}</small></div>
    `;
    document.getElementById('cities').appendChild(cityDiv);
});
setInterval(updateTime, 1000);
updateTime();