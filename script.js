// Script For Clock

let set = document.getElementById("set");
        let reset = document.getElementById("reset");
        let sethours = document.getElementById("sethours")
        let setminutes = document.getElementById("setminutes")
        let setseconds = document.getElementById("setseconds")

        function addZero(i) {
            if (i < 10) { i = "0" + i }
            return i;
        }

        function time() {
            let date = new Date();
            let hours = addZero(date.getHours());
            let minutes = addZero(date.getMinutes());
            let seconds = addZero(date.getSeconds());
            document.getElementById("chr").innerHTML = hours;
            document.getElementById("cmin").innerHTML = minutes;
            document.getElementById("csec").innerHTML = seconds;
        }
        setInterval(time, 1000);

        reset.addEventListener('click', () => {
            sethours.selectedIndex = 0
            setminutes.selectedIndex = 0
            setseconds.selectedIndex = 0
            let txtofalarm = document.getElementById("txtofalarm");
            txtofalarm.innerHTML = ""
        })

        set.addEventListener('click', () => {
            let date = new Date();
            let hours = addZero(date.getHours() * 3600);
            let minutes = addZero(date.getMinutes() * 60);
            let seconds = addZero(date.getSeconds() * 1);
            let hr = (sethours.value * 3600) - hours;
            let min = (setminutes.value * 60) - minutes;
            let sec = (setseconds.value * 1) - seconds;
            let finalsec = hr + min + sec;
            let txtofalarm = document.getElementById("txtofalarm");
            txtofalarm.innerHTML = `The Alarm is set for ${sethours.value} hours ${setminutes.value} minutes ${setseconds.value} seconds`
            setTimeout(() => {
                var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/4386');
                audio.play();
            }, finalsec * 1000)
        })