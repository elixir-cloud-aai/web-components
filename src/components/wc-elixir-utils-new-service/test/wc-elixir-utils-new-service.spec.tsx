import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsNewService } from '../wc-elixir-utils-new-service';

describe('wc-elixir-utils-manage-permissions', () => {
  it('does builds', () => {
    expect(new WcElixirUtilsNewService()).toBeTruthy();
  });

  describe('has props', () => {
    it('has authToken prop', async () => {
      const page = await newSpecPage({
        components: [WcElixirUtilsNewService],
        html: '<div></div>',
      });

      let component = page.doc.createElement('wc-elixir-utils-new-service');
      component.authToken = 'component-demo';
      page.root.appendChild(component);
      await page.waitForChanges();

      expect(page.rootInstance.authToken).toBe('component-demo');
    });

    // it('has itemsPerPage prop', async () => {
    //   const page = await newSpecPage({
    //     components: [WcElixirUtilsNewService],
    //     html: '<div></div>',
    //   });

    //   let component = page.doc.createElement('wc-elixir-utils-new-service');
    //   component.authToken = 'component-demo';
    //   component.itemsPerPage = 10;
    //   page.root.appendChild(component);
    //   await page.waitForChanges();

    //   expect(page.rootInstance.itemsPerPage).toBe(10);
    // });
  });

  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsNewService],
      html: '<div></div>',
    });

    let component = page.doc.createElement('wc-elixir-utils-new-service');
    component.authToken = 'component-demo';
    page.root.appendChild(component);
    await page.waitForChanges();

    expect(page).toMatchSnapshot();
  });
});
