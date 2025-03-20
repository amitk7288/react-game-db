import GameCard from "../../src/components/mainview/game-card/GameCard";
import { screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../test-utils";

vi.mock(import("react-router-dom"), async(importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe('gamecard tests', () => {
  let mockNavigate;
  let user;

  const mockGame = {
    id: 1,
    title: "Test Game",
    slug: "test-game",
    rating: 4.5,
    parent_platforms: [{ platform: { id: 1, name: "PC" } }],
  };

  const mockProps = {
    img: "test-image.jpg",
    title: mockGame.title,
    rating: mockGame.rating,
    genre: "Action",
    slug: mockGame.slug,
    game: mockGame,
    notify: vi.fn(),
  };

  beforeEach(() => {
    mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);
    user = userEvent.setup();
  })

  it("should render all game card info", () => {

    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
    );

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    const imageElement = screen.getByAltText("game title");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute("src")).toBe(mockProps.img);
    expect(screen.getByText(mockGame.rating.toFixed(1))).toBeInTheDocument();    
    expect(screen.getByText(mockProps.genre)).toBeInTheDocument();

    expect(screen.getByTestId("fav-button")).toBeInTheDocument();
    expect(screen.getByTestId("wish-button")).toBeInTheDocument();
    expect(screen.getByTestId("save-button")).toBeInTheDocument();
  });

  it('should navigate to game page on click', async () => {

    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
    );

    const gameCardDiv = screen.getByTestId("gamecard");
    await user.click(gameCardDiv);

    expect(mockNavigate).toHaveBeenCalledWith(`/game/${mockGame.id}/${mockGame.slug}`, { state: { gameObj: mockGame } });
  });

  it("should initially set the fav icon based on the Redux favGamesData", () => {
    renderWithProviders( 
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
      {
        preloadedState: {
          favGames: [],
        }
      },
    );

    const favBtn = screen.getByTestId("fav-button");
    expect(favBtn).toBeInTheDocument();

    expect(screen.getByTestId("unfavedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("favedGame")).toBeNull();

  });

  it("should toggle the fav icon when the favorite button is clicked", async () => {
    const {store} = renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
      {
        preloadedState: {
          favGames: [],
        },
      },
    );

    const favBtn = screen.getByTestId("fav-button");
    expect(favBtn).toBeInTheDocument();

    expect(screen.getByTestId("unfavedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("favedGame")).toBeNull();

    await user.click(favBtn);

    expect(store.getState().favGames.some(game => game.id === mockGame.id)).toBe(true);

    expect(screen.getByTestId("favedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("unfavedGame")).toBeNull();

    await user.click(favBtn);
    expect(store.getState().favGames.some((game) => game.id === mockGame.id)).toBe(false);

    expect(screen.getByTestId("unfavedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("favedGame")).toBeNull();
  });

  it("should initially set the wishlist icon based on the Redux wishGamesData", () => {
    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
      {
        preloadedState: {
          wishGames: [],
        },
      },
    );

    const wishBtn = screen.getByTestId("wish-button");
    expect(wishBtn).toBeInTheDocument();

    expect(screen.getByTestId("unwishedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("wishedGame")).toBeNull();
  });

  it("should toggle the wishlist icon when the wishlist button is clicked", async () => {
        const { store } = renderWithProviders(
          <MemoryRouter>
            <GameCard {...mockProps} />
          </MemoryRouter>,
          {
            preloadedState: {
              wishGames: [],
            },
          },
        );

        const wishBtn = screen.getByTestId("wish-button");
        expect(wishBtn).toBeInTheDocument();

        expect(screen.getByTestId("unwishedGame")).toBeInTheDocument();
        expect(screen.queryByTestId("wishedGame")).toBeNull();

        await user.click(wishBtn);

        expect(
          store.getState().wishGames.some((game) => game.id === mockGame.id),
        ).toBe(true);

        expect(screen.getByTestId("wishedGame")).toBeInTheDocument();
        expect(screen.queryByTestId("unwishedGame")).toBeNull();

        await user.click(wishBtn);
        expect(
          store.getState().wishGames.some((game) => game.id === mockGame.id),
        ).toBe(false);

        expect(screen.getByTestId("unwishedGame")).toBeInTheDocument();
        expect(screen.queryByTestId("wishedGame")).toBeNull();
  });

  it("should initially set the save icon based on the Redux savedGamesData", () => {
    const {store} = renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
      {
        preloadedState: {
          collections: [
            {
              id: 1,
              title: "My game collection",
              games: [],
            }
          ],
        },
      },
    );

    const saveBtn = screen.getByTestId("save-button");
    expect(saveBtn).toBeInTheDocument();

    expect(store.getState().collections.flatMap(collection => collection.games).some(game => game.id === mockGame.id)).toBe(false);

    expect(screen.getByTestId("unsavedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("savedGame")).toBeNull();
  });

  it("should open the modal when the save button is clicked", async () => {
    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
    );

    const saveBtn = screen.getByTestId("save-button");
    expect(saveBtn).toBeInTheDocument();

    await user.click(saveBtn);
    expect(screen.getByText("Save game to...")).toBeInTheDocument();
  });

  it("should update the save icon when the Redux savedGamesData changes", () => {
    const { store } = renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} />
      </MemoryRouter>,
      {
        preloadedState: {
          collections: [
            {
              id: 1,
              title: "My game collection",
              games: [mockGame],
            },
          ],
        },
      },
    );

    const saveBtn = screen.getByTestId("save-button");
    expect(saveBtn).toBeInTheDocument();

    expect(store.getState().collections.flatMap(collection => collection.games).some(game => game.id === mockGame.id)).toBe(true);

    expect(screen.getByTestId("savedGame")).toBeInTheDocument();
    expect(screen.queryByTestId("unsavedGame")).toBeNull();
  });

  it("should render nothing for platform icons if an unknown platform name is used", () => {
    const mockUnknownPlatform = {
      ...mockGame,
      parent_platforms: [{platform: {id: 999, name: "Unknown Platform"}}],
    }

    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} game={mockUnknownPlatform} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("platform-icons").querySelectorAll("li").length).toBe(0);

  })

  it("should render nothing for platform icons if no parent platforms are found", () => {
    const mockUnknownPlatform = {
      ...mockGame,
      parent_platforms: [{ platform: {undefined} }],
    };

    renderWithProviders(
      <MemoryRouter>
        <GameCard {...mockProps} game={mockUnknownPlatform} />
      </MemoryRouter>,
    );

    expect(screen.getByTestId("platform-icons").querySelectorAll("li").length).toBe(0);
  });

})