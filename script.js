function showSkill(id) {
    var show = document.getElementById(id).style.display
    if(show){
        document.getElementById(id).style.display = ""
    } else{
        document.getElementById(id).style.display = "flex"
    }
}