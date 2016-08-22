/**
 * Created by mark on 21.08.2016.
 */

$(document).ready(function() {
//  preloader
  var $preloader = $('#page-preloader'),
  $spinner = $preloader.find('.spinner');
  $spinner.fadeOut();
  $preloader.delay(350).fadeOut('slow');
  
//  loading json and creating the table
  $.getJSON('https://raw.githubusercontent.com/markmikers/artfrontend/master/FinalTask/json/echo.json', function(json) {
    $('.table-length h3').append("<span><strong>" + json.values.length + "</strong></span>");
    for (i = 0; i < json.values.length; i++) {
      $('table > tbody').append('<tr><td>' + json.values[i].name.v + '</td><td>' + json.values[i].firstName.v + '</td><td>' + (+(Date.now() - Date.parse(json.values[i].birthDate.v))/1000/3600/24/365).toString().slice(0, 2) + ' (' + json.values[i].birthDate.v.slice(0, 10) + ')' + '</td><td>' + '<a href="callto:' + json.values[i].tel.v + '">' + json.values[i].tel.v + '</a></td><td>' + '<a href="https://www.google.com/maps/place/' + json.values[i].address.v.replace(/ /g, "+") + '" target="_blank">' + json.values[i].address.v + '</a></td></tr>');
    };
  });

//  sorting module
  var table = $('table');
  $('#first-name, #last-name, #age, #phone, #address')
  .wrapInner('<span title="sort this column"/>')
  .each(function() {
    var th = $(this),
    thIndex = th.index(),
    inverse = false;
    th.click(function() {
      table.find('td').filter(function() {
        return $(this).index() === thIndex;
      }).sortElements(function(a, b) {
        return $.text([a]) > $.text([b]) ?
        inverse ? -1 : 1
        : inverse ? 1 : -1;
      }, function() {
        return this.parentNode; 
      });
      inverse = !inverse;
    });
  });
  
  $('#first-name, #last-name, #age, #phone, #address').click(function() {
    $('th').css('background-color', 'white');
    $(this).css('background-color', 'navajowhite');
    $('th .bg').addClass('fa-sort');
    $(this).find('.bg').removeClass('fa-sort');
    $(this).find('.alternating').toggleClass('fa-sort-asc');
    $(this).find('.alternating').toggleClass('fa-sort-desc');
  });
});