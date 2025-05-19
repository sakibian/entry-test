import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders login form initially", () => {
  render(<App />);
  const loginHeader = screen.getByText(/Login/i);
  expect(loginHeader).toBeInTheDocument();
});
