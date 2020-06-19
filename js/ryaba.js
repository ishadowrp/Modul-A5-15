const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

/* function getRequestHHTP(url, callback) {
  let xhr = new XMLHttpRequest();
  
  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) return;
    if (callback) {
      const obj = JSON.parse(xhr.response);
      return callback(obj);
    };
  };
  xhr.send();
};

function callback(response) {
  console.log('response', response)
};

getRequestHTTP(dataURL, callback); */

function getRequestFetch(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
};

function printStory(url) {
  if (getRequestFetch(url)) {}
  const objFromrequest = getRequestFetch(url);
  const arr = objFromrequest.text;
  const text = "";
  for (let i = 0; i < arr.length; i++) {
    text = text + arr[i]+" ";
  };
  console.log(text); 
  }
};

printStory(dataURL);
