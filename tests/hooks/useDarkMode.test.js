import { act, renderHook } from "@testing-library/react";
import useDarkMode from "../../src/hooks/usedarkMode";
import { expect, vi } from "vitest";

describe('useDarkMode tests', () => {

  // cleanup DOM after each test, this will avoid clashes between tests
  afterEach(() => {
    document.documentElement.className = ""; // Clears all classes from HTML tag
  });

  it('should retrieve the theme from localStorage', () => {
    const localStorageMock = {
      getItem: vi.fn(() => 'dark'),
      setItem: vi.fn()
    };
    global.localStorage = localStorageMock;

    const {result} = renderHook(() => useDarkMode());

    expect(localStorageMock.getItem).toHaveBeenCalledWith("theme");
    expect(result.current[0]).toBe('dark');
    expect(localStorageMock.getItem).toHaveBeenCalledTimes(1);

  });

  it('should apply dark mode when theme is set to dark', () => {
    const localStorageMock = {
      getItem: vi.fn(() => 'dark'),
      setItem: vi.fn()
    }
    global.localStorage = localStorageMock;

    renderHook(() => useDarkMode());

    expect(document.documentElement.classList.contains('dark')).toBe(true);

  });

  it('should apply light mode when theme is set to light', () => {
    const localStorageMock = {
      getItem: vi.fn(() => "light"),
      setItem: vi.fn(),
    };
    global.localStorage = localStorageMock;

    renderHook(() => useDarkMode());

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    
  });

  it('should default to dark mode if localStorage is null, empty or undefined', () => {
    const localStorageMock = {
      getItem: vi.fn(() => ''),
      setItem: vi.fn(),
    }
    global.localStorage = localStorageMock;

    renderHook(() => useDarkMode());
    
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    
  });

  it('should default to dark mode for unrecognised localStorage values', () => {
    const localStorageMock = {
      getItem: vi.fn(() => 'hello'),
      setItem: vi.fn(),
    }
    global.localStorage = localStorageMock;

    renderHook(() => useDarkMode());

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('should toggle between dark and light when toggleTheme is called', () => {
     const localStorageMock = {
       getItem: vi.fn(() => "dark"),
       setItem: vi.fn(),
     };
     global.localStorage = localStorageMock;
     const { result } = renderHook(() => useDarkMode());

     expect(document.documentElement.classList.contains("dark")).toBe(true);
     act(() => result.current[1]());

     expect(document.documentElement.classList.contains("dark")).toBe(false);
     act(() => result.current[1]());

     expect(document.documentElement.classList.contains("dark")).toBe(true);

  });

})