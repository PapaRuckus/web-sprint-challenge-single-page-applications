import * as yup from "yup";

const FormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Size is required"),
  sauce: yup.string().required("Sauce is required"),
  pickles: yup.bool(),
  anchovy: yup.bool(),
  mushrooms: yup.bool(),
  pepperoni: yup.bool(),
  sausage: yup.bool(),
  olives: yup.bool(),
  basil: yup.bool(),
  chicken: yup.bool(),
  onions: yup.bool(),
  pineapple: yup.bool(),
  instructions: yup.string(),
});

export default FormSchema;
