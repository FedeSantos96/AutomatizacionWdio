const userCrendencial = require('../../credential');
describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
        await browser.url(`https://www.adminprop.net/Login.aspx`);

        await $('#LoginView1_Login1_UserName').setValue(userCrendencial.invalidUser.user);
        await $('#LoginView1_Login1_Password').setValue(userCrendencial.invalidUser.pass);
        await $('input[type="submit"]').click();

        await expect($('.message')).toBeExisting();
        await expect($('.message')).toHaveTextContaining('Su intento para conectarse no tuvo éxito. Por favor, inténtelo de nuevo.');
    });

    it('should login with valid credentials', async () => {
        await browser.url(`https://www.adminprop.net/Login.aspx`);

        await $('#LoginView1_Login1_UserName').setValue(userCrendencial.validUser.user);
        await $('#LoginView1_Login1_Password').setValue(userCrendencial.validUser.pass);
        await $('input[type="submit"]').click();

        await expect($('#ctl00_LoginName1')).toBeExisting();
        setTimeout(async () => {
            await expect($('#ctl00_LoginName1')).toHaveTextContaining(userCrendencial.validUser.user);
        }, 2000)
    });
});

