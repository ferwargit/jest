// index.js
// module.exports = char => 'aeiou'.includes(char);

/*
Este código es una función que se exporta como módulo en Node.js. 
La función toma un carácter (char) como parámetro y devuelve un valor booleano indicando si el carácter es una vocal (e, i, o o u).

Aquí hay una explicación detallada:

module.exports: Esta línea indica que la función que se define a continuación se exportará como módulo, 
lo que significa que puede ser importada y utilizada en otros archivos de Node.js.

char =>: Esta es una función de flecha que toma un parámetro llamado char. 
La función de flecha es una forma concisa de definir una función en JavaScript.

'eiou'.includes(char): Esta línea utiliza el método includes() del string 'eiou' para verificar 
si el carácter pasado como parámetro se encuentra en la cadena de vocales. 
El método includes() devuelve true si el carácter se encuentra en la cadena, y false de lo contrario.
*/
exports.isVowel = char => {
    if(typeof char !== 'string') {
        throw TypeError('El argumento debe ser un string');
    }

    if(char.length !== 1) {
        throw Error('El argumento debe tener una longitud de 1');
    }

    return 'aeiou'.includes(char)
}

exports.countVowels = str => [...str].reduce(
    (memo, char) => (
        memo.hasOwnProperty(char)
            ? { ...memo, [char]: memo[char] + 1 }
            : memo
    ),
    { a: 0, e: 0, i: 0, o: 0, u: 0 }
)
