function calcular(){      
    /* parseFloat: converte a string recebida como argumento e a retorna como um número */
    const k = 8.9875 * Math.pow(10, 9);
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const D = parseFloat(document.getElementById('D').value);
 
 
    const result = k * Math.abs(q1 * q2) / Math.pow(D, 2);
 
    document.getElementById('result').innerText = result.toExponential(2);
}
 
 
