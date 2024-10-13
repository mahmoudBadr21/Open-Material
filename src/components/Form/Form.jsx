import React from 'react'
import { Link } from 'react-router-dom'
import './form.css'

const Form = ({register , handleSubmit , onSubmit, handleInputChange}) => {
  return (
    <>
      <div className="container">

        <section className="descrbsion">
          <h1><span>O</span>pen <span>M</span>aterial</h1>
          <p>قم بأدخل البيانات في الفورم التالية لتظهر لك المواد الدراسية </p>
        </section>

        <div className="mainForm">
          <form className='RText' onSubmit={() => {handleSubmit(onSubmit)} }>

            <label htmlFor="university">الجامعة</label>
            <select {...register("university")} name='university' onChange={handleInputChange} required>
              <option disabled selected>اختر الجامعه</option>
              <option value={"DTU"}>جامعة الدلتا التكنولوجيا</option>
              <option value={"CTU"}>جامعة القاهرة التكنولوجيا</option>
            </select>

            <label htmlFor='specialization'>التخصص</label>
            <select {...register("specialization")} name='specialization' onChange={handleInputChange} required>
              <option disabled selected>اختر التخصص</option>
              <option value="IT">تكنولوجيا المعلومات</option>
              <option disabled value="autotronics">تكنولوجيا السيارات الحديثة </option>
            </select>

            <label htmlFor="band">الفرقة</label>
            <select {...register("band")} name='band' onChange={handleInputChange} required>
              <option disabled selected>اختر الفرقه</option>
              <option value="first_band">الأولى</option>
              <option value="second_band">الثانية</option>
              <option disabled value="third_band">الثالثة</option>
              <option disabled value="fourth_band">الرابعة</option>
            </select>

            <label htmlFor="semester">الفصل الدراسي</label>
            <select {...register("semester")} name='semester' onChange={handleInputChange} required>
              <option disabled selected>اختر الفصل الدراسي</option>
              <option value="first_semester">الأول</option>
              <option value="second_semester">الثاني</option>
            </select>

            <Link to={"/card"}>
              <button type="submit">ارسال</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form