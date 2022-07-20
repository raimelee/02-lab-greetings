import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter = new JavaScriptGreeter("Hallo");
    expect(greeter.greeting).toBe("Hallo");
  });
  test("the greet method returns the appropriate string", () => {
    const greeter = new JavaScriptGreeter("Bonjour");
    expect(greeter.greet("Andrew")).toBe(`console.log("Bonjour, Andrew!")`);
  });
});
