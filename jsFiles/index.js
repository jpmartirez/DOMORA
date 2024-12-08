const indexHTML = document.querySelector(".user-name");
const userName = "DOMORA";
let index = 0;
const delay = 1000;
const typeDelay = 250;

// Function to type the name letter by letter

function typeWriter() {
    if (index < userName.length) {
        indexHTML.innerHTML += userName.charAt(index);
        index++;
        setTimeout(typeWriter, typeDelay);
    } else {
        setTimeout(eraseWriter, delay);
    }
}

function eraseWriter() {
    if (index > 1) {
        indexHTML.innerHTML = userName.substring(0, index-1);
        index--;
        setTimeout(eraseWriter, typeDelay);
    } else {
        setTimeout(typeWriter, delay);
    }
}

typeWriter();