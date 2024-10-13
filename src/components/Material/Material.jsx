import React, { useContext } from 'react'
import './material.css'
import { StoreConext } from '../../assets/context/StoreContext';

const Material = () => {

  const {selectionButton, dataM} = useContext(StoreConext)

  return (
    <>
      <div className="container">
        <div className="material">
          <h1 className='mainTitle'>{selectionButton}</h1>
          <h2 className='title'>Lectures:</h2>
          {
            dataM.map((value, index) => {
              return(
                <>
                  {
                    value.lecturer &&
                    <>
                      <div className="box boxShadow" key={index}>
                        <section className="lectures c_flex">
                          <h3>{value.lecturer}</h3>
                          {
                            value.url&&
                            <>
                              <a href={value.url} target='_blank'>Show PDF</a>
                            </>
                          }
                        </section>
                      </div>
                    </>
                  }

                  {
                    value.mid &&
                    <>
                      <section className="midTerm">
                        <h2 className='title'>MidTerm Exam:</h2>
                        <div className="box c_flex boxShadow">
                          <h3>{value.mid}</h3>
                          {
                            value.midUrl &&
                            <>
                              <a href={value.midUrl} target='_blank'>Show PDF</a>
                            </>
                          }
                        </div>
                      </section>
                    </>
                  }

                  {
                    value.sheet &&
                    <>
                      <section className="midTerm">
                        <h2 className='title'>MidTerm Exam:</h2>
                        <div className="box c_flex boxShadow">
                          <h3>{value.mid}</h3>
                          {
                            value.midUrl &&
                            <>
                              <a href={value.midUrl} target='_blank'>Show PDF</a>
                            </>
                          }
                        </div>
                      </section>
                    </>
                  }
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Material