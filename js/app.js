

'use strict';

var frankie = {
  name: 'frankie',
  age: 0,
  interests: ['cuddling', 'chasing string', 'catnip'],
  isGoodWithKids: true,
  isGoodWithDogs: false,
  isGoodWithOtherCats: true,
  getAge: function () {
    console.log(this.name);
    this.age = randomAge(3, 12) + ' months';
  }
};
frankie.getAge();


console.log(frankie);

function randomAge (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
var parentElement = document.getElementById('kittenProfiles');

// create a new element, or elements, that represent frankie
// article
// inside that article, h2 for the name, paragraph with their age, ul and some lis with their interests, image
var article = document.createElement('article');
parentElement.appendChild(article);

var h2 = document.createElement('h2');
h2.textContent = frankie.name;
article.appendChild(h2);

var p = document.createElement('p');
p.textContent = 'Frankie is adorable, and is ' + frankie.age + ' old.';
article.appendChild(p);

var ul = document.createElement('ul');
article.appendChild(ul);

for (var i = 0; i < frankie.interests.length; i++) {
  var li = document.createElement('li');
  li.textContent = frankie.interests[i];
  ul.appendChild(li);
}

var img = document.createElement('img');
img.setAttribute('src', 'images/' + '.jpeg');
img.setAttribute('alt', 'salmon ' );
article.appendChild(img);
