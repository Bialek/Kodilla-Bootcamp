var url = 'http://api.icndb.com/jokes/random',
	paragraph = document.getElementById('joke'),
	button = document.getElementById('getJoke');

button.addEventListener('click', function(){
  getJoke();
});

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

getJoke();