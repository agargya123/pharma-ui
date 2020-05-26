import { Component } from "@angular/core";

export class MethodComponentMap {
  MethodComponent(f: string, c: Component) {
    this.function = f;
    this.component = c;
  }
  function: string;
  component: any;
}
