function showSkill(id) {
    var show = document.getElementById(id).style.display
    if(show){
        document.getElementById(id).style.display = ""
        document.getElementById(`${id}-icon`).src = "assets/icons/akar-icons_chevron-down-1.png"
    } else{
        document.getElementById(id).style.display = "flex"
        document.getElementById(`${id}-icon`).src = "assets/icons/akar-icons_chevron-down.png"
    }
}

document.body.scroll = ()=>{
    console.log("scol")
}