const navigation = document.querySelector('.topHeader').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigation + 'px');

console.log(window.screenY)

function widthResizer(){
    let width = window.innerWidth;
    document.documentElement.style.setProperty('--fr',(width/20)+'px');
    document.documentElement.style.setProperty('--gradiant-value',(Math.log10(width/250)))
    document.documentElement.style.setProperty('--images-width', (width/3) + 'px')
    document.documentElement.style.setProperty('--image2-width', (width/4) + 'px')
    console.log(width);
}

widthResizer()

window.addEventListener('resize', widthResizer)

const open = document.querySelector('#odlg');
const dialog = document.querySelector('#dlg');
const close = document.querySelector('#btn');

open.addEventListener('click', ()=>{
    dialog.showModal();
})

close.addEventListener('click', ()=>{
    dialog.close();
})