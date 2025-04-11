const rows1 = 5
for(let row = 1; row<=rows1; row++){
    console.log("*")
}
console.log()

const rows2 = 5
for(let row = 1; row<=rows1; row++){
    let stars = ""
    for(let col = 1; col<=rows1; col++){
        stars += "*"
    }
    console.log(stars)
}
console.log()

const rows3 = 5
for(let row = 1; row<=rows1; row++){
    let stars = ""
    for(let col = 1; col<=row; col++){
        stars += "*"
    }
    console.log(stars)
}
console.log()

const rows4 = 5
for(let row = 1; row<=rows1; row++){
    let stars = ""
    for(let col = 5; col>=row; col--){
        stars += "*"
    }
    console.log(stars)
}