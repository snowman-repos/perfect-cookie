import { render } from "@testing-library/svelte";
import Index from "../src/routes/index.svelte";

describe("index component", () => {
  test("should render component correctly", () => {
    const { container } = render(Index);

    expect(container).toContainHTML("<h1>Great success!</h1>");
  });
});
