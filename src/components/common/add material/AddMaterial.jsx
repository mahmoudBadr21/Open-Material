import "./addMaterial.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddMaterial = () => {
  const { register, handleSubmit } = useForm();

  // to form hook data submit
  const onSubmit = async (data) => {
    console.log(data);
    const telegram_bot_id = "6493740176:AAHJAgTfteTMLfxsZlLRj5uyJppi7YagciU";
    const chat_id = 1204619486;

    // if (data.file[0]) {
      // formData.append("document", data.file[0]);
    // }

    try {
      await axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        {
          chat_id: chat_id,
          text: "University: " + data.university +
          "\nSpecialization : " + data.specialization+
          "\nThe band: " + data.the_band+
          "\nSemester: " + data.semester+
          "\nEmail: " + data.email+
          "\nFileLink: " + data.fileLink+
          "\nNotes: " + data.notes
        }
      );

      const filesArray = Array.from(data.files)
      const formData = new FormData();
      if (filesArray.length > 0) {
        formData.append("chat_id", chat_id);
        filesArray.forEach(file => {
          formData.append("document", file)
        });
      }

      await axios.post(`https://api.telegram.org/bot${telegram_bot_id}/sendDocument`,
        formData
      );

    console.log("Message sent successfully");
    } catch (error) {
      console.error('Error submtting data: ', error)
    }

  };

  return (
    <>
      <div className="container">
        <h1 className="title-addMaterial">
          Add <span>M</span>aterial
        </h1>
        <div className="addMaterial">
          <main>
            <div className="logo">
              <Link to="/">
                <span>O</span>pen <span>M</span>aterial
              </Link>
            </div>
            <br />

            <form onSubmit={handleSubmit(onSubmit)}>

              <label htmlFor="university">الجامعه</label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  {...register("university")}
                  placeholder="ادخل الجامعه"
                />

                <label>القسم</label>
                <input
                  type="text"
                  name="specialization"
                  {...register("specialization")}
                  placeholder="ادخل القسم"
                />

                <label>السنه الدراسيه</label>
                <select name="the_band" {...register("the_band")}>
                  <option disabled selected>اختر الفرقه</option>
                  <option value="first_band">الأولى</option>
                  <option value="second_band">الثانية</option>
                  <option value="third_band">الثالثة</option>
                  <option value="fourth_band">الرابعة</option>
                  <option value="fourth_band">الخامسة</option>
                </select>

                <label>الفصل الدراسي</label>
                <select name="semester" {...register("semester")}>
                  <option disabled selected>اختر الفصل الدراسي</option>
                  <option value="first_semester">الأول</option>
                  <option value="second_semester">الثاني</option>
                </select>

                <label>الايميل</label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="ادخل الايميل"
                />

                <label>الملفات</label>
                <input
                  type="file"
                  name="files"
                  {...register("files")}
                  accept=".pdf"
                  multiple
                />

                <label for="fileLink">رابط الملفات</label>
                <input
                  type="text"
                  id="fileLink"
                  name="fileLink"
                  {...register("fileLink")}
                  placeholder="اختياري"
                />

                <textarea
                  placeholder="ادخل ملاحظاتك"
                  name='notes'
                  {...register("notes")}
                ></textarea>

              <button type='submit' className="button">ارسال</button>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default AddMaterial;
