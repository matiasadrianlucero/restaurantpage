import {menuBody} from './menuBody';
import {aboutBody} from './aboutBody';
function Main(){
    const content=document.getElementById("content")


    const Title=document.createElement("h1")
    Title.innerHTML=("BURGAH")
    Title.classList.add("BURGAH")

    const menu=document.createElement("button")
    menu.innerHTML=("Menu")

    const about=document.createElement("button")
    about.innerHTML=("About")
    
    const navigation=document.createElement("div")
    navigation.classList.add("navigationContainer")

    navigation.appendChild(menu)
    navigation.appendChild(about)
    
    const divbody=document.createElement("div")
    divbody.id="mainBody"


    content.appendChild(Title)
    content.appendChild(navigation)
    content.appendChild(divbody)
    
    menuBody()
    about.addEventListener('click', aboutBody);
    menu.addEventListener('click', menuBody );
    return 
}
export {
    Main
}