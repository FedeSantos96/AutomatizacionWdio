const { loginUser } = require('../../funciones');
describe('My Login application', () => {
    it('should create a new request', async () => {
        await loginUser();
        await browser.url(`https://www.adminprop.net/Propietario/Pedido-De-Trabajo.aspx`);
        await $('#ctl00_ContentPlaceHolder1_lblTituloSolicitud').click();
        await $('button[data-id="ctl00_ContentPlaceHolder1_DropDownListTipo"]').waitForClickable({ timeout: 200 });
        await $('button[data-id="ctl00_ContentPlaceHolder1_DropDownListTipo"]').click();
        await $('#bs-select-3-3').waitForClickable({ timeout: 2000 });
        await $('#bs-select-3-3').click();
        await $('#ctl00_ContentPlaceHolder1_txtDescripcion').setValue("descripcion de preuba");
       

    });
    it('should create a new request with error', async () => {
    //    await loginUser();
        await browser.url(`https://www.adminprop.net/Propietario/Pedido-De-Trabajo.aspx`);
        await $('#ctl00_ContentPlaceHolder1_lblTituloSolicitud').click();
        await $('#ctl00_ContentPlaceHolder1_btnCrearSolicitud').waitForClickable({ timeout: 200 });
        await $('#ctl00_ContentPlaceHolder1_btnCrearSolicitud').click();
        setTimeout(async () => {
            await expect($('#ctl00_ContentPlaceHolder1_RequiredFieldValidator4')).toHaveTextContaining("Ingrese una descripción del trabajo a realizar.");
        }, 2000)

    });

});

