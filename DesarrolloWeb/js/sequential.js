const images = [
    {
        url:    'cañocristales.webp',
        desc:   'Caño Cristales - Meta'
    },
    {
        url:    'desiertotatacoa.webp',
        desc:   'Desierto de la Tatacoa – Huila'
    },
    {
        url:    'caboguajira.webp',
        desc:   'Cabo de la vela – La Guajira'
    }, 
    {
        url:    'parquenatural.webp',
        desc:   'Parque Natural El Cocuy – Arauca'
    }, 
    {
        url:    'nevadoruiz.webp',
        desc:   'Nevado del Ruiz – Caldas / Tolima'
    }, 
    {
        url:    'vallecocora.webp',
        desc:   'Valle de Cocora – Quindío'
    }
];

let index = 0;
const btn = document.getElementById('btn');
const imageDesc = document.querySelector('.image-desc');

let imageIndex = Math.floor(Math.random()*images.length);
document.body.style.backgroundImage = "url(./img/" + images[index].url + ")";
imageDesc.textContent = images[index].desc;

btn.addEventListener('click', function() {
    let imageIndex = getImage();
    document.body.style.backgroundImage = "url(./img/" + images[imageIndex].url + ")";
    imageDesc.textContent = images[imageIndex].desc;
});

function getImage() {
    if (index<images.length-1) {
        index++;
    } else {
        index = 0;
    }
    return index;
}