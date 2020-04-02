import { render, cleanup } from "@testing-library/svelte";
import Button from "../src/components/Button.svelte";

describe("button component", () => {
  afterEach(() => {
    cleanup();
  }); // Default on import: runs it after each test.
  test("should render component correctly", () => {
    const { container } = render(Button, {
      props: {
        text: "testing",
      },
    });

    expect(container).toContainHTML("<button>testing</button>");
  });
});
