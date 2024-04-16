const images = [
    'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
    'https://images.unsplash.com/photo-1573588028698-f4759befb09a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
    'https://images.unsplash.com/photo-1581901811881-2695b594d5ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1604916851289-390266e08c07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
];

const btn = document.getElementById('btn');
const imageDesc = document.querySelector('.image-desc');

let imageIndex = Math.floor(Math.random()*images.length);
document.body.style.backgroundImage = "url(" + images[imageIndex] + ")";
imageDesc.textContent = images[imageIndex];

btn.addEventListener('click', function() {
    imageIndex = Math.floor(Math.random()*images.length);
    document.body.style.backgroundImage = "url(" + images[imageIndex] + ")";
    imageDesc.textContent = images[imageIndex];
});
