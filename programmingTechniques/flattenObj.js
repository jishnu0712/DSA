function flattenObject(ob) {
    let result = {};

    for (let i in ob) {
        if (typeof ob[i] === 'object' && !Array.isArray(ob[i]) && ob[i] !== null) {
            const temp = flattenObject(ob[i]);

            for (let j in temp) {
                result[i + "." + j] = temp[j];
            }
        } else {
            result[i] = ob[i];
        }
    }

    return result;
}

// Example usage:
const exampleObj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    },
    g: 5
  };
  
  const flattened = flattenObject(exampleObj);
  console.log(flattened);