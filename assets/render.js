    // Current
    const currentDate = new Date()
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    // Displayed
    let displayedDate = currentDate;
    let header = displayedDate.toLocaleString('en-us',{month:'long', year:'numeric'}).toUpperCase();
    let displayedMonth =  displayedDate.getMonth();
    let displayedYear = displayedDate.getFullYear();

    function previousMonth() {
        displayedDate = new Date(displayedYear, displayedMonth - 1)
        displayedMonth -= 1;
        
        header = displayedDate.toLocaleString('en-us',{month:'long', year:'numeric'}).toUpperCase();
        render();
    }
    function nextMonth() {
        displayedDate = new Date(displayedYear, displayedMonth + 1)
        displayedMonth += 1;
        
        header = displayedDate.toLocaleString('en-us',{month:'long', year:'numeric'}).toUpperCase();
        render();
    }

    function daysInMonth(y, m) {
        return new Date(y, m, 0).getDate();
    }

    function firstDayInMonth(y, m) {
        let firstDay = new Date(y, m, 1).getDay()
        if ( firstDay == 0 )  {
            firstDay += 7
        }
        return firstDay;
    }
    function lastDayInMonth(y, m) {
        let lastDay = new Date(y, m, 0).getDay()
        if ( lastDay == 0 )  {
            lastDay += 7
        }
        return lastDay;
    }
   
    function render() {
        // clear
        document.querySelector(".month-render").innerHTML = '';

        // header
        document.querySelector(".month-name").innerHTML = header;

        // creates block for days of a previous month
        for (let i = 1; i < firstDayInMonth(displayedYear, displayedMonth); i++) {
            let number = daysInMonth(displayedYear, displayedMonth) - firstDayInMonth(displayedYear, displayedMonth) + 1
            const classDate = `d${number + i}-${displayedMonth}-${displayedYear}`
            
            document.querySelector(".month-render").innerHTML += 
                `<li class="day-card external-day" id="${classDate}">
                    <span class="day-number">
                        ${number + i}
                    </span>
                </li>`
        };

        // creates block for each day of a month
        for (let i = 1; i <= daysInMonth(displayedYear, displayedMonth + 1) ; i++) {
            const classDate = `d${i}-${displayedMonth + 1}-${displayedYear}`
            document.querySelector(".month-render").innerHTML += 
                `<li class="day-card" id="${classDate}">
                    <span class="day-number">
                        ${i}
                    </span>
                </li>`
        };

        // creates block for each day of a next month
        for (let i = 1; i <= 7 - lastDayInMonth(displayedYear, displayedMonth + 1); i++) {
            const classDate = `d${i}-${displayedMonth + 2}-${displayedYear}`
            document.querySelector(".month-render").innerHTML += 
                `<li class="day-card external-day" id="${classDate}">
                    <span class="day-number">
                        ${i}
                    </span>
                </li>`
        };

        if(document.querySelector(`#d${currentDay}-${currentMonth}-${currentYear}`) !== null) {
            document.querySelector(`#d${currentDay}-${currentMonth}-${currentYear}`).classList.add('current-day')
        }
    }
    

    


