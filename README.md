# Como usar SkapTestingLibrary [pagina](https://skapxd.github.io/skap-testing-library/)

Copie y pegue el código en una etiqueta de tipo script o un archivo con extension .js 

Importe el modulo de la siguiente forma y use las funciones [wrapperTest] y [test] 

```javascript
    const init = async function () {
        const urlLibrary = 'https://skapxd.github.io/skap-testing-library/testingLibrary/index.js'

        const { wrapperTest, test } = await import(urlLibrary);

        wrapperTest('Probando agrupador de test', function(){

            test('Probando test', function(){
                // pruebe cambiándolo a false
                return true
            });
        })

    }()
```