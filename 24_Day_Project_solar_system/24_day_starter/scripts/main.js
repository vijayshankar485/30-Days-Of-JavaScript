
document.getElementById("calweight").addEventListener('click',Weight)

function Weight(){
let Mass = document.getElementById("mass").value
if(Mass=="" || isNaN(Mass)){
    alert("Enter Mass To Calculate Weight")
}
var select = document.getElementById('planets')
var option = select.options[select.selectedIndex]
if(option.value == "none"){
    alert("Select Planet")
}
if(option.value == "Mercury"){
    const surfaceGravity = 0.38
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
    
}
if(option.value == "Venus"){
    const surfaceGravity = 0.91
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Earth"){
    const surfaceGravity = 1.0
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Mars"){
    const surfaceGravity = 0.38
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Jupiter"){
    const surfaceGravity = 2.34	
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Saturn"){
    const surfaceGravity = 0.93
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Neptune"){
    const surfaceGravity = 0.92
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
if(option.value == "Pluto"){
    const surfaceGravity = 1.12
    Weight = Mass*surfaceGravity
    document.getElementById("weight").innerHTML +=`your weight on ${option.value} is`+" "+ Weight+"kgs"
}
}