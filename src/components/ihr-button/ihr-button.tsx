import { Component, Event, h, Prop, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ihr-button',
  styleUrl: 'ihr-button.scss',
  shadow: true,
})
export class IhrButton {
  @Event() clickEvent: EventEmitter;

  @Prop() label: string;

  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  @Prop() color: 'primary' | 'accent' | 'light' = 'primary';

  @Prop() shape: 'square' | 'round' = 'square';

  @Prop() size: 'small' | 'default' | 'large' = 'default';

  @Prop() variant: 'outlined' | 'contained' = 'contained';

  @Prop({ reflect: true }) disabled: boolean;

  private handleClick(event: UIEvent) {
    this.clickEvent.emit(event);
  }

  render() {
    const classMap = {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true,
      [this.variant]: true,
    };

    return (
      <button class={classMap} disabled={this.disabled} onClick={this.handleClick.bind(this)}>
        {this.label}
      </button>
    );
  }
}
