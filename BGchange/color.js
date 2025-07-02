
var red = document.querySelector('.red')
var black = document.querySelector('.black')
var random = document.querySelector('.random')

function blue(){
    document.querySelector('.blue')
    .addEventListener('click',()=>{
        document.body.style.backgroundColor = 'blue'
    })
}
function redd(){
    red.addEventListener('click',()=>{
        document.body.style.backgroundColor = 'red'
    })
}
function randomm(){
    random.addEventListener('click',()=>{
        let arr = ['red','pink','yellow','brown','white','black']
        let color = Math.floor(Math.random()*arr.length)
        document.body.style.backgroundColor = arr[color]
    })
}