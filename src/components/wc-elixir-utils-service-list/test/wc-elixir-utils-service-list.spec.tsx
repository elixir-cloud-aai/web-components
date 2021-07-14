import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsServiceList } from '../wc-elixir-utils-service-list';

describe('wc-elixir-utils-service-list', () => {
  it('does builds', () => {
    expect(new WcElixirUtilsServiceList()).toBeTruthy();
  });

  describe('has props', () => {
    it('has authToken prop', async () => {
      const page = await newSpecPage({
        components: [WcElixirUtilsServiceList],
        html: '<div></div>',
      });

      let component = page.doc.createElement('wc-elixir-utils-service-list');
      component.authToken = 'component-demo';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.authToken).toBe('component-demo');
    });

    it('has itemsPerPage prop', async () => {
      const page = await newSpecPage({
        components: [WcElixirUtilsServiceList],
        html: '<div></div>',
      });

      let component = page.doc.createElement('wc-elixir-utils-service-list');
      component.authToken = 'component-demo';
      component.itemsPerPage = 10;
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.itemsPerPage).toBe(10);
    });
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsServiceList],
      html: '<div></div>',
    });

    let component = page.doc.createElement('wc-elixir-utils-service-list');
    component.authToken = 'component-demo';
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page).toMatchSnapshot();
  });

  it('renders itemPerPage', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsServiceList],
      html: '<div></div>',
    });

    let component = page.doc.createElement('wc-elixir-utils-service-list');
    component.authToken = 'component-demo';
    component.itemsPerPage = 10;
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page).toMatchSnapshot();
  });
});
