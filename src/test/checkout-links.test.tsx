import type { ComponentType } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Route } from "@/routes/index";

// The page component is not exported, so reach it through the route's options.
const Page = (Route.options.component ?? (() => null)) as ComponentType;

describe("Checkout buttons", () => {
  it("sends the Starter Kit button to its own checkout page in a new tab", () => {
    render(<Page />);

    const link = screen.getByRole("link", { name: "Get the Starter Kit" });

    expect(link).toHaveAttribute("href", "https://pay.cakto.com.br/pncwk4d_1286399");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("sends the Complete Bundle button to its own checkout page in a new tab", () => {
    render(<Page />);

    const link = screen.getByRole("link", { name: "Get the Complete Bundle" });

    expect(link).toHaveAttribute("href", "https://pay.cakto.com.br/qzckg4a_1286363");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("leaves no placeholder wording on the page", () => {
    const { container } = render(<Page />);

    expect(container.textContent).not.toMatch(/placeholder/i);
    expect(container.textContent).not.toMatch(/not added yet/i);
  });
});
