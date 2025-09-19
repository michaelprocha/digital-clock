(function () {
	const text = document.querySelector("p");

	setInterval(() => {
		const time = new Date();

        let hours = time.getHours().toString();
        if (hours.length == 1) {
            hours = `0${hours}`;
        }
        let minutes = time.getMinutes().toString();
        if (minutes.length == 1) {
            minutes = `0${minutes}`;
        }
        let seconds = time.getSeconds().toString();
        if (seconds.length == 1) {
            seconds = `0${seconds}`;
        }
        
        const fullTime = `${hours} : ${minutes} : ${seconds}`;
		text.textContent = fullTime;
	}, 1000);
})();