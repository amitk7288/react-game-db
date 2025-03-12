import { renderHook } from "@testing-library/react";
import useTruncate from "../../src/hooks/useTruncate";

describe('useTruncate Hook', () => { 

  it("should return the same text when shorter than the limit", () => {
    const { result } = renderHook(() => useTruncate('Hello, world', 100));
    expect(result.current).toBe('Hello, world');
  });

  it('should truncate text longer than the limit', () => {
    const {result} = renderHook(() => useTruncate('Hello, world', 6));
    expect(result.current).toBe('Hello,...');
  })

  it('should return the same text when equal to limit', () => {
    const {result} = renderHook(() => useTruncate('Hello, world', 12));
    expect(result.current).toBe('Hello, world');
  })

  it("should return an empty string for empty input", () => {
    const { result } = renderHook(() => useTruncate('', 10));
    expect(result.current).toBe('');
  });

  it("should return the same text for empty limit", () => {
    const { result } = renderHook(() => useTruncate('Hello, World', ));
    expect(result.current).toBe("Hello, World");
  });

  it("should return an empty string for null input", () => {
    const { result } = renderHook(() => useTruncate(null, 10));
    expect(result.current).toBe('');
  });

})