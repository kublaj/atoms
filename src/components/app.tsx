import {Component} from '@stencil/core';

@Component({
  tag: 'blaze-app'
})

export class App {

  render() {
    const alerts = ['default', 'brand', 'info', 'warning', 'success', 'error'];

    return (
      <div>
        <blaze-address>
          <blaze-address-heading>
            The Simpsons
          </blaze-address-heading>
          742 Evergreen Terrace,<br/>
          Springfield,<br/>
          80085,<br/>
          USA
        </blaze-address>

        {
          alerts.map((alert) =>
            <blaze-alert type={alert}>
              {alert}
            </blaze-alert>
          )
        }
      </div>
    );
  }
}