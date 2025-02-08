// Guardar datos en localStorage
document.getElementById("saveButton").addEventListener("click", function () {
  const data = {
    name: "Juan",
    age: 30,
    city: "México",
  };
  localStorage.setItem("userData", JSON.stringify(data));
  alert("Datos guardados en localStorage.");
});

// Cargar datos desde localStorage
document.getElementById("loadButton").addEventListener("click", function () {
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    const data = JSON.parse(storedData);
    document.getElementById("dataContainer").innerHTML = `
            <p>Nombre: ${data.name}</p>
            <p>Edad: ${data.age}</p>
            <p>Ciudad: ${data.city}</p>
        `;
  } else {
    document.getElementById("dataContainer").innerHTML =
      "<p>No hay datos guardados.</p>";
  }
});
