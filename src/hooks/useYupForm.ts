import type { FormContext } from "vee-validate";
import type { InferType } from "yup";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { Schema } from "yup";

export function useYupForm<T extends Schema>(schema: T): FormContext<InferType<T>> {
  const typedSchema = toTypedSchema(schema);

  const form = useForm<InferType<T>>({
    validationSchema: typedSchema,
  });

  return form;
}
