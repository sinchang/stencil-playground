import { Component, Prop, h, Listen, Method } from '@stencil/core';
import { format } from '../../utils/utils';
import '../ihr-button/ihr-button';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * The age
   */
  @Prop() age!: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @Listen('keydown', {
    passive: true,
  })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowDown') {
      console.log('down arrow pressed');
    }
  }

  // VALID: even if it returns nothing, it needs to be async
  @Method()
  async myMethod3() {
    console.log(42);
  }

  private clickHandler(event: UIEvent) {
    console.log('Received the custom click event: ', event.detail);
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <div>
          <input type="text" />
        </div>
        <ihr-button label="Click Me" variant="contained" color="primary" onClickEvent={this.clickHandler.bind(this)} />
        <p class="tip">This is a tip</p>
      </div>
    );
  }
}
