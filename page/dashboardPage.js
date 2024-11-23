export { DashboardPage }
class DashboardPage {
    constructor(page) {
        this.page = page
        this.dashboardHeader = page.locator('.oxd-topbar-header-breadcrumb')
        this.pageURL = ('/dashboard/index')
    }

    async checkDashboardPage() {
        await this.dashboardHeader.waitFor()
        await this.page.url().includes(this.pageURL);
    }
}