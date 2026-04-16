const url = "https://wttr.in/Dublin?format=j1";

fetch(url)
  .then(res => res.json())
  .then(data => {
    document.getElementById("summary").innerText =
      data.current_condition[0].weatherDesc[0].value;

    document.getElementById("temp").innerText =
      data.current_condition[0].temp_C + "°C";

    document.getElementById("humidity").innerText =
      data.current_condition[0].humidity + "%";

    document.getElementById("pressure").innerText =
      data.current_condition[0].pressure + " hPa";
  });