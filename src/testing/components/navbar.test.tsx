import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/navbar";

describe.concurrent("Navbar", () => {
  test("renders navigation", () => {
    render(<Navbar />);
    expect(screen.getByRole("navigation")).toBeDefined();
  });
});
