import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("Hello");
  });
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new Greeter("Booyah");
    expect(greeter.greeting).toBe("Booyah");
  });
  test("greeting and name returned", () => {
    const greeter = new Greeter("Howdy");
    expect(greeter.greet("Zakir")).toBe("Howdy, Zakir!");
  });
});
