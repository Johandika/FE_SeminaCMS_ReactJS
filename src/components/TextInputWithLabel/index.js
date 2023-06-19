import React from "react";
import Form from "react-bootstrap/Form";
import TextInput from "../TextInput";

export default function TextInputWithLabel({ label, name, value, type, placeholder, onChange }) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
}
