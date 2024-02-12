import * as yup from "yup";
const requiredMessage = "Este campo es obligatorio.";

export const schemaRegister = yup.object().shape({
  email: yup.string().required(requiredMessage),
  password: yup.string().required(requiredMessage),
});
