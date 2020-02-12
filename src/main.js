import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

// ------ IIFE (Immediately-Invoked Function Expression) ------->

(async () => {
  let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
  let jsonifiedResponse = await response.json();
  getElements(jsonifiedResponse);
})();

//------- option 3 ----->

    asyncApiCall();

    async function asyncApiCall() {
      let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
      let jsonifiedResponse = await response.json();
      getElements(jsonifiedResponse);
    }

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }

//-------- option 2 ------->

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonifiedResponse){
        getElements(jsonifiedResponse);
      })

    const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvin is ${resolve.main.temp} degrees.`);
    }


//------ option 1------->

    // let promise = new Promise(function(resolve, reject) {
    //   let request = new XMLHttpRequest();
    //   let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    //   request.onload = function() {
    //     if (this.status === 200) {
    //       resolve(request.response);
    //     } else {
    //       reject(Error(request.statusText));
    //     }
    //   }
    //   request.open("GET", url, true);
    //   request.send();
    // });

  //   promise.then(function(response) {
  //     let body = JSON.parse(response);
  //     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
  //     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
  //   }, function(error) {
  //     $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  //   });
  });
});