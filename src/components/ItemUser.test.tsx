import React from "react";
import ItemUser from "./ItemUser";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("testing of the component itemUser", () => {
  it("component renders", () => {
    const { getByText, container } = render(
      <ItemUser nickname="Anton" message="hello" date={new Date(2022, 1, 20)} />
    );
    expect(container.firstChild).toHaveClass("message");
    expect(getByText("hello")).toHaveClass("message__ms");
    expect(getByText("Anton")).toHaveClass("message__name");
    expect(getByText("20.1.2022")).toHaveClass("message__date");
    expect(getByText("Anton")).toBeInTheDocument();
    expect(getByText("hello")).toBeInTheDocument();
    expect(getByText("20.1.2022")).toBeInTheDocument();
  });
});
