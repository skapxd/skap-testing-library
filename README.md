# Como usar SkapTestingLibrary

Copie y pegue el código en la consola del navegador, una etiqueta de tipo script o un archivo de javascript 

Importe el modulo de la siguiente forma y use las funciones [wrapperTest] y [test] 

```javascript
    const init = async function () {
        const urlLibrary = 'https://raw.githubusercontent.com/skapxd/skap-testing-library/main/testingLibrary/index.js'
        const resp = await fetch(urlLibrary)
        const library = await resp.text()
        const encodedJs = encodeURIComponent(library);
        const dataUri = `data:text/javascript;charset=utf-8,${encodedJs}`

        /**@type {{
         * wrapperTest: (description: string, fn: () => void) => void
         * test: (description: string, fnCondition: () => boolean) => void
         * }} */
        const { wrapperTest, test } = await import(dataUri);

        wrapperTest('Probando agrupador de test', function(){

            test('Probando test', function(){
                // pruebe cambiándolo a false
                return true
            });
        })

    }()
```