// @ts-check
const { test, expect } = require('@playwright/test')

import { LoginPage } from '../page/loginPage.js'
import { DashboardPage } from '../page/dashboardPage.js'

test.beforeEach(async ({page}) => {
    await page.goto('/')
})

test.describe('Login Scenarios', () => {
    test('Successful Login', async ({ page }) => {
        const login = new LoginPage(page)
        const dashboard = new DashboardPage(page)
        
        await login.navigateLoginPage
        await login.loginWithUser()
        await dashboard.checkDashboardPage() 
    })
    
    test('Fail Login', async ({ page }) => {
        const login = new LoginPage(page)
        
        await login.navigateLoginPage
        await login.loginWrongCredentials()
    })

    test('No Credentials', async ({ page }) => {
        const login = new LoginPage(page)
        
        await login.navigateLoginPage
        await login.loginNoCredentials()
    })

})
