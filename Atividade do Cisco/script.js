function calcular(){
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    var val3 = parseFloat(document.getElementById('val3').value);

    var media = (val1 + val2 + val3) /3;
    document.getElementById('resultado').innerText = media;

}