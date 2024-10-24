const URL_API = "https://rickandmortyapi.com/api/character"


const getCharacterListFromApi = async () => {

    const response = await fetch(URL_API)
    if (response.ok){
        const caracterInformationFromApi = await response.json()
        console.log(caracterInformationFromApi)
        console.log(caracterInformationFromApi.results)
    }
    else {
        alert("Problemas con la api")
   }
}

getCharacterListFromApi()