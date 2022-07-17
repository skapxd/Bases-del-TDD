import { getDoble } from '../src/index.js'

const init = async function () {
    const urlLibrary = 'https://skapxd.github.io/skap-testing-library/testingLibrary/index.js'

    const { wrapperTest, test } = await import(urlLibrary);

    wrapperTest('Probando logica', function () {

        test('Deberia retornar 4', function () {

            const result = getDoble(2);
            if (result === 4) return true
            return false
        });

        test('deberia retornar 8', function () {
            const result = getDoble(4);
            if (result === 8) return true
            return false

        })

        test('Deberia generar una excepcion cuando se le manda un string', function () {
            try {
                const result = getDoble('N');
                return false
            } catch {
                return true
            }
        })
    })

    wrapperTest('Probando ui', function(){
        test('Deberia mostrar el titulo', function(){
            const title = document.querySelector('#title')

            if (!title) return {
                isSuccess: false,
                customMessage: 'No se encontro el elemento del titulo'
            }

            if (title.innerHTML !== 'Dame 2') return {
                isSuccess: false,
                customMessage: 'El titulo no es "Dame 2"'
            }

            return true
        })

        test('Deberia tener un input', function(){
            const input = document.querySelector('input')

            if (!input) return {
                isSuccess: false,
                customMessage: 'No se encontro el elemento input'
            }

            return true
        })

        test('Deberia tener un output', function(){
            const output = document.querySelector('#output')

            if (!output) return {
                isSuccess: false,
                customMessage: 'No se encontro el elemento output'
            }

            return true
        })
    })

}()