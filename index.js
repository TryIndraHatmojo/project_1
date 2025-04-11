console.log("hello world 2 222 branch indra")
let x = ["s","x"]
let y = x.slice()
console.log(y)

async function getApi(){
    try{
        const getApi = await fetch(`./config.json`)
        const api = await getApi.json()
        return api
    }catch(error){
        console.log(error.message)
    }
}

async function getWheater(city){
    try{
        const getApi = await getApi();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${getApi}`)
        let data = await response.json()
        console.log(data.weather[0].main+", "+data.weather[0].description)
    }catch(error){
        console.log(error.message)
    }
    
}


getApi()
// getWheater("sorong")
