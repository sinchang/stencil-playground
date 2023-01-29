import { newSpecPage } from '@stencil/core/testing';
import { IhrButton } from '../ihr-button';

describe('ihr-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IhrButton],
      html: `<ihr-button></ihr-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ihr-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ihr-button>
    `);
  });
});
