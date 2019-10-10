

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

const updateWithTime = async (event) => {
    document.querySelector('#result').innerHTML = ''
    if (document.querySelector('#trains').checkValidity() && document.querySelector('#trainl').checkValidity() && && document.querySelector('#mans').checkValidity()) {


        const speed = parseInt(document.querySelector('#trains').value)
        const length = parseInt(document.querySelector('#trainl').value)
        const man = parseInt(document.querySelector('#mans').value)
        var dir = document.getElementById('traind').value;
        var temp,final;
        if (dir == 'Samedirection') {
            //dir_value = document.getElementById('samed').value
            temp=(speed-man)*5/18
            final = length/temp

        }
        else if (dir == 'Oppdirection') {
            temp=(speed-man)*5/18
            final = length/temp
        }




        const ans = `It's ${final} sec`
        document.querySelector('#result').innerHTML = ans
    }
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


