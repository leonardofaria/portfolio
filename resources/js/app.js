document.addEventListener("DOMContentLoaded", function() {
  if (!bowser.msie) {
    new WOW().init();
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'portfolio.json');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var holder = document.querySelector("#portfolio .row");

      data.portfolio.forEach(function(value, index) {
        var delay = (index + 1) / 10;
        var description = value.description;

        if (value.links) {
          description += '<div class="links">';
          value.links.forEach(function(link) {
            description += '<a href="' + link.url + '" class="btn"><span class="icon-' + link.type + '"></span> ' + link.description + '</a>';
          });
          description += '</div>';
        }

        var portfolio = '<div class="col-sm-6 col-lg-4 wow fadeInUp" data-wow-offset="20" data-wow-delay="' + delay + 's"><div class="thumbnail"><div class="overlay"><div class="description"><h3>' + value.title + '</h3><div class="type">'+ value.type + '</div><div class="content">' + description + '</div></div></div><img src="img/portfolio/' + value.thumb + '" /></div></div>';

        holder.innerHTML += portfolio;
      });
    }
  };
  xhr.send();

  document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();

    var form = e.target;
    var data = new FormData(form);
    var request = new XMLHttpRequest();
    var response = document.querySelector(".response");

    response.innerText = 'Sending...';

    request.onreadystatechange = function() {
      response.innerText = 'Thanks for your message';
    };

    request.open(form.method, form.action);
    request.setRequestHeader('Accept', 'application/json');
    request.send(data);
  });

});
