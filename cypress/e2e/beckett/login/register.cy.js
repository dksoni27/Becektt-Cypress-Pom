import Registration from "../../../pages/Registration";

describe('User Registration - Valid Details', () => {

    const registerPage = new Registration()

    it('should register a user with valid required details', () => {

        cy.generatePlusEmail('devendras', 'beckett.com').then((email) => {
            const uniqueUser = `testuser_${Date.now()}`

            registerPage.visit()

            registerPage.registerUser({
                email: email,
                username: uniqueUser,
                password: 'sTRONGPASS@1234'
            })
        });
    });

});
