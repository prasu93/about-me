const validate = async (event) => {
    console.log(`triggered validate on ${event.target.id}`)
    const isValid = event.target.checkValidity()
    if (isValid) {
        event.target.nextElementSibling.innerHTML = ''
    } else {
        event.target.nextElementSibling.innerHTML = 'Invalid input'
        event.target.focus()
    }
}


const samespeed = (x, y) => {
    return x - y
}

const oppspeed = (x, y) => {
    return x + y
}


const updateWithTime = async (event) => {
    document.querySelector('#result').innerHTML = ''
    if (document.querySelector('#trains').checkValidity() && document.querySelector('#trainl').checkValidity() && document.querySelector('#mans').checkValidity()) {


        const speed = parseInt(document.querySelector('#trains').value)
        const length = parseInt(document.querySelector('#trainl').value)
        const man = parseInt(document.querySelector('#mans').value)
        var dir = document.querySelector('#dir').value
        var temp, final, k;


        if (dir == "same") {
            k = samespeed(speed, man)
            temp = k * 5 / 18
            final = length / temp

        }
        else {
            k = oppspeed(speed, man)
            temp = k * 5 / 18
            final = length / temp

        }
        const ans = `It's ${final} sec`

        document.querySelector('#result').innerHTML = ans
    }

}





// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
    if ((event.target && event.target.id === 'trains') ||
        (event.target && event.target.id === 'trainl') ||
        (event.target && event.target.id === 'mans')) {
        validate(event)
    }
})

document.addEventListener('click', event => {
    if (event.target && event.target.id === 'calcButton') { updateWithTime(event) }
})

//AJAX

function forajax() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("aj").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "cherry.txt", true);
    xhttp.send();
}

//LocalStorage

function clickCounter() {
    if (typeof (Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("local").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("local").innerHTML = "Sorry, your browser does not support web storage...";
    }
}