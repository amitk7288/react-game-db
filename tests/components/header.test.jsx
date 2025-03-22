import { render, screen, logRoles } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "../../src/components/header/Header";

describe("Header tests", () => {

  const renderHeader = () =>
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

  it("should render correctly", () => {
    renderHeader();
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
    logRoles(headerElement);
  });

  it('should contain a search box with input field', () => {
    renderHeader();
    const searchBoxes = screen.getAllByRole("searchbox");
    expect(searchBoxes.length).toBe(2);
  });

  it('should contain a dark mode icon', () => {
    renderHeader();
    const darkModeIcon = screen.getByTestId("darkMode-icon");
    expect(darkModeIcon).toBeInTheDocument();
  });

  it('should toggle dark mode on icon click', async () => {
    renderHeader();
    const user = userEvent.setup();

    const darkModeContainer = screen.getByTestId("darkMode-icon");
    const drkModeBtns = darkModeContainer.querySelectorAll("button");

    expect(drkModeBtns.length).toBe(2);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    await user.click(drkModeBtns[1]);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    await user.click(drkModeBtns[1]);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

});
