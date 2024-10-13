import React, { useState } from 'react'
import '../add material/addMaterial.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Feadback = () => {
  
  const [massage, setMassage] = useState('')

  const handleTextarea = (e) => {
    setMassage(e.target.value)
  }

  const submit = async(e) => {
    e.preventDefault();
    console.log(massage);

    //bot token
    var telegram_bot_id = "6807286534:AAH7OyAiMDWUd9tQfMszZb9IRVScoKH0Tpg";

    //chat id
    var chat_id =1204619486;

    try {
      await axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
      {
        chat_id: chat_id,
          text: `Feadback: ${massage}`
      })

      console.log("Message sent successfully");
    } catch(error) {
      console.error('Error submtting data: ', error)
    }
  }

  return (
    <>
      <section className="feadback container">
        <h1 className="title-feadback">Feadback</h1>
        <div className='fead-content'>
          <div className="logo">
            <Link to="/"><span>O</span>pen <span>M</span>aterial</Link>
          </div>

          <form onSubmit={submit}>
            <textarea placeholder="ادخل ملاحظاتك." onChange={handleTextarea}></textarea>
            <button type='submit' className="button">ارسال</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Feadback