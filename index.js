
console.log('Start Here.!')

let testcase = []
let solution = []

// Case: simple spreadsheet with strings and ints
testcase.push(
    [
        [1, "2"],
        ["3", 4]
    ]
)
solution.push (
    [
        [1, 2],
        [3, 4]
    ]
)



// Funcion Evaluar /////////////////////////////////////

function evaluate( testcase, solution ) {

    console.table(testcase)

    testcase.forEach( (test, index) => {

        for (let i = 0; i < test.length; i++) {

              for (let j = 0; j < test[i].length; j++) {
               
                if(!isNaN(test[i][j])){
                   test[i][j] = parseInt(test[i][j])
                 }else{

                   if(test[i][j].charAt(0) === '='){
                    console.warn('Es una operacion')
                   }else{
                    console.error('No es una operacion')
                   }
                 }
                
             } 
             
        }
    }) 

    if(JSON.stringify(testcase) === JSON.stringify(solution)){
        console.log('Solucion Correcta!')
        console.log(testcase)
        console.log(solution)
    }else{
        console.log('Solucion Incorrecta!')
        console.log(testcase)
        console.log(solution)
    }
    
}

evaluate( testcase, solution)

console.log('Finish Here.!')