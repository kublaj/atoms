import {Component, Event, EventEmitter, Method, Prop, State} from '@stencil/core';

@Component({
  tag: 'blaze-alert'
})

export class Alert {

  @Prop() type: string;
  @Event() alertClosed: EventEmitter;

  @State() open: boolean = true;

  @Method()
  close() {
    this.alertClosed.emit(this);
    this.open = false;
  }

  render() {
    return (
      this.open &&
      <div class={`c-text c-alert c-alert--${this.type}`}>
        <button class="c-button c-button--close" onClick={() => this.close()}>
          &times;
        </button>
        <slot/>
      </div>
    );
  }
}
