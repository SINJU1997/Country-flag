document.getElementById('dropdown-btn').addEventListener('click', () => {
    document.querySelector('#countries')
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => {
            document.getElementById("flag-image").innerHTML = ''
            for (let i = 0; i < data.length; i++) {
                let code = data[i].alpha3Code
                document.getElementById("flag-image").style.display = 'block'
                document.getElementById("flag-image").innerHTML += `
                        <div class="dropdown-div"><img src="${data[i].flag}" alt="country flag" class="dropdown-list" id="${code}" onclick="getFlag(${i})"><div>
                        `
            }
            document.getElementById("flag-image").style.overflow =  'scroll'
        })
})

function getList() {
    var list = document.getElementsByClassName('dropdown-div')
    for (let index = 0; index < list.length; index++) {
        list[index].style.display = "block"
    }
}

function getFlag(i) {
    fetch('https://restcountries.com/v2/all')
        .then(respond => respond.json())
        .then(countryFlag => {
            console.log(countryFlag)
            document.getElementById('country-heading').innerText = `
            Ndemi Otieno ${countryFlag[i].name}
            `
            document.getElementById("flag-image").innerHTML = `
            <img src="${countryFlag[i].flag}" alt="${countryFlag[i].name} flag" class="flag">`
            document.getElementById("flag-image").style.overflow = 'hidden'
            

        })
}

