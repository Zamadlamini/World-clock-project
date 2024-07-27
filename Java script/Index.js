  function updateTime() {
                document.querySelectorAll('.city').forEach(city => {
                    const timezone = city.getAttribute('data-timezone');
                    const now = moment().tz(timezone);
                    city.querySelector('.date').innerHTML = now.format('MMMM Do YYYY');
                    city.querySelector('.time').innerHTML = now.format('h:mm:ss') + '&nbsp;<small>' + now.format('A') + '</small>';
                });
            }
            document.getElementById('city-select').addEventListener('change', function () {
                const selectedTimezone = this.value;
                if (selectedTimezone) {
                    const selectedText = this.options[this.selectedIndex].text;
                    const now = moment().tz(selectedTimezone);
                       const cityDiv = `
                    <div class="city" data-timezone="${selectedTimezone}">
                        <div>
                            <h2>${selectedText}</h2>
                            <div class="date">${now.format('MMMM Do YYYY')}</div>
                        </div>
                        <div class="time">${now.format('h:mm:ss')}&nbsp;<small>${now.format('A')}</small></div>
                    </div>
                `;
                document.getElementById('cities').innerHTML = cityDiv;
                updateTime();
            }
        });

        setInterval(updateTime, 1000);
        updateTime();