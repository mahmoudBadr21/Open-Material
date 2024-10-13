"use client";
import "./all.min.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import About from "./components/common/about/About";
import AddMaterial from "./components/common/add material/AddMaterial";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import Material from "./components/Material/Material";
import Feadback from "./components/common/feedback/Feadback";

function App() {
  // to form hook data set
  const { register, handleSubmit, setValue } = useForm();
  const [formData, setFormData] = useState({});

  // To card component data
  var dataC;

  // to form hook data submit
  const onSubmit = (data) => {
    console.log(data);
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({ ...formData, [fieldName]: fieldValue });
    setValue(fieldName, fieldValue);
  };

  // to chanage mood of the page
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  })
  
  useEffect(() => {
    document.body.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light")
  }

  return (
    <main className="main">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <Form
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              handleInputChange={handleInputChange}
            />
          }
          exact
        />

        <Route path="/addMaterial" element={<AddMaterial />} exact />

        <Route
          path="/card"
          element={
            <Card
            formData={formData}
            dataC={dataC}
            />
          }
          exact
        />

        <Route path="/material" element={<Material />} exact />

        <Route path="/about" element={<About />} exact />

        <Route path="/feadback" element={<Feadback />} exact />
      </Routes>
      <Footer />
    </main>
  );
}

export default App
