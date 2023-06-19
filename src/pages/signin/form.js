import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import { Form } from "react-bootstrap";

export default function SForm({ form, handleChange, isLoading, handleSubmit }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email address"
        name="email"
        value={form.email}
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        name="password"
        value={form.password}
        type="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      <SButton loading={isLoading} disabled={isLoading} action={handleSubmit} variant="primary">
        Submit
      </SButton>
    </Form>
  );
}
