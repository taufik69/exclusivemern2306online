import * as Yup from "yup";
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;

export const loginSchema = Yup.object({
  emailorphone: Yup.string()
    .matches(mailFormat, "Invalid email address")
    .required("Email Missing !!"),

  Password: Yup.string()
    .min(8, "password Length can be 8 chractar")
    .max(14, "Passowrd length can over 14")
    .matches(
      passwordFormat,
      "password inclues 1 spceacila character number Uppercase and lowecase"
    )
    .required("Password Required"),
});

export const contactSchema = Yup.object({
  name: Yup.string().required("Name is Required"),
  email: Yup.string()
    .matches(mailFormat, "Invalid email address")
    .required("Email is Required"),
  phone: Yup.string()
    .required("Phone Number is Required")
    .matches(bdPhoneNumberRegex, "Invalid Phone Number"),
  message: Yup.string().required("Message is Required"),
});
