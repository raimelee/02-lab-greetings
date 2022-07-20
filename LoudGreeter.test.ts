import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("the greeting property is set byt the constructor", () => {
    const greeter: LoudGreeter = new LoudGreeter("HI");
    expect(greeter.greeting).toBe("HI");
  });
  test("calling the greet method without addVolume", () => {
    const greeter: LoudGreeter = new LoudGreeter("Yo");
    expect(greeter.greet("Tessa")).toBe("Yo, Tessa!!!");
  });
  test("calling the greet method after calling addVolume once", () => {
    const greeter: LoudGreeter = new LoudGreeter("Salut");
    greeter.addVolume();
    expect(greeter.greet("Kumo")).toBe("Salut, Kumo!!!!");
  });
  test("calling the greet method after calling addVolume three times", () => {
    const greeter: LoudGreeter = new LoudGreeter("Cheers");
    greeter.addVolume();
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Cosmo")).toBe("Cheers, Cosmo!!!!!!");
  });
});
