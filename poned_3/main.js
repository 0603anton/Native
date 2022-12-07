const sm = document.getElementById(`sm`)
const handler = (e)=> {
    if(e.ctrlKey){
        alert('ctrl pressed')
    }
}
// sm.onclick = handler;
sm.addEventListener(`click`, handler)

