function snapCrackle(maxValue) {
  let results = [];

  //  loop de 1 até maxValue
  for (let i = 1; i <= maxValue; i++) {
    //  condições para encontrar ímpares e concatenar string
    if (i % 2 !== 0 && i % 5 === 0) {
      results.push('SnapCrackle');
    } else if (i % 2 !== 0) {
      results.push('Snap');
    } else if (i % 5 === 0) {
      results.push('Crackle');
    } else {
      results.push(i);
    }
  }
  return results;
}

//  12 para testar os resultados
console.log(snapCrackle(12));

function snapCracklePrime(maxValue) {
  let resultsPrime = [];

  //  loop de 1 até maxValue
  for (let i = 1; i <= maxValue; i++) {
    //  condições para encontrar números primos e concatenar string
    if (i % i === 0 && i >= 2 && i % 1) {
      resultsPrime.push('SnapCricklePrime');

      // condições para encontrar ímpares e múltiplos de 5
    } else if (i % 2 !== 0 && i % 5 === 0) {
      resultsPrime.push('SnapCrackle');

      //  condições para encontrar ímpares e concatenar string
    } else if (i % 2 !== 0) {
      resultsPrime.push('Snap');

      //  condições para encontrar múltiplos de 5 e concatenar string
    } else if (i % 5 === 0) {
      resultsPrime.push('Crackle');
    } else {
      resultsPrime.push(i);
    }
  }
  return resultsPrime;
}
console.log(snapCracklePrime(20));
