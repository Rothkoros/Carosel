/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function bookinfo(interest) {
    const text = interest.Activity + "<br>" + interest.desc;
    document.getElementById("information").innerHTML = text;
    // var data_file = "products.json";
    // var http_request = new XMLHttpRequest();

    // http_request.onreadystatechange = function () {
    //     if (http_request.readyState == 4) {
    //         // Javascript function JSON.parse to parse JSON data
    //         var jsonObj = JSON.parse(http_request.responseText);

    //         // jsonObj variable now contains the data structure and can
    //         // be accessed as jsonObj.name and jsonObj.country.
    //         var text = "";
    //         for (var i = 0; i < jsonObj.book.length; i++) {
    //             if (jsonObj.book[i].id == t) {
    //                 text = text + jsonObj.book[i].Title + " " + jsonObj.book[i].Author + "<br>"+jsonObj.book[i].desc;
    //                 var selection = i;
    //             }

    //         }
    //         console.log(selection);
    //         document.getElementById("information").innerHTML = text;

    //     }
    // }
    // http_request.open("GET", data_file, true);
    // http_request.send();
}

