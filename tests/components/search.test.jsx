import Search from "../../src/components/header/Search";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

vi.mock(import("react-router-dom"), async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
  }
})

describe("Searchfield tests", () => {
  let searchField;
  let user;
  let mockNavigate;

  beforeEach(() => {
    mockNavigate = vi.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <Search isSearchOpen={true}/>
      </MemoryRouter>,
    );
  
    searchField = screen.getByRole("searchbox");
    user = userEvent.setup();

  });

  it("should allow users to type into the field", async () => {
    await user.type(searchField, "Elden Ring");
    expect(searchField).toHaveValue("Elden Ring");
  });

  it("should trigger the search on press of enter key", async () => {
    const testQuery = 'Elden Ring'
    await user.keyboard(`${testQuery}{enter}`);
    
    expect(mockNavigate).toHaveBeenCalledWith(`/search/${testQuery}`);

  });

  it('should clear the text on click of x', async () => {
      const testQuery = "Elden Ring";
      await user.keyboard(`${testQuery}`);
      expect(searchField).toHaveValue(testQuery);

      await user.clear(searchField);
      expect(searchField).toHaveValue("");
  });

  it("should not trigger search if input is empty", async () => {
    await user.keyboard(`{enter}`)
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(0);
  });
});
