console.log('Mon JS');


/************  DOC  ***************/

const app = document.querySelector('body')

//URL//
const url = "https://api.chucknorris.io/jokes/random"

/************  Function  ***************/


function getJoke() {
    console.log('Joke: ')
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const joke = data.value;
            //console.log(data);
            console.log(joke);
            buildJoke(joke)
        })
}

function buildJoke(text) {
    const bannerJoke = document.getElementById('banner')
    bannerJoke.innerText = text
}

setInterval(function() {getJoke()}, 6000);



/************  BANNER  ***************/


function mountedComponent() {

    // Section
    const section = document.createElement('section');
    section.setAttribute('id', 'section')
    section.setAttribute('class', 'mt-5')
    console.log(section);


    const container = document.createElement('div')
    container.setAttribute('class', 'container')
    console.log(container);


    const row = document.createElement('div')
    row.setAttribute('class', 'row')


    const banner = document.createElement('div')
    banner.setAttribute('class', 'banner pt-3')
    banner.setAttribute('id', 'banner')
    banner.style.backgroundColor = ('lightgrey')
    banner.style.height = ('30vh')
    console.log(banner);


    const bannerJoke = document.createElement('p')
    bannerJoke.setAttribute('class', 'bannerTitle')
    bannerJoke.innerText = 'Krash test'
    bannerJoke.style.textAlign = ('center')
    console.log(bannerJoke);

    const btn = document.createElement('btn')
    btn.setAttribute('class', 'btn')
    btn.setAttribute('id', 'bannerBtn')
    btn.setAttribute('type', 'submit')
    btn.setAttribute('onclick', 'getJoke()')
    btn.style.backgroundColor = ('grey')
    btn.innerText = ('New Joke')
    console.log(btn);

    // Section ---> App
    app.appendChild(section)
    // Container ---> Section
    section.appendChild(container)
    // Row ---> Container
    container.appendChild(row)


    // Banner --> Row
    row.appendChild(banner)

    // bannerTitle  --->
    banner.appendChild(bannerJoke)

    // btn ---> Banner
    row.appendChild(btn)

}

mountedComponent()
buildJoke()
getJoke()
