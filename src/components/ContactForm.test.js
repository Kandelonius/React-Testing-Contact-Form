import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
    render(<ContactForm />);
  });

  test("input feilds are present", () => {
    const { getByPlaceholderText, getByLabelText } = render(<ContactForm />)
  
    const firstNameInput = getByPlaceholderText(/Edd/i);
    const lastNameInput = getByPlaceholderText(/Burke/i);
    const emailInput = getByPlaceholderText(/bluebill1049@hotmail.com/i);
    const messageInput = getByLabelText(/message/i)
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });