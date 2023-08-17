const button=document.querySelector("button")
const body=document.querySelector("body")

const color=['red','green','blue','sky','pink','purple']

body.style.backgroundColor="yellow";
button.onclick=function(){
    const colorIndex=parseInt(Math.random()*color.length)

    body.style.backgroundColor=color[colorIndex];
}