const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lançamento = "1 dec 2023"

function countDown(){
    const dataLanç = new Date(lançamento)
    const hoje = new Date()

    const segTotal = (dataLanç - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dias.innerHTML = formattime(finalDias)
    horas.innerHTML = formattime(finalHoras)
    minutos.innerHTML = formattime(finalMinutos)
    segundos.innerHTML = formattime(finalSegundos)
}

function formattime(tempo){
    return tempo < 10? `0${tempo}`: tempo;
}


countDown()
setInterval(countDown, 1000)