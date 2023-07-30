function render(){

    const mainDiv = document.getElementById('main-div')
    mainDiv.innerHTML=""

    const title = document.createElement('div')
    title.classList.add('title','noselect')


    const neve = document.createElement('span')
    neve.classList.add('neve')
    const neveText = document.createTextNode('Neve')
    neve.appendChild(neveText)
    title.appendChild(neve)


    const changingWords = document.createElement('span');
    changingWords.setAttribute('id', 'changingText'); 
    changingWords.classList.add('changingText');
    title.appendChild(changingWords); 

    
    mainDiv.appendChild(title)



    changeText(); 

    setInterval(changeText, 3000);

    const logo = document.createElement('img')
    logo.src = "./assets/yellow.svg"
    logo.classList.add('logo')
    mainDiv.appendChild(logo)
    const logoBlack = document.createElement('img')
    logoBlack.src = "./assets/black.svg"
    logoBlack.classList.add('logoBlack')
    logoBlack.addEventListener('click', ()=> render2())
    mainDiv.appendChild(logoBlack)
    
}

const words = [
    "Studio",
    "Labs",
    "Innovations",
    "Systems",
    "Solutions",
    "Design",
    "Dynamics",
    "Creative",
    "Ventures",
    "Media",
    "Technologies"
];

function changeText() {
    const changingElement = document.getElementById("changingText");
    const randomIndex = Math.floor(Math.random() * words.length);
    changingElement.textContent = words[randomIndex];
}

render()

function render2() {
    console.log('aiuto');
    const mainDiv = document.getElementById('main-div')
    mainDiv.innerHTML=""
    mainDiv.classList.add('about')

    const logo = document.createElement('img')
    logo.src = "./assets/yellow.svg"
    logo.classList.add('logo')
    mainDiv.appendChild(logo)

    const info = document.createElement('p')
    const infoText = document.createTextNode('Neve is a cutting-edge creative technology studio specialized in virtual worlds and playful interactions.')

    info.appendChild(infoText)
    mainDiv.appendChild(info)
    const mail = document.createElement('p')
    mail.innerHTML= `<a href="mailto:info@neve.dev">info@neve.dev</a>`
    mainDiv.appendChild(mail)
    const address = document.createElement('p')
    address.innerHTML= `<a href="https://goo.gl/maps/s3VmxTSCY4AfEKJe8" target="_blank" rel="noopener noreferrer">
                        Via Procaccini 4, <br>
                        20154 - Milano MI  <br>
                        Fabbrica del Vapore
                    </a>`

    mainDiv.appendChild(address)

    const closeBtn = document.createElement('span')
    const closeBtnText = document.createTextNode('X')
    closeBtn.appendChild(closeBtnText)
    closeBtn.classList.add('closeBtn')

    closeBtn.addEventListener('click', ()=> render())
    
    mainDiv.appendChild(closeBtn)


}