const URL_API = "https://rickandmortyapi.com/api/character"


const getCharacterListFromApi = async () => {

    const response = await fetch(URL_API)
    if (response.ok){
        const caracterInformationFromApi = await response.json()
        console.log(caracterInformationFromApi)
        console.log(caracterInformationFromApi.results)
        caracterInformationFromApi.results.map((characterInformation, index)=>{
            console.log(characterInformation)
        })
    }
    else {
        alert("Problemas con la api")
   }
}

const createCharacterCardInHtml = (characterInformation) => {

    const characterSection = document.getElementById("root")

    const articleContainer = document.createElement("article")
    const imageElement = document.createElement("img")
    imageElement.src = characterInformation.image
    const containerForText = document.createElement("div")
    const NameCharacterTitle = docuemtn.createElement("h4")
    NameCharacterTitle.innerText = characterInformation.name
    const WorldForCharacter = document.createElement("p")
    WorldForCharacter.innerText = characterInformation.origin.name
    const CurrentWorkd = document.createElement("p")
    CurrentWorkd.innerText = characterInformation.location.name

    containerForText.appendChild(NameCharacterTitle)
    containerForText.appendChild(`Planeta: ${WorldForCharacter}`)
    containerForText.appendChild(`Localización: ${CurrentWorkd}`)

    articleContainer.appendChild(imageElement)
    articleContainer.appendChild(containerForText)


    characterSection.appendChild(articleContainer)
    
}