import React from "react";
import { render, screen, fireEvent, findByText } from "@testing-library/react";
import App from "./App";

test("renders and inputs work", () => {
  render(<App />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  const submitButton = screen.getByRole("button", /submit/i);

  fireEvent.change(firstNameInput, { target: { value: "Brian" } });
  fireEvent.change(lastNameInput, {
    target: { name: "lastName", value: "Kubes" },
  });
  fireEvent.change(emailInput, { target: { value: "me@me.com" } });

  fireEvent.click(submitButton);

  const checkName = screen.findByText(/brian/i);
});
