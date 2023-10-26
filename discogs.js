//document.addEventListener('DOMContentLoaded', function() {

$('body').append('<style>.added_releases{background:#b1cfb1;}</style>');

var tdElements = document.getElementsByClassName('releases_8o12o');
  
for (var i = 0; i < tdElements.length; i++) {
  tdElements[i].addEventListener('click', function() {
    if (this.classList.contains('added_releases')) {
      console.log('release removed from database');
      this.classList.remove('added_releases');
    } else {
      console.log('release added to database');
      this.classList.add('added_releases');
    }
  });
}
//});
