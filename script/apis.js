const repositorio_tbody = document.querySelector(".repositorio-tbody");

fetch('https://www.el-tiempo.net/api/json/v2/provincias')
.then(function(response) {
    return response.json();
})

.then(function(datos) {
    let out_tbody = '';
    x = datos.provincias;

    for (let dato of x) {
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

    repositorio_tbody.innerHTML = out_tbody;
})