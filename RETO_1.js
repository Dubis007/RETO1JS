function obtenerIniciales(nombreCompleto) {
    if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") {
        return "Entrada inválida";
    }
    return nombreCompleto
        .trim()
        .split(" ")
        .filter(palabra => palabra.length > 0)
        .map(palabra => palabra[0].toUpperCase())
        .join("");
}

console.log(obtenerIniciales("ana maria lópez"));
console.log(obtenerIniciales("juan   pablo perez"));
console.log(obtenerIniciales("carlos andres"));
console.log(obtenerIniciales(12345));
