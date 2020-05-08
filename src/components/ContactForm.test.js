import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders contact form without crashing", () => {
    render(<ContactForm />);
});

test("first name field is present and can type in it with new text displayed", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<ContactForm />);

    const firstNameInput = getByPlaceholderText(/Edd/i);

    fireEvent.change(firstNameInput, { target: { value: "Jojojo" } });
    const firstNameContent = getByDisplayValue(/Jojojo/i);

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameContent).toBeInTheDocument();
});
test("last name field is present and can type in it with new text displayed", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(<ContactForm />);

    const lastNameInput = getByPlaceholderText(/Burke/i);

    fireEvent.change(lastNameInput, { target: { value: "Potato" } });
    const lastNameContent = getByDisplayValue(/Potato/i);

    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameContent).toBeInTheDocument();
});

// test("error messages exist", () => {
//     const { getByText, getByPlaceholderText } = render(<ContactForm />);
//     const firstNameInput = getByPlaceholderText(/Edd/i);
//     fireEvent.change(firstNameInput, { target: { value: "Jojojo" } });
//     const lastNameInput = getByPlaceholderText(/Burke/i);
//     fireEvent.change(lastNameInput, { target: { value: "Potato" } });
//     const firstNameError = getByText("maxLength");
//     expect(firstNameError).toBeInTheDocument();
// });

test("email is present and can be typed into", () => {
    const { getByLabelText, getByDisplayValue } = render(<ContactForm />);


    const emailInput = getByLabelText(/email/i);

    fireEvent.change(emailInput, { target: { value: "a@b.c" } });
    const emailContent = getByDisplayValue(/a@b.c/i);

    expect(emailInput).toBeInTheDocument();
    expect(emailContent).toBeInTheDocument();
});

test("textArea is present and can be typed into", () => {
    const { getByLabelText } = render(<ContactForm />);

    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(messageInput, { target: { value: "Greetings textArea" } });

    expect(messageInput).toBeInTheDocument();

});
test("button is present and can be used", () => {
    const { getByTestId } = render(<ContactForm />);

    const button = getByTestId(/submit-button/i);

    expect(button).toBeInTheDocument();
});