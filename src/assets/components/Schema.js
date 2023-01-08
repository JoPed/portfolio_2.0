import * as yup from "yup";

//*Yup schema used for form validation in Modal.js
export const Schema = yup.object().shape({
    name: yup
    .string() 
    .required("Navn skal udfyldes"),

    email: yup
    .string()
    .email("Forkert mail format")
    .required("Email skal udfyldes"),

    subject: yup
    .string()
    .required("Emne skal udfyldes")
    .max(25, "Emne må maks fylde 25 tegn"),

    textArea: yup
    .string()
    .required("Besked skal udfyldes")
    .max(300, "Besked må maks være 300 tegn")

})