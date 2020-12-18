
import React from "react";
import { Field } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/core";

function ChakraInput(props) {
  const { label, name, validate, onBlur, ...rest } = props;
  return (
    <Field name={name} validate={validate}>
      {({ field, form }) => (
        <FormControl onBlur={onBlur} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...rest} {...field} />
          <FormErrorMessage mb="-5px">{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default ChakraInput;