import React from "react";
import Footer from "./Footer";
import { getByDisplayValue, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import userEvent from "@testing-library/user-event";

describe("testing of the component Footer", () => {
  it("component renders", () => {
    const {
      getByRole,
      container,
      getByPlaceholderText,
      getByDisplayValue,
      getByText,
    } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(container.firstChild).toHaveClass("footer");
    expect(getByRole("button")).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
    expect(getByPlaceholderText("Type Your message here")).toBeInTheDocument();
    expect(getByDisplayValue("")).toBeInTheDocument();
    userEvent.type(getByRole("textbox"), "React");
    expect((getByRole("textbox") as HTMLInputElement).value).toBe("React");
  });
});
