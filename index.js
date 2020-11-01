const url = "https://restcountries.eu/rest/v2/all";
let body = document.getElementById("flag")[0];


const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();


  for (let i = 0; i < 250; i++) {
    const bendera = `
      <div>
        <img src="${data[i].flag}" alt="">
        <h5>${data[i].name}</h5>
      </div>
    `;

    flag.innerHTML += bendera
  }
};

getData();