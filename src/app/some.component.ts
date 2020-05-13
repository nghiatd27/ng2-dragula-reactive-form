import { Component, Input } from '@angular/core';

// This component is unused, so feel free to use it to
// demonstrate issues with child components, etc.

@Component({
  selector: 'some',
  template: `
  <h1>Hello {{name}}!</h1>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class SomeComponent  {
  @Input() name: string;
}
