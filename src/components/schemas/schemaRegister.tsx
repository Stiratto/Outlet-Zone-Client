import * as yup from "yup";
const requiredMessage = "Este campo es obligatorio.";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const schemaRegister = yup.object().shape({
  email: yup
    .string()
    .required(requiredMessage)
    .email("No parece un email válido."),
  password: yup.string().matches(passwordRegex, "La contraseña no es válida."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Tiene que ser igual a la contraseña."),
  trueInfo: yup.boolean().oneOf([true], "Debes confirmar este campo."),
});
