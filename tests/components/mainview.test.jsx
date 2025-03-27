import MainView from "../../src/components/mainview/MainView";
import { renderWithProviders } from "../test-utils";
import { screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe('Mainview tests', () => {

  it("should render homepage components on '/' path", () => {
    renderWithProviders(
      <MemoryRouter initialEntries={["/"]}>
        <MainView />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("featuredGame")).toBeInTheDocument();
  })

  it('should render the action games from the api', async () => {
    renderWithProviders(
      <MemoryRouter>
        <MainView />
      </MemoryRouter>,
    );
 

    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    expect(screen.getByText("The Revenge of Shinobi")).toBeInTheDocument();
    expect(screen.getByText("Skyrim")).toBeInTheDocument();
    expect(screen.getByText("Indie Game")).toBeInTheDocument();

  })

})