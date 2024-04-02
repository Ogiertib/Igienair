 const calculateResult = (result2) => {
    const size = result2;
    if (size <= 2) {
      return 1;
    } else if (size <= 4) {
      return 2;
    } else if (size <= 6) {
      return 3;
    } else if (size <= 8) {
      return 4;
    } else if (size <= 10) {
      return 5;
    } else if (size <= 24) {
      return 6;
    } else if (size <= 28) {
      return 7;
    } else if (size <= 32) {
      return 8;
    } else if (size <= 36) {
      return 9;
    } else if (size <= 52) {
      return 10;
    } else if (size <= 56) {
      return 11;
    } else if (size <= 64) {
      return 12;
    } else if (size <= 68) {
      return 13;
    } else if (size <= 72) {
      return 14;
    } else if (size <= 76) {
      return 15;
    } else if (size <= 104) {
      return 16;
    } else if (size <= 108) {
      return 17;
    } else if (size <= 116) {
      return 18;
    } else if (size <= 148) {
      return 19;
    } else if (size <= 156) {
      return 20;
    } else if (size <= 192) {
      return 21;
    } else if (size <= 232) {
      return 22;
    } else if (size <= 276) {
      return 23;
    } else if (size <= 352) {
      return 24;
    } else if (size <= 436) {
        return 25;
    } else if (size <= 636) {
        return 26;
    } else if (size <= 1000) {
        return 27;
    } else if (size > 1000) {
        return "un certain nombre de";
    } else {
      return '';
    }
  };
  export default calculateResult;