import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
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
    act(() => {
        fireEvent.click(button);
    });

    expect(button).toBeInTheDocument();
});
// test("valid information can be entered into the fields and the submit button can be pressed.", () => {
//     const { getByPlaceholderText, getByTestId, getByLabelText, getByText } = render(<ContactForm />);
//     // const firstNameInput = getByPlaceholderText(/Edd/i);
//     const lastNameInput = getByPlaceholderText(/Burke/i);

//     fireEvent.change(getByPlaceholderText(/Edd/i), { target: { value: "Jojojo" } });
//     fireEvent.change(getByPlaceholderText(/Burke/i), { target: { value: "Potato" } });
//     fireEvent.change(getByLabelText(/email/i), { target: { value: "a@b.c" } });
//     act(() => {
//         fireEvent.click(getByTestId(/submit-button/i));
//     });
//     setTimeout(1000, () => {});

//     expect(getByText(/Jojojo/i)).toBeInTheDocument();
// });