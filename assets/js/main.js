let height = document.getElementById("height")
let age = document.getElementById("age")
let big = document.getElementById("big")
let small = document.getElementById("small")
let kg


let gewichtRechnen=()=> {
    if (small.checked == true) {
        // small
        kg = (height.value - 100) + (age.value / 10) * 0.9 * 0.9
        
    } else {
        // big
        kg = (height.value - 100) + (age.value / 10) * 0.9 * 1.1
        
    }


    document.getElementById('result').innerHTML = Math.floor(kg)
   



}


