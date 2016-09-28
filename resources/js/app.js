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
      var holder = document.querySelector("#portfolio .holder");

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

        var portfolio = '<div class="row wow fadeInUp" data-wow-offset="20" data-wow-delay="' + delay + 's"><div class="col-sm-4 col-sm-offset-1"><img src="img/portfolio/' + value.thumb + '" /></div><div class="col-sm-5"><h3>' + value.title + '</h3><div class="type">'+ value.type + '</div><div class="content">' + description + '</div></div></div>';

        holder.innerHTML += portfolio;
      });
    }
  };
  xhr.send();

  var video = document.querySelector('.video');
  var github = document.querySelector('.github');

  if (video.offsetHeight > github.offsetHeight) {
    github.style.minHeight = video.offsetHeight + 'px';
  }
});
