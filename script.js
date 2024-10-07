const btn = document.getElementById('mobile');
const menu = document.getElementById('menu')

btn.addEventListener('click' , () => {
    menu.classList.toggle('hidden')
})