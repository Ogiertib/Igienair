const IsoValues = {
    ISO5: {
      zone: 4,
      norme: ' NFS 90-351' ,
      particule1: "832 1um",  
      particule2: "3 520 0.5um", 
      particule3: "10 200 0.3um",
      pressure: "10-20",
      flux: "0.25-0.35 m/s",
      TRH: "N/A",
      kinetics: 5,
      biocontamination: "surfaces: 5 air: 1 ufc",
    },
    ISO7: {
      zone: 3,
      norme: 'NFS 90-351' ,
      particule1: "2 930 5um",  
      particule2: "83 200 1um", 
      particule3: "352 000 0.5um",
      pressure: "10-20",
      TRH: "15",
      flux: "N/A",
      kinetics: 10,
      biocontamination: "surfaces: 5 air: 10 ufc",
    },
    ISO8: {
      zone: 2,
      norme: 'NFS 90-351' ,
      particule1: "29 300 5um",  
      particule2: "832 000 1um", 
      particule3: "3 520 000 0.5um",
      pressure: "10-20",
      TRH: "10",
      flux: "N/A",
      kinetics: 20,
      biocontamination: "surfaces: 50 air: 100  ufc",
    },
    BPPH: {
      zone: 2,
      norme: 'BBPH + NFS 90-351' ,
      particule1: "29 300 5um",  
      particule2: "832 000 1um", 
      particule3: "3 520 000 0.5um",
      pressure: "Surpression",
      TRH: "10-20",
      flux: "N/A",
      kinetics: 20,
      biocontamination: "50 surfaces air: 200 ufc  en activité ",
    },
    BPFA: {
      zone: "A",
      particule1: "832 1um",  
      particule2: "3 520 0.5um", 
      particule3: "10 200 0.3um",
      pressure: ">+10",
      flux: "0.36 < Vm < 0.54",
      TRH: "N/A",
      kinetics: "N/A",
      biocontamination: "surfaces: 1 air: 1 ufc",
    },
    BPFB: {
      zone: "B",
      particule1: "NS 5um",  
      particule2: "3 520 0.5um", 
      particule3: "10 200 0.3um",
      pressure: ">+10",
      flux: "N/A",
      TRH: "N/A",
      kinetics: 20,
      biocontamination: "surfaces: 5 air: 10 ufc",
    },
    // Ajoutez d'autres niveaux d'ISO avec leurs valeurs cibles
  BPFC: {
    zone: "C",
    particule1: "2 930 5um",  
    particule2: "352 000 0.5um", 
    particule3: "1 020 000 0.3um",
    pressure: ">+10",
    flux: "N/A",
    TRH: "N/A",
    kinetics: 20,
    biocontamination: "surfaces: 25 air: 100 ufc",
  },
  BPFD: {
    zone: "D",
    particule1: "29 300 5um",  
    particule2: "3 520 000 0.5um", 
    particule3: "10 200 000 0.3um",
    pressure: ">+10",
    flux: "N/A",
    TRH: "N/A",
    kinetics: "N/A",
    biocontamination: "surfaces: 50 air: 200 ufc",
  },

  // Ajoutez d'autres niveaux d'ISO avec leurs valeurs cibles
};
  
  export default IsoValues;