function render(){

    const mainDiv = document.getElementById('main-div')
    mainDiv.innerHTML=""

    const neve = document.createElement('span')
    neve.classList.add('neve')
    const neveText = document.createTextNode('Neve')
    neve.appendChild(neveText)
    mainDiv.appendChild(neve)


    const changingWords = document.createElement('span');
    changingWords.setAttribute('id', 'changingText'); 
    changingWords.classList.add('changingText');
    mainDiv.appendChild(changingWords); 

    changeText(); 

    setInterval(changeText, 3000);

    const logo = document.createElement('img')
    logo.src = "./assets/_-black.svg"
    logo.classList.add('logo')
    mainDiv.appendChild(logo)
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