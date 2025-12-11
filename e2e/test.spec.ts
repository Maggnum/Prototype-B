import { test, expect, Page } from "@playwright/test";

const goToHomePage = async (page: Page) =>
  await page.getByRole("link", { name: "Home" }).click();
const goToEmployeePage = async (page: Page) =>
  await page.getByRole("link", { name: "Employees" }).click();
const goToMapPage = async (page: Page) =>
  await page.getByRole("link", { name: "Map" }).click();

test.describe.configure({ mode: "parallel" });

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("home page", () => {
  test("image has loaded", async ({ page }) => {
    await expect(page.getByRole("img", { name: "image" })).toBeVisible();
  });

  test("navbar", async ({ page }) => {
    await goToEmployeePage(page);
    await expect.soft(page).toHaveURL("http://localhost:5173/employees");
    await goToMapPage(page);
    await expect.soft(page).toHaveURL("http://localhost:5173/map");
    await goToHomePage(page);
    await expect(page).toHaveURL("http://localhost:5173/");
  });
});

test.describe("employee page", () => {
  test("all employee cards visible", async ({ page }) => {
    await goToEmployeePage(page);
    await expect(page.locator("div.MuiCard-root img[alt]")).toHaveCount(9);
  });

  test("employee modal", async ({ page }) => {
    await goToEmployeePage(page);
    await page
      .getByRole("button", { name: "Andrew Fuller Andrew Fuller" })
      .click();
    await expect(
      page.getByText(
        "Andrew FullerVice President, Sales📍 Tacoma, USA🎂 2/19/1952mm yes this is the"
      )
    ).toBeVisible();
  });
});

test.describe("map page", () => {
  test("employee marker and popup", async ({ page }) => {
    await goToMapPage(page);
    await page.waitForResponse("**/v1/city/?name=**");

    while (await page.getByRole("button", { name: "Zoom out" }).isEnabled()) {
      await page
        .getByRole("button", { name: "Zoom out" })
        .click({ force: true });
    }

    await page.getByRole("button", { name: "Marker" }).nth(4).click();
    await expect(page.getByText("Steven Buchanan, Michael")).toBeVisible();
  });
});
