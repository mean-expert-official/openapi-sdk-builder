import { IOptions } from "../interfaces";
export class Console {
  public static options: IOptions;
  public static log(input: string): void {
    if (Console.options && Console.options.settings.verbose) {
      console.log(input);
    }
  }
  public static time(input: string): void {
    if (Console.options && Console.options.settings.verbose) {
      console.time(input);
    }
  }
  public static timeEnd(input: string): void {
    if (Console.options && Console.options.settings.verbose) {
      console.timeEnd(input);
    }
  }
}
