// isVowel.spec.js
const  { isVowel, countVowels } = require('./index.js');

describe('isVowel', () => {

    it('debería lanzar un error cuando se invoca sin argumento', () => {
        expect(() => isVowel()).toThrow(TypeError); // verifica que se lance un un objeto de tipo Error
        // expect(() => isVowel()).toThrow(); // solo verifica que se lance cualquier tipo de error
    });

    it('debería lanzar un error cuando el string no tiene length igual a 1', () => {
        expect(() => isVowel('aaa')).toThrow('El argumento debe tener una longitud de 1'); // verifica que se lance un un objeto de tipo Error
    });

    it('debería retorna un valor primitivo true para input "a"', () => {
        // expect(isVowel('a')).toBe(true);
        expect(isVowel('a')).toBe(true);
    });

    it('debería retorna un valor primitivo false para input "c"', () => {
        expect(isVowel('c')).toBe(false);
        expect(isVowel('c')).not.toBe(true); // es lo mismo pero con not
    });

});

describe('countVowels', () => {

    it('debería retorna un objeto con la cantidad de vocales', () => {
        expect(countVowels('abc')).toEqual({ a: 1, e: 0, i: 0, o: 0, u: 0 });
    });
});
