import { createContext, useState } from "react";
import DataM from "../../components/Material/DataM";

export const StoreConext = createContext(null);

const StoreConextProvider = (props) => {

  const {python, physics} = DataM

  // To Material component titie of material
  const [selectionButton, setSelectionButton] = useState("");

  // To Material component data
  const [dataM, setDataM] = useState();

  // function to set material in Material conponent
  const handleMaterialSelection = (materialId) => {
    if (materialId == 1) {
      setSelectionButton("python")
      setDataM(python)
    }else if (materialId == 2) {
      setSelectionButton("Physics")
      setDataM(physics)
    } else if (materialId == 3) {
      setSelectionButton("Math 1")
      setDataM([{lecturer: "NONE"}])
    } else if (materialId == 4) {
      setSelectionButton("Information Tecnology")
      setDataM([{lecturer: "NONE"}])
    } else if (materialId == 5) {
      setSelectionButton("English 1")
      setDataM([{lecturer: "NONE"}])
    } else if (materialId == 6) {
      setSelectionButton("Cyber Security 1")
      setDataM([{lecturer: "NONE"}])
    } else if (materialId == 7) {
      setSelectionButton("C Programming")
      setDataM([{lecturer: "NONE"}])
    }else if (materialId == 8) {
      setSelectionButton("Cyber Security 2")
      setDataM([{lecturer: "NONE"}])
    }else if (materialId == 9) {
      setSelectionButton("MS office")
      setDataM([{lecturer: "NONE"}])
    }else if (materialId == 10) {
      setSelectionButton("Math 2")
      setDataM([{lecturer: "NONE"}])
    }else if (materialId == 11) {
      setSelectionButton("English 2")
      setDataM([{lecturer: "NONE"}])
    }else if (materialId == 12) {
      setSelectionButton("IOT")
      setDataM([{lecturer: "NONE"}])
    }
  }

  const contextValue = {
    handleMaterialSelection,
    selectionButton,
    dataM,
  };

  return (
    <StoreConext.Provider value={contextValue}>
      {props.children}
    </StoreConext.Provider>
  );
};

export default StoreConextProvider;
