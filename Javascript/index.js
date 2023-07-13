function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("MMMM Do YYYY");
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Lima
  let limaElement = document.querySelector("#lima");
  let limaDateElement = limaElement.querySelector(".date");
  let limaTimeElement = limaElement.querySelector(".time");
  let limaTime = moment().tz("America/lima");

  limaDateElement.innerHTML = limaTime.format("MMMM Do YYYY");
  limaTimeElement.innerHTML = limaTime.format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let citTimeZone = event.target.value;
  if (citTimeZone === "current") {
    citTimeZone = moment.tz.guess();
  }
  let cityName = citTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(citTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city" >
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )}<small>${cityTime.format("A")}</small></div>
        </div>
  `;
  setTimeout(() => {
    updateCity(event);
  }, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
