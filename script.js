const URL_API = "https://rickandmortyapi.com/api/character"


const getCharacterListFromApi = async () => {

    const response = await fetch(URL_API)
    if (response.ok){
        const caracterInformationFromApi = await response.json()
        console.log(caracterInformationFromApi)
        console.log(caracterInformationFromApi.results)
        caracterInformationFromApi.results.map((characterInformation, index)=>{
            createCharacterCardInHtml(characterInformation)
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
    const NameCharacterTitle = document.createElement("h4")
    NameCharacterTitle.innerText = characterInformation.name
    const WorldForCharacter = document.createElement("p")
    WorldForCharacter.innerText = `Planeta: ${characterInformation.origin.name}`
    const CurrentWorld = document.createElement("p")
    CurrentWorld.innerText = `Localización: ${characterInformation.location.name}`

    containerForText.appendChild(NameCharacterTitle)
    containerForText.appendChild(WorldForCharacter)
    containerForText.appendChild(CurrentWorld)

    articleContainer.appendChild(imageElement)
    articleContainer.appendChild(containerForText)


    characterSection.appendChild(articleContainer)

}

getCharacterListFromApi()