const arrayTheObj = ["photo(1)", "photo(2)", "cash", "photo"];

function articulos(objetos) {
    let nameArticle = {};
    let resultado = [];
    
    for(objeto of objetos) {
        if (!nameArticle[objeto]) {
            nameArticle[objeto] = 1;
            resultado.push(objeto);
        } else {
            const newArticle = `${objeto}(${nameArticle[objeto]++})`;
            resultado.push(newArticle)
        }
    }
    return resultado
}

console.log(articulos(arrayTheObj))