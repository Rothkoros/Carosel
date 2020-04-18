


let html = "";
$(document).ready(function () {
  console.log("Document ready");
  $.getJSON("products.json", function (data) {
    console.log("Received data");
    $.each(data, function (key, value) {
      $.each(value, function (index, interest) {
        console.log(index + " " + interest.Activity);
        html += '<div class= "books">';
        html += "<h2>" + interest.Activity + "</h2>";
        html += "<h4>" + interest.desc + "</h4>";
        html += `<img src="${interest.Source}" style="width:100px;height:100px"></div>`;
      });
    });
    $("#books").html(html);
    console.log(html);
    $("#books").cycle({
      fx: "fade",
      pause: "1",
      prev: "#prev",
      next: "#next",
      speed: 800,
      timeout: 1000,
    });
  });
});

function bookinfo(interest) {
  console.log(interest);
  const text = interest.Activity + "<br>" + interest.desc;
  document.getElementById("information").innerHTML = text;
}
