let kata = "JavaScript"
let balikKata =""
for(let huruf = 0;huruf<kata.length;huruf++){
    balikKata += kata[(kata.length-1)-huruf]
}
console.log(balikKata)