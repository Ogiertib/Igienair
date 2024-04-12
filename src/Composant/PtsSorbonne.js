const PtsSorbonne = (size) => {
;
    if (size <= 610) {
      return 6;
    } else if (size <= 1010) {
      return 9;
    } else if (size <= 1410) {
      return 12;
    } else if (size <= 1810) {
      return 15;
    } else if (size <= 2210) {
      return 18;
    } else if (size <= 2610) {
      return 21;
    } else if (size > 2610) {
        return "un certain nombre de point";
    } else {
      return '';
    }
  };
  export default PtsSorbonne;