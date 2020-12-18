
import React from "react";
import { Field } from "formik";
import {
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/core";

function ChakraTextarea(props) {
  const { label, name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Textarea id={name} {...rest} {...field} />
          <FormErrorMessage mb="-5px">{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraTextarea;