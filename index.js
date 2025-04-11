console.log("hello world 2 222 branch indra")
let x = ["s","x"]
let y = x.slice()
console.log(y)

async function getWheater(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab1d0e94d05ee646ef7d882325d5a867`)
    let data = await response.json()
    console.log(data.weather[0].main+", "+data.weather[0].description)
}

getWheater("surabaya")