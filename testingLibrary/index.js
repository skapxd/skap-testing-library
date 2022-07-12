export const wrapper = (
        message = `default message of wrapper - ${Math.random()}`, 
        fn = () => console.log('default function of wrapper')
    ) => {
    console.group(message);
    fn();
    console.groupEnd(message)
}


export const test = (message, fn) => {
    const isValid = fn();
    if (!isValid) {
      return console.error(`❌fallido: ${message}`);
    }
    return console.log(`✅exitoso: ${message}`);
  };
