import { newE2EPage } from '@stencil/core/testing';

describe('ihr-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ihr-button></ihr-button>');

    const element = await page.find('ihr-button');
    expect(element).toHaveClass('hydrated');
  });
});
