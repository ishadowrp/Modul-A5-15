const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function getRequestFetch(url) {
  let response = await fetch(url);
  if (response.ok) {
    let json = await response.json(); 
    return json; 
  } 
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
