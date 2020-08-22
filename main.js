// DOM
const india = document.getElementById('india');
const world = document.getElementById('world');


const tcases = document.getElementById('tcases');
const ncases = document.getElementById('ncases');
const death = document.getElementById('death');
const cured = document.getElementById('cured');
const acases = document.getElementById('acases');

const tcasesC = document.getElementById('tcasesC');
const ncasesC = document.getElementById('ncasesC');
const deathC = document.getElementById('deathC');
const curedC = document.getElementById('curedC');
const acasesC = document.getElementById('acasesC');

const tcasesI = document.getElementById('tcasesI');
const ncasesI = document.getElementById('ncasesI');
const deathI = document.getElementById('deathI');
const curedI = document.getElementById('curedI');
const acasesI = document.getElementById('acasesI');

const tcasesU = document.getElementById('tcasesU');
const ncasesU = document.getElementById('ncasesU');
const deathU = document.getElementById('deathU');
const curedU = document.getElementById('curedU');
const acasesU = document.getElementById('acasesU');

const tcasesS = document.getElementById('tcasesS');
const ncasesS = document.getElementById('ncasesS');
const deathS = document.getElementById('deathS');
const curedS = document.getElementById('curedS');
const acasesS = document.getElementById('acasesS');

const tcasesG = document.getElementById('tcasesG');
const ncasesG = document.getElementById('ncasesG');
const deathG = document.getElementById('deathG');
const curedG = document.getElementById('curedG');
const acasesG = document.getElementById('acasesG');

const currentYear = document.getElementById('year');
currentYear.innerText = new Date().getFullYear();

const updateUI = (data) => {
    tcases.innerText = data.cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncases.innerText = data.cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    death.innerText = data.deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    cured.innerText = data.cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acases.innerText = data.cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
 
const updateWorld = (data) => {
    tcasesC.innerText = data[0].cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncasesC.innerText = data[0].cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    deathC.innerText = data[0].deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curedC.innerText = data[0].cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acasesC.innerText = data[0].cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    tcasesI.innerText = data[1].cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncasesI.innerText = data[1].cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    deathI.innerText = data[1].deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curedI.innerText = data[1].cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acasesI.innerText = data[1].cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    tcasesU.innerText = data[3].cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncasesU.innerText = data[3].cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    deathU.innerText = data[3].deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curedU.innerText = data[3].cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acasesU.innerText = data[3].cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    tcasesS.innerText = data[2].cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncasesS.innerText = data[2].cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    deathS.innerText = data[2].deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curedS.innerText = data[2].cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acasesS.innerText = data[2].cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    tcasesG.innerText = data[4].cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ncasesG.innerText = data[4].cases.new.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    deathG.innerText = data[4].deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curedG.innerText = data[4].cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    acasesG.innerText = data[4].cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

let indiaData;
const getIndiaData = async () => {
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics?country=India", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "ac02902b76msh91aad61f042a4b7p1febcdjsnca61d3f86042"
        }
    })
    const data = await response.json();
    indiaData = data.response[0];
    return (indiaData);
}

getIndiaData().then((data) => {
    console.log(data);
    updateUI(data);
});

const getCountryData = async () => {
    const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "ac02902b76msh91aad61f042a4b7p1febcdjsnca61d3f86042"
        }
    })
    const data = await response.json();
    return (data.response)
}

getCountryData().then((data) => {
    console.log(data);
    updateWorld(data);
});