import React from "react";
import Main from "./Main";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import "@testing-library/jest-dom";

describe("testing of the component Main", () => {
  it("main renders", async () => {
    const users = [
      { nickname: "Anton", message: "hello", date: new Date(2022, 1, 20) },
      { nickname: "Nikita", message: "hello", date: new Date(2022, 2, 21) },
      { nickname: "Artem", message: "hello", date: new Date(2022, 3, 22) },
    ];

    const { getByText, container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(getByText("Friends")).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("main");
  });
});
