import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("the greeting property is properly set by the constructor", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Sup");
    expect(greeter.greeting).toBe("Sup");
  });
  test("the tagName property is properly set by the constructor", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Bing", "h1");
    expect(greeter.tagName).toBe("h1");
  });
  test("the tagName property has a default value of h1", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Boo"); //we don't need a second argument because we have a default value set
    expect(greeter.tagName).toBe("h1");
  });
  test("the greet method returns an appropriate string", () => {
    const greeter: HtmlGreeter = new HtmlGreeter("Greetings"); //we don't need a second argument because we have a default value set
    expect(greeter.greet("Earthling")).toBe("<h1>Greetings, Earthling!<h1>");
  });
});
