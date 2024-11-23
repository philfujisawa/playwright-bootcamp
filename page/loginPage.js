export { LoginPage }
class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameField = page.getByRole('textbox', { name: 'username' })
        this.passwordField = page.getByRole('textbox', { name : 'password' })
        this.loginButton = page.getByRole('button', { name: "Login" })
        this.errorMessage = page.locator('.oxd-alert-content-text')
        this.noUsername = page.locator('.oxd-input-field-error-message').nth(0)
        this.noPassword = page.locator('.oxd-input-field-error-message').nth(1)
    }

    async navigateLoginPage() {
        await this.page.goto('/auth/login')
    }

    async loginWithUser() {
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('admin123')
        await this.loginButton.click()
    }

    async loginWrongCredentials() {
        await this.usernameField.fill('Admin')
        await this.passwordField.fill('123456')
        await this.loginButton.click()
        await this.errorMessage.waitFor()
    }

    async loginNoCredentials() {
        await this.loginButton.click()
        await Promise.any([
            this.noUsername.waitFor(),
            this.noPassword.waitFor()
        ])
    }
}