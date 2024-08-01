function headerButtons(){
    return ()=> {
        const content=document.getElementById("content")

        const menu=document.createElement("button")
        menu.innerHTML("Menu")
    
        const home=document.createElement("button")
        home.innerHTML("Home")
    
        const about=document.createElement("button")
        about.innerHTML("About")
        
        content.appendChild(menu)
        content.appendChild(home)
        content.appendChild(about)
    }

}
export {
    headerButtons
}