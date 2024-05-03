const PtsSorbonne = (size) => {
;
    if (size <= 610) {
      return 6;
    } else if (size <= 1010) {
      return "9 pts entre 0 et 1010";
    } else if (size <= 1410) {
      return "12 pts entre 1010 et 1410";
    } else if (size <= 1810) {
      return "15 pts entre 1410 et 1810";
    } else if (size <= 2210) {
      return "18 pts entre 1810 et 2210";
    } else if (size <= 2610) {
      return "21 pts entre 2210 et 2610";
    } else if (size > 2610) {
        return "un certain nombre de point";
    } else {
      return '';
    }
  };
  export default PtsSorbonne;