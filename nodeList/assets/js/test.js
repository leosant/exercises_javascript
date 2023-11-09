const divisivel = (num) => { 
    let valorDivisivel;

    //if (typeof num !== 'number') return num
   
    if (num % 3 === 0) {
        valorDivisivel = 'Fizz';
        
        valorDivisivel += apresentarBuzz(num);

        return valorDivisivel;
    }

    if (num % 5 !== 0) {
        return num;
    }

    return apresentarBuzz(num);
}

const apresentarBuzz = (num) => {
    return num % 5 === 0 ? 'Buzz' : '';
}

try {
    for (let i = 0;  i < 100; i++) {
        console.log(divisivel(a))
    }
} catch(err) {
    console.log(err)
}
