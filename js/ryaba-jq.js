const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";
let text = "";
 
function handleButtonCreate() {
    text = "";
    $("#result").text(text);
    $.getJSON(dataURL, function(data) {
        const arr = data.text;
        for (let i = 0; i < arr.length; i++) {
          text = text + arr[i] + " ";
        }
        $("#result").text(text);
    });
}

function handleButtonReplace() {

    text = "";
    $("#result").text(text);

    const var1 = $("input[name=var1]")[0].value;
    const var2 = $("input[name=var2]")[0].value;
    const var3 = $("input[name=var3]")[0].value;
    const var4 = $("input[name=var4]")[0].value;
    const var5 = $("input[name=var5]")[0].value;
    const var6 = $("input[name=var6]")[0].value;
    const speach1 = $("input[name=speach]")[0].value;

    const arrVar = [var1, var2, var3, var4, var5, var6];

    const speach = $("input[name=speach]")[0].value;

    $.getJSON(dataURL, function(data) {
        const arr = data.text;
        for (let i = 0; i < arr.length; i++) {
          text = text + arr[i] + " ";
        }
        for (let index = 1; index < 7; index++) {
            let varName = RegExp('{var'+index+'}');
            text = text.replace(new RegExp(varName, 'g'), arrVar[index-1]);
        }
        text = text.replace('{speach}', speach1);
        $("#result").text(text);
    });
}

function init() {
	$("#button-create").click(handleButtonCreate);
	$("#button-replace").click(handleButtonReplace);
}

$(document).ready(init);
