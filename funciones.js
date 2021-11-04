const userCrendencial = require('./credential');
const loginUser = async () => {
    await browser.url(`https://www.adminprop.net/Login.aspx`);

    await $('#LoginView1_Login1_UserName').setValue(userCrendencial.validUser.user);
    await $('#LoginView1_Login1_Password').setValue(userCrendencial.validUser.pass);
    await $('input[type="submit"]').click();
    $('#ctl00_LoginName1').waitForExist({ timeout: 5000 });
}
module.exports = {
    loginUser
}