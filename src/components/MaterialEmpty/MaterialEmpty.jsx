import React from 'react'
import './materialEmpty.css'
import { Link } from 'react-router-dom'

const MaterialEmpty = () => {
  return (
    <div className='material-emp container'>
      <div className="material-emp-text">
        <h1><span>O</span>pen <span>M</span>aterial</h1>
        <p>.عفواً لا يوجد بيانات بعد</p>
        <p>يمكنك أضافة مقررات دراسية من خلال الصفحة التالية</p>
        <Link to={"/addMaterial"}>
          <button type="submit">اضافة موارد</button>
        </Link>
      </div>
    </div>
  )
}

export default MaterialEmpty
