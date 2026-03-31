let altura = 1.85
let peso = 500
let IMC = peso / (altura*altura)
if (IMC <= 18.5) 
    console.log("Magreza")
else if (IMC >= 18.6 && IMC <= 24.9) 
    console.log("normal")
else if (IMC >= 25 && IMC <= 29.99)
    console.log("sobrepeso")
else if (IMC >= 30 && IMC <= 34.9)
    console.log("Obesidade grau I")
else if (IMC >= 35 && IMC <= 39.99)
    console.log("Obesidade grau II")
else 
    console.log("Obesidade grau III")
