const glowDiv = document.querySelector('.glow');
const donwloadCV = document.querySelector('.donwload')


document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    glowDiv.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.3), transparent 80%)`;
});

donwloadCV.addEventListener('mouseenter',(entrou) =>{
    donwloadCV.classList.remove('animacao')
        

}) 
donwloadCV.addEventListener('mouseout', (entrou) =>{
    
    donwloadCV.classList.add('animacao')

}) 