import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsManagePermissions } from '../wc-elixir-utils-manage-permissions';

describe('wc-elixir-utils-manage-permissions', () => {
  it('does builds', () => {
    expect(new WcElixirUtilsManagePermissions()).toBeTruthy();
  });

  describe('has props', () => {
    it('has authToken prop', async () => {
      const page = await newSpecPage({
        components: [WcElixirUtilsManagePermissions],
        html: '<div></div>',
      });

      let component = page.doc.createElement('wc-elixir-utils-manage-permissions');
      component.authToken = 'component-demo';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.authToken).toBe('component-demo');
    });

    it('has itemsPerPage prop', async () => {
      const page = await newSpecPage({
        components: [WcElixirUtilsManagePermissions],
        html: '<div></div>',
      });

      let component = page.doc.createElement('wc-elixir-utils-manage-permissions');
      component.authToken = 'component-demo';
      component.itemsPerPage = 10;
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.itemsPerPage).toBe(10);
    });
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsManagePermissions],
      html: '<div></div>',
    });

    let component = page.doc.createElement('wc-elixir-utils-manage-permissions');
    component.authToken = 'component-demo';
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page).toMatchSnapshot();
  });

  it('renders itemPerPage', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsManagePermissions],
      html: '<div></div>',
    });

    let component = page.doc.createElement('wc-elixir-utils-manage-permissions');
    component.authToken = 'component-demo';
    component.itemsPerPage = 10;
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page).toMatchSnapshot();
  });
});
