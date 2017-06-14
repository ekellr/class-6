

'use strict';

var storeData = [];

var bellevue = new Object();
bellevue.Name = "Bellevue";
bellevue.MinCustomersPerHour = 10;
bellevue.MaxCustomersPerHour = 200;
bellevue.AvgCookiesPerCustomer = 2;
storeData.push(bellevue);

var redmond = new Object();
redmond.Name = "Redmond";
redmond.MinCustomersPerHour = 53;
redmond.MaxCustomersPerHour = 500;
redmond.AvgCookiesPerCustomer = 4;
storeData.push(redmond);


var changeStore = function(storeIndex)
{
  var store = storeData[storeIndex];
  document.getElementById('storeName').value = store.Name;
  document.getElementById('minCookiesPerCustomer').value = store.MinCustomersPerHour;
  document.getElementById('maxCookiesPerCustomer').value = store.MaxCustomersPerHour;
  document.getElementById('avgCookiesPerCustomer').value = store.AvgCookiesPerCustomer;
}

var saveData = function() {
    alert('saving data!');
}


var currentIndex = 0;



var img = document.createElement('img');
img.setAttribute('src', 'salmon.png');
img.setAttribute('alt', 'salmon ' );
document.body.appendChild(img);
