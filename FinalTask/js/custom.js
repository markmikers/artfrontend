/**
 * Created by Mark on 27.07.2016.
 */

$(document).ready(function() {
//  $.get('http://artapp.pro/echo.json', function(data) {
//        var remote_json = data;
//  });
  $.getJSON('./json/echo.json', function(json) {
    var transform = {'<>': 'tr', 'html' :'<td>${name.v}</td><td>${firstName.v}</td><td>${birthDate.v}</td><td><a href="callto:${tel.v}">${tel.v}</a></td><td>${address.v}</td>'};
    $('table thead').after(json2html.transform(json.values,transform))
  });
});


//<a href="tel:1-761-515-2996" class="ng-binding">1-761-515-2996</a>
https://www.google.com.ua/maps/place/110+Parkside+Avenue,+Bexleyheath,+Grand+Londres+DA7+6NL,+Royaume-Uni