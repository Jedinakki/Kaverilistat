const kavereita = []

function nimienLisaus(){
    while (kavereita.length < 10){
        let nimi = window.prompt("Anna kaverin nimi")
        kavereita.push(nimi)
        console.log(nimi)
    }
    lisaaKaverit()
}
function lisaaKaverit(){
    
    document.querySelectorAll("#kaveri").forEach((item)=>{
        item.remove()
    })

    kavereita.forEach((kaveri)=>{
        const teksti = document.createTextNode(kaveri)
        const li = document.createElement("li")
        li.id = "kaveri"
        li.appendChild(teksti)
        document.querySelector("ol").appendChild(li)
})
}
console.log(kavereita)
document.getElementById("nappi").addEventListener("click", nimienLisaus)

