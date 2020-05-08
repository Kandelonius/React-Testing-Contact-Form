import React from "react";
import { render, fireEvent, getAllByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders App without crashing", () => {
    render(<ContactForm />);
});

test("name feilds are present and can type in them", () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<ContactForm />);

    const firstNameInput = getByPlaceholderText(/Edd/i);
    const lastNameInput = getByPlaceholderText(/Burke/i);

    fireEvent.change(firstNameInput, { target: { value: "Jojojo" } });
    fireEvent.change(lastNameInput, { target: { value: "Potato" } });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
});

test("error messages exist", () => {
    const { getByText, getByPlaceholderText } = render(<ContactForm />);
    const firstNameInput = getByPlaceholderText(/Edd/i);
    const firstNameError = getByText("Looks like there was an error:");
    fireEvent.change(firstNameInput, { target: { value: "Jojojo" } });
    expect(firstNameError).toBeInTheDocument();

})

test("email is present and can be typed into", () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<ContactForm />);


    const emailInput = getByPlaceholderText(/bluebill1049@hotmail.com/i);

    // fireEvent.change(emailInput, { target: { value: "a@b.c" } });

    expect(emailInput).toBeInTheDocument();

});

test("textArea is present and can be typed into", () => {
    const { getByPlaceholderText, getByText, getByLabelText } = render(<ContactForm />);
    const messageInput = getByText(/Message/i);

    // fireEvent.change(messageInput, { target: { value: "Greetings textArea" } });

    expect(messageInput).toBeInTheDocument();

});
// test("button is present and can be used", () => {
//     const { getByRole } = render(<ContactForm />);

//     const button = getByRole('button', {name: /submit!/i});

//     expect(button).toBeInTheDocument();
// });