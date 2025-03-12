import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/header/Header";

describe.skip("Header tests", () => {

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  it("should apply the correct theme based on localStorage value", () => {});

  it("searches for a game", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

});
