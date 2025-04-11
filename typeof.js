let kata = NaN
if(kata == 0 || typeof kata == "undefined" || kata == "" || kata == null){
    console.log("Invalid data")
}
else if(typeof kata == "string" && typeof kata != "number"){
    console.log(`username ${kata}`)
}else if(isNaN(kata)){
    console.log("Invalid data")
}
else if(typeof kata == "number"){
    console.log(`age ${kata}`)
}else if(kata == true){
    console.log("cannot proceed without agreement")
}else if(kata == false){
    console.log("thank you for agreeing")
}