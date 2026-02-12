let kavereita = []
const lisaNappi = document.getElementById("lisaNappi")
const poisNappi = document.getElementById("poisNappi")
const jarNappi = document.getElementById("jarNappi")
const inputkohta = document.getElementById("input")
let nimi = ""

function onInput(e){
    nimi = e.target.value
}
function lisaaNimi() {
    kavereita.push(nimi)
    lisaaKaverit()
}
function poistaNimi(){
    kavereita = kavereita.filter(function(item) {
    return item !== nimi
    })
    lisaaKaverit()
}
function jarjestaNimet(){
    kavereita.sort()
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
        document.querySelector("#lista").appendChild(li)
})
}


lisaNappi.addEventListener("click",lisaaNimi)
poisNappi.addEventListener("click", poistaNimi)
jarNappi.addEventListener("click", jarjestaNimet)
inputkohta.addEventListener("input", onInput)
