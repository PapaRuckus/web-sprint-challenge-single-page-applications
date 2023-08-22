import React, { useState, useEffect } from "react";
import styled from "styled-components";
import schema from "../Validation/FormSchema";
import * as yup from "yup";

const Header = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  margin: auto;
  /* padding-left: 4px; */
  border-radius: 4px;
  margin-bottom: 50px;
`;

const Para = styled.p`
  padding-bottom: 6px;
  font-size: large;
  background-color: lightgrey;
  padding-left: 5px;
  width: 395px;
  /* margin-left: auto; */
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Span = styled.span`
  font-size: 10px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`;

const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export default function PizzaForm({ form, change, submit, errors, validate }) {
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <Container>
        <Header>Build Your Pizza</Header>
          <p>{errors.name}</p>
        <Para>
          Enter Your Name:
          <br />
          <Span>Required</Span>
        </Para>
        <label>
          <input
            type="text"
            id="name-input"
            name="name"
            value={form.name}
            onChange={change}
          />
        </label>

        <Para>
          Choice of Size:
          <br />
          <Span>Required</Span>
        </Para>
        <label>
          <select
            name="size"
            id="size-dropdown"
            value={form.size}
            onChange={change}
          >
            <option value="">- Select A Size -</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
          </select>
        </label>

        <Para>
          Choice of Sauce: <br />
          <Span>Required</Span>
        </Para>
        <Options>
          <label>
            <input
              type="radio"
              name="sauce"
              value="classic marinara"
              checked={form.sauce === "classic marinara"}
              onChange={change}
            />
            Classic Marinara
          </label>

          <label>
            <input
              type="radio"
              name="sauce"
              value="garlic alfredo"
              checked={form.sauce === "garlic alfredo"}
              onChange={change}
            />
            Garlic Alfredo
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              value="bbq"
              checked={form.sauce === "bbq"}
              onChange={change}
            />
            BBQ
          </label>
          <label>
            <input
              type="radio"
              name="sauce"
              value="dill ranch"
              checked={form.sauce === "dill ranch"}
              onChange={change}
            />
            Dill Ranch
          </label>
        </Options>

        <Para>
          Add Toppings:
          <br />
          <Span>Choose up to 10</Span>
        </Para>
        <Options>
          <label>
            <input
              type="checkbox"
              name="pickles"
              checked={form.pickles}
              onChange={change}
            />
            Pickles
          </label>

          <label>
            <input
              type="checkbox"
              name="anchovy"
              checked={form.anchovy}
              onChange={change}
            />
            Anchovy
          </label>

          <label>
            <input
              type="checkbox"
              name="mushrooms"
              checked={form.mushrooms}
              onChange={change}
            />
            Mushrooms
          </label>

          <label>
            <input
              type="checkbox"
              name="pepperoni"
              checked={form.pepperoni}
              onChange={change}
            />
            Pepperoni
          </label>

          <label>
            <input
              type="checkbox"
              name="sausage"
              checked={form.sausage}
              onChange={change}
            />
            Sausage
          </label>

          <label>
            <input
              type="checkbox"
              name="olives"
              checked={form.olives}
              onChange={change}
            />
            Olives
          </label>

          <label>
            <input
              type="checkbox"
              name="basil"
              value="basil"
              checked={form.basil}
              onChange={change}
            />
            Basil
          </label>

          <label>
            <input
              type="checkbox"
              name="chicken"
              value="chicken"
              checked={form.chicken}
              onChange={change}
            />
            Chicken
          </label>

          <label>
            <input
              type="checkbox"
              name="onions"
              value="onions"
              checked={form.onions}
              onChange={change}
            />
            Onions
          </label>

          <label>
            <input
              type="checkbox"
              name="pineapple"
              value="pineapple"
              checked={form.pineapple}
              onChange={change}
            />
            Pineapple
          </label>
        </Options>

        <Para>Special Instructions:</Para>
        <label>
          <input
            type="text"
            name="instructions"
            placeholder="Anything you want to add?"
            id="special-text"
            value={form.instructions}
            onChange={change}
          />
        </label>
        <br />
        <input type="submit" id="order-button" value="Make a Pizza" />
      </Container>
    </form>
  );
}
