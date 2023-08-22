import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Styled from "styled-components";
import "./App.css";
import Home from "./Components/Home.js";
import PizzaForm from "./Components/PizzaForm";
import axios from "axios";
import schema from "./Validation/FormSchema";
import * as yup from "yup";
import Help from "./Components/Help";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    size: "",
    sauce: "",
    toppings: {
      pickles: false,
      anchovy: false,
      mushrooms: false,
      pepperoni: false,
      sausage: false,
      olives: false,
      basil: false,
      chicken: false,
      onions: false,
      pineapple: false,
    },
    instructions: "",
    submittedData: null,
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    size: "",
    sauce: "",
    pickles: "",
    anchovy: "",
    mushrooms: "",
    pepperoni: "",
    sausage: "",
    olives: "",
    basil: "",
    chicken: "",
    onions: "",
    pineapple: "",
    instructions: "",
  });

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      })
      .catch((err) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: err.errors[0],
        }));
      });
  };

  const handleFormChange = (event) => {
    const { name, value, type, checked } = event.target;
    validate(name, value);

    if (type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        toppings: {
          ...prevForm.toppings,
          [name]: checked,
        },
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        console.log("Form submitted successfully:", res.data);
        setForm({
          ...form,
          submittedData: res.data,
        });
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
  };

  return (
    <div>
      <nav>
        <h1 className="header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="help">Help</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="pizza"
          element={
            <PizzaForm
              form={form}
              change={handleFormChange}
              submit={handleSubmit}
              validate={validate}
              errors={formErrors}
            />
          }
        />
        <Route path="help" element={<Help />} />
      </Routes>
    </div>
  );
};
export default App;
