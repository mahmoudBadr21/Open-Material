import './card.css'
import React, { useContext } from 'react'
import DTU from '../../../public/images/DTU.png'
import CTU from '../../../public/images/CTU.png'
import { Link } from 'react-router-dom'
import MaterialEmpty from '../MaterialEmpty/MaterialEmpty';
import { StoreConext } from '../../assets/context/StoreContext';

const Card = ({formData, dataC}) => {

  const { handleMaterialSelection } = useContext(StoreConext)

  const university = formData.university;
  const specialization = formData.specialization;
  const band = formData.band;
  const semester = formData.semester;

  if (university === 'DTU' && specialization == 'IT' && band == 'first_band' && semester == 'first_semester') {
    dataC = [
      { id: 1, cTitle: "Python" },
      { id: 2, cTitle: "Physics" },
      { id: 3, cTitle: "Math 1" },
      { id: 4, cTitle: "Information Tecnology" },
      { id: 5, cTitle: "English 1" },
      { id: 6, cTitle: "Cyber Security 1" },
    ];
  } else if (university === 'DTU' && specialization == 'IT' && band == 'first_band' && semester == 'second_semester') {
    dataC = [
      { id: 7, cTitle: "C Programming" },
      { id: 8, cTitle: "Cyber Security 2" },
      { id: 9, cTitle: "MS office" },
      { id: 10, cTitle: "Math 2" },
      { id: 11, cTitle: "English 2" },
      { id: 12, cTitle: "IOT" },
    ];
  } else if (university === 'CTU' && specialization == 'IT' && band == 'first_band' && semester == 'first_semester') {
    dataC = [
      { id: 1, cTitle: "Python"},
      { id: 2, cTitle: "Physics"},
      { id: 3, cTitle: "Math 1"},
      { id: 4, cTitle: "Information Tecnology"},
      { id: 5, cTitle: "English 1"},
      { id: 6, cTitle: "Cyber Security 1"},
    ];
  } else if (university === 'CTU' && specialization == 'IT' && band == 'first_band' && semester == 'second_semester') {
    dataC = [
      { id: 7, cTitle: "C Programming"},
      { id: 8, cTitle: "Cyber Security 2"},
      { id: 9, cTitle: "MS office"},
      { id: 10, cTitle: "Math 2"},
      { id: 11, cTitle: "English 2"},
      { id: 12, cTitle: "IOT"},
    ];
  } else {
    return <MaterialEmpty />
  }

  return (
    <>
      <div className="container">
        <div className="card d_flex">
          <div className="img">
            <img
              src={
                university === "DTU"
                  ? DTU
                  : university === "CTU"
                  ? CTU
                  : null
              }
              alt=""
            />
          </div>
          <div className="content grid2">
            {dataC.map((value, index) => {
              return (
                <>
                  <div className="box boxShadow capitalize" key={index}>
                    <h3>{value.cTitle}</h3>
                    <Link to={"/material"}>
                      <button onClick={() => handleMaterialSelection(value.id)}>
                        Show Material
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card