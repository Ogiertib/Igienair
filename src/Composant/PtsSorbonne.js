const PtsSorbonne = (size) => {
;
    if (size <= 610) {
      return "6 pts en vitesse et 4";
    } else if (size <= 870) {
      return "9 pts en vitesse et 4";
    } else if (size <= 1010) {
      return "9 pts en vitesse et 6";
    } else if (size <= 1410) {
      return "12 pts en vitesse et 6";
    } else if (size <= 1470) {
      return "12 pts en vitesse et 6";
    } else if (size <= 1810) {
      return "15 pts en vitesse et 8";
    } else if (size <= 2070) {
      return "18 pts en vitesse et 8";
    } else if (size <= 2210) {
      return "18 pts en vitesse et 10";
    } else if (size <= 2610) {
      return "21 pts en vitesse et 10";
    } else if (size > 2610) {
        return "un certain nombre de point";
    } else {
      return '';
    }
  };
  export default PtsSorbonne;