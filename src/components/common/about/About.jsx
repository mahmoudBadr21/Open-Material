import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container RText">
          <main class="content_about">

            <h1 class="title"><span>O</span>pen <span>M</span>aterial</h1>

            <p class="content">
              هو تطبيق ويب يقوم بأدارة المقررات الدراسية الخاصة بالجامعات
              و يسهل وصول الطلاب إلى المقررات 
            </p>

            <br />

            <p class="content">
              اذا واجهك مشاكل في استخدام الموقع أو
              اذا كنت تريد اضافة مقررات دراسية لجامعة 
              و تريد مساعدتنا على تطوير الموقع من فضلك راسلني على تيليجرام 
            </p>
            <a href="https://t.me/TFMohamed" class="add_botm" target='_blank'>Telegram</a>

            <p class="content">او من خلال رسأل الموقع</p>
            <Link to="/feadback" class="add_botm">رساله</Link>

          </main>
        </div>
      </section>
    </>
  )
}

export default About