import burgah from './burgah.png'
function menuBody(){
    const mainBody=document.getElementById("mainBody")
    document.getElementById("mainBody").innerHTML = ""; 

    const description=document.createElement("div")
    description.classList.add("menuBody")

    const divContent=document.createElement("div")
    divContent.classList.add("menuMainDiv")

    const wordTitle=document.createElement("h2")
    wordTitle.innerHTML=("Burgah")
    wordTitle.classList.add("wordTitle")

    const wordTitleExample=document.createElement("h2")
    wordTitleExample.innerHTML=("*Example:")
    wordTitleExample.classList.add("wordExample")

    const wordType=document.createElement("h3")
    wordType.innerHTML=("noun /ˈbəːɡə/")
    wordType.classList.add("wordType")

    const descriptionText=document.createElement("h2")
    descriptionText.innerHTML=("Burgah's has the best burgah! The burgah and burgah service make you feel like you are sitting in the middle of the burgah, eating like a bear! This is exactly the kind of burgah that I like to burgah to again and again.")
    descriptionText.classList.add("descriptionText")

    const locationText=document.createElement("h2")
    locationText.innerHTML=("Location:S.R. Ecuador 4213")
    locationText.classList.add("locationText")

    const burgahImg=document.createElement("img")
    burgahImg.src=(burgah)
    burgahImg.classList.add("burgahImg")

    divContent.appendChild(wordTitle)  
    divContent.appendChild(wordTitleExample)  
    divContent.appendChild(wordType)  
    divContent.appendChild(burgahImg)
    divContent.appendChild(locationText)
    divContent.appendChild(descriptionText)  
    description.appendChild(divContent)

    mainBody.appendChild(description)
    return
}
export{
    menuBody
}