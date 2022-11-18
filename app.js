// DOM content
const text = document.querySelector(".text-render")
const dataRender = document.querySelector("#text")
const containerData = document.querySelector("#data")
const form = document.querySelector("#form")

// listeners
form.addEventListener("submit", (event)=>{
    // stop 
    event.preventDefault()
    
    // validate input data
    if(dataRender.value == "" || dataRender.value == null){
        // return false
        Swal.fire({
            title: "Por favor llena el campo",
            icon: "error"
        })
        
    }
        // API call
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", `${dataRender.value}`);
        encodedParams.append("target", "es");
        encodedParams.append("source", "en");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': 'f53c16deadmsh72e8db0a3ea3a62p14964ajsne614f159e279',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };  
        
        const API = "https://google-translate1.p.rapidapi.com/language/translate/v2"

        async function getDataAPI(){
            const response = await fetch(API, options)
            const data = await response.json()
            // console.log(data.data.translations[0])
            text.textContent = JSON.stringify(data.data.translations[0]).replace("translatedText", " ").replace("{",  " ").replace("}", " ")
        }

        // call function to get data
        getDataAPI()
})
