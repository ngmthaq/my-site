import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { Schema } from "yup";

export function useYupForm(schema: Schema) {
  const typedSchema = toTypedSchema(schema);

  const form = useForm({
    validationSchema: typedSchema,
  });

  return form;
}
