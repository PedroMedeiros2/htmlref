/// Função para carregar o estilo dinamicamente das linhas da tabela
window.onload = function() {
    var table = document.getElementById("elementTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        if (i % 2 === 0) {
            tr[i].classList.add("gray-row");
        } else {
            tr[i].classList.add("white-row");
        }
    }
};


/// Função para normalizar strings, removendo acentos e colocando em minúsculo
function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}


/// Função para filtrar a tabela de elementos buscando por tag ou descrição
function filterTable() {
    var input = document.getElementById("search");
    var filter = normalizeString(input.value);

    var table = document.getElementById("elementTable");
    var rows = table.getElementsByTagName("tr");

    // Loop através de todas as linhas da tabela e ocultar aquelas que não correspondem ao filtro
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var tag = normalizeString(row.cells[0].innerText);
        var description = normalizeString(row.cells[1].innerText);

        if (tag.indexOf(filter) > -1 || description.indexOf(filter) > -1) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }

    // Após a filtragem, ajustar as cores das linhas visíveis para manter o padrão
    var visibleRows = Array.from(table.getElementsByTagName("tr")).filter(function(row) {
        return row.style.display !== "none";
    });

    for (var i = 0; i < visibleRows.length; i++) {
        var row = visibleRows[i];
        if (i % 2 === 0) {
            row.classList.remove("white-row");
            row.classList.add("gray-row");
        } else {
            row.classList.remove("gray-row");
            row.classList.add("white-row");
        }
    }
}
