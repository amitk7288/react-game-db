import SidebarIcons from "../../src/components/sidebar/SidebarIcons";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocation, MemoryRouter } from "react-router-dom";

function LocationDisplay() {
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

describe("SideBar Menu Tests", () => {

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <SidebarIcons />
        <LocationDisplay />
      </MemoryRouter>,
    );

  })
  
  it("should render all menu items", () => {
    expect(screen.getByText("Genres")).toBeInTheDocument();
    expect(screen.getByText("Library")).toBeInTheDocument();
    expect(screen.getByText("Friends")).toBeInTheDocument();
    expect(screen.getByText("Favourites")).toBeInTheDocument();
    expect(screen.getByText("Wishlist")).toBeInTheDocument();
    expect(screen.getByText("Collections")).toBeInTheDocument();
  });

  it("should navigate to relevant page on item click", async () => {
    const user = userEvent.setup();

    expect(screen.getByTestId("location-display").textContent).toBe("/");

    await user.click(screen.getByText("Genres"));
    expect(screen.getByTestId("location-display").textContent).toBe("/genres");

    await user.click(screen.getByText("Library"));
    expect(screen.getByTestId("location-display").textContent).toBe("/library");

    await user.click(screen.getByText("Friends"));
    expect(screen.getByTestId("location-display").textContent).toBe("/friends");

    await user.click(screen.getByText("Favourites"));
    expect(screen.getByTestId("location-display").textContent).toBe("/favourites");

    await user.click(screen.getByText("Wishlist"));
    expect(screen.getByTestId("location-display").textContent).toBe("/wishlist");

    await user.click(screen.getByText("Collections"));
    expect(screen.getByTestId("location-display").textContent).toBe("/collections");
    
  });
})