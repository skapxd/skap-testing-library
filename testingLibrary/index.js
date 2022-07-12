export const testConsole = (message, fnCondition) => {
    const isValid = fnCondition();
    if (!isValid) {
      return console.error(`❌fallido: ${message}`);
    }
    return console.log(`✅exitoso: ${message}`);
  };
