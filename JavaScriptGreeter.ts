import { Greeter } from "./Greeter";

class JavaScriptGreeter extends Greeter {
  // constructor(greeting: string) {
  //   super(greeting);
  // } we don't need the constructor again here because we aren't changing any parameters. See 02-practice
  greet(name: string): string {
    return `console.log("${super.greet(name)}")`;
  }
}

export { JavaScriptGreeter };
