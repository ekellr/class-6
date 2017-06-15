
'use strict';

var stores = [
  {
    Name: '1st and Pike',
    MinCustomersPerHour: 23,
    MaxCustomersPerHour: 65,
    AvgCookiesPerCustomer: 6.3,
    CookiesByHour: [],
    OpenTime: 6,
    CloseTime: 20,
    CookiesSold: 0,

    generateSales: function(){
      for (var i = this.OpenTime; i <= this.CloseTime; i++){
        var cookiesSold = Math.ceil((this.getCustomersPerHour() * this.AvgCookiesPerCustomer));
        this.CookiesByHour.push(cookiesSold);
        this.CookiesSold += cookiesSold;
      }
    },

    getCustomersPerHour: function(){
      return Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour);
    }
  },

    {
      Name: 'SeaTac Airport',
      MinCustomersPerHour: 3,
      MaxCustomersPerHour: 24,
      AvgCookiesPerCustomer: 1.2,
      CookiesByHour: [],
      OpenTime: 6,
      CloseTime: 20,
      CookiesSold: 0,

      generateSales: function(){
        for (var i = this.OpenTime; i <= this.CloseTime; i++){
          var cookiesSold = Math.ceil((this.getCustomersPerHour() * this.AvgCookiesPerCustomer));
          this.CookiesByHour.push(cookiesSold);
          this.CookiesSold += cookiesSold;
        }
      },

      getCustomersPerHour: function(){
        return Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour);
      }
    },

    {
      Name: 'Seattle Center',
      MinCustomersPerHour: 11,
      MaxCustomersPerHour: 38,
      AvgCookiesPerCustomer: 3.7,
      CookiesByHour: [],
      OpenTime: 6,
      CloseTime: 20,
      CookiesSold: 0,

      generateSales: function(){
        for (var i = this.OpenTime; i <= this.CloseTime; i++){
          var cookiesSold = Math.ceil((this.getCustomersPerHour() * this.AvgCookiesPerCustomer));
          this.CookiesByHour.push(cookiesSold);
          this.CookiesSold += cookiesSold;
        }
      },

      getCustomersPerHour: function(){
        return Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour);
      }

    },

    {
      Name: 'Capitol Hill',
      MinCustomersPerHour: 20,
      MaxCustomersPerHour: 38,
      AvgCookiesPerCustomer: 2.3,
      CookiesByHour: [],
      OpenTime: 6,
      CloseTime: 20,
      CookiesSold: 0,

      generateSales: function(){
        for (var i = this.OpenTime; i <= this.CloseTime; i++){
          var cookiesSold = Math.ceil((this.getCustomersPerHour() * this.AvgCookiesPerCustomer));
          this.CookiesByHour.push(cookiesSold);
          this.CookiesSold += cookiesSold;
        }
      },

      getCustomersPerHour: function(){
        return Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour);
      }

    },

    {
      Name: 'Alki',
      MinCustomersPerHour: 2,
      MaxCustomersPerHour: 16,
      AvgCookiesPerCustomer: 4.6,
      CookiesByHour: [],
      OpenTime: 6,
      CloseTime: 20,
      CookiesSold: 0,

      generateSales: function(){
        for (var i = this.OpenTime; i <= this.CloseTime; i++){
          var cookiesSold = Math.ceil((this.getCustomersPerHour() * this.AvgCookiesPerCustomer));
          this.CookiesByHour.push(cookiesSold);
          this.CookiesSold += cookiesSold;
        }
      },

      getCustomersPerHour: function(){
        return Math.floor(Math.random() * (this.MaxCustomersPerHour - this.MinCustomersPerHour + 1) + this.MinCustomersPerHour);
      }

    },
];

var img = document.createElement('img');
img.setAttribute('src', 'salmon.png');
img.setAttribute('alt', 'salmon ' );
document.body.appendChild(img);

var report = document.createElement('div');

for (var i = 0; i < stores.length; i++){
  var current = stores[i];
  current.generateSales();

  var container = document.createElement('div');
  report.appendChild(container);

  var title = document.createElement('div');
  title.innerText = current.Name;
  container.appendChild(title);

  var salesList = document.createElement('ul');
  container.appendChild(salesList);

  // fill the container
  for (var j = 0; j < current.CookiesByHour.length; j++){
    var hour = document.createElement('li');
    var amPM = 'am';
    var time = current.OpenTime + j;
    if (time > 12)
    {
      time -= 12;
      amPM = 'pm';
    }

    hour.innerText = '' + time + amPM + ': ' + current.CookiesByHour[j] + ' cookies';
    salesList.appendChild(hour);
  }

  var totalSold = document.createElement('li');
  totalSold.innerText = 'Total: ' + current.CookiesSold + ' cookies';
  salesList.appendChild(totalSold);
}

document.body.appendChild(report);
