var productsArray = [];

function showProductsList(array) {

    let htmlContentToAppend = "";
    htmlContentToAppend += "<h1 align='center'>PRODUCTOS</h1><br>" ;
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        
        htmlContentToAppend += "<img src=" + product.imgSrc + "> <br>";
        htmlContentToAppend += "<strong>" + product.name + "</strong> <br>" + "PRECIO:  " + product.cost + "<br>" + product.description + "<hr>";    

            document.getElementById("prod").innerHTML = htmlContentToAppend;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
});