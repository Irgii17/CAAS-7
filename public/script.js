function bookButton1() {
    var element = document.getElementById("target-element1");
    element.classList.toggle("style1");
}
function bookButton2() {
    var element = document.getElementById("target-element2");
    element.classList.toggle("style1");
}

// https://{server_address}/external/api/get?token={token}&{pin}

const api_url = "https://sgp1.blynk.cloud/external/api/get?token=nFw3rEZTMcOCkMhm9JaARTVw-COByLHE&v0&v1&v2";
// masukan 

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.v0);
      var field1 = JSON.stringify(res.v1);
      var field2 = JSON.stringify(res.v2);
      var obj = JSON.parse(field);
      var obj1 = JSON.parse(field1);
      var obj2 = JSON.parse(field2);
      // console.log(obj);
      // console.log(obj1);
      // console.log(obj2);
      document.getElementById("v0").innerHTML = obj;
      document.getElementById("v1").innerHTML = obj1;
      document.getElementById("v2").innerHTML = obj2;
    });
}, 1000);

fetch('https://sgp1.blynk.cloud/external/api/get?token=nFw3rEZTMcOCkMhm9JaARTVw-COByLHE&v2')
  .then(response => response.json())
  .then(data => {
    console.log(typeof(data));
    // Proses data yang diterima
    const temperature = data;
    if (temperature == 1) {
        console.log("1");
        var test = document.getElementById('target-element');
        test.classList.toggle("style1");
      } else {
        test.classList.remove("style1");
    }
  });

setInterval(() => {
    fetch('https://sgp1.blynk.cloud/external/api/get?token=nFw3rEZTMcOCkMhm9JaARTVw-COByLHE&v2')
      .then(response => response.json())
      .then(data => {
        // Proses data yang diterima
     
      });
  }, 1000);
  

//dumy
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      dummy: randomNumber(80,200)
    }
    console.log(data)
    document.getElementById("dummyBox").innerHTML = data.dummy
  }, 10000 )
//dummy 2
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  setInterval(() => {
    data = {
      dummy: randomNumber(95,220)
    }
    console.log(data)
    document.getElementById("dummytry").innerHTML = data.dummy
  }, 15000 )

