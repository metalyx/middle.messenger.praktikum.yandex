const deepEqual = (x: any, y: any) => {
  if (x === y) {
    return true;
  }
  if ((typeof x === 'object' && x != null) && (typeof y === 'object' && y != null)) {
    // eslint-disable-next-line eqeqeq
    if (Object.keys(x).length != Object.keys(y).length) return false;

    // eslint-disable-next-line no-restricted-syntax
    for (const prop in x) {
      // eslint-disable-next-line no-prototype-builtins
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop])) return false;
      } else return false;
    }

    return true;
  }
  return false;
};

export default deepEqual;
