const cercle = document.querySelector('#face')
let score = 0
const show = document.createElement('span')
show.textContent = `${score}`
document.body.append(show)
document.addEventListener('mousemove', e => {
    x = e.clientX
    y = e.clientY
    set(x, y)
})
cercle.addEventListener('mouseenter', e => {
    cercle.style.backgroundColor = 'blue'
})

cercle.addEventListener('mouseleave', e => {
    cercle.style.backgroundColor = 'red'
})
window.resizeTo(600, 600)

function set(x, y) {
    cercle.style.top = `${Math.abs(600-y)}px`
    cercle.style.left = `${Math.abs(600-x)}px`
}
document.addEventListener('mousemove', e => {
    console.log(`x ${e.clientX}`);
    console.log(`y ${e.clientY}`);
})