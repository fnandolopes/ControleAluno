let numeroAlunos = 10;

for (let contador = 0; contador < numeroAlunos; contador++) {

    if (contador == 0) {

        console.log('O número é ZERO')
        
    }else if (contador % 2 ==0) {
            
        console.log(`O numero ${contador} é PAR`) //INTERPOLAÇÃO

    }else{

        console.log('O numero ' + contador + ' é ÍMPAR') //CONCATENAÇÃO 
    }
    
}