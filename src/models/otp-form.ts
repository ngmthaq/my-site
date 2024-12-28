import * as yup from "yup";

export const OTP_FORM_SCHEMA = yup.object().shape({
  otp: yup.string().required("OTP is required").min(4, "OTP min length is 4").default(""),
});

export type OTPFormSchemaType = yup.InferType<typeof OTP_FORM_SCHEMA>;
