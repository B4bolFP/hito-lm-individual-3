// Seleccionamos donde vamos a meter las filas de la tabla con querySelector
const repositorio_tbody = document.querySelector(".repositorio-tbody");

// Citamos el json deseado
fetch('https://www.el-tiempo.net/api/json/v2/provincias')
.then(function(response) {
    return response.json();
})

.then(function(datos) {
    // Declaramos la variable que va a contener las filas te la tabla
    let out_tbody = '';
    // ya que "datos" contiene la informacion del json accedemos al apartado de provincias
    x = datos.provincias;

    // Como hemos guardado todas las entradas de "provincias" ahora podemos acceder una a una
    for (let dato of x) {
        // Cada "dato tiene sus comunas y podemos acceder a estas con dato.{x}"
        out_tbody += `
            <tr>
                <td>${dato.CODPROV}</td>
                <td>${dato.NOMBRE_PROVINCIA}</td>
                <td>${dato.CODAUTON}</td>
                <td>${dato.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                <td>${dato.CAPITAL_PROVINCIA}</td>
            </tr>
        `;
    }

    // por ultimo le pasamos el megaString a el contenedor de la tabla.
    repositorio_tbody.innerHTML = out_tbody;
})