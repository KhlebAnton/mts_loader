const logoName = document.getElementById('logo_name');
const progressTime = document.getElementById('progress_time');
const headLogo = document.getElementById('head_logo');

//anim logo_name
setTimeout( () => {
    logoName.classList.add('animated')
}, 2000 )

//start progress
setTimeout( () => {
    progressTime.classList.remove('hidden');
    headLogo.classList.remove('hidden');
    let intervalId = setInterval(() => {
        progressTime.textContent = +progressTime.textContent + 9;
        if(+progressTime.textContent >= 100) {
            progressTime.textContent = 100;
            clearInterval(intervalId);
        }
    }, 200);
}, 6000 )


