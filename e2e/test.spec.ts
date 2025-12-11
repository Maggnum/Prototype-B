import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

test.beforeAll(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("home page", () => {
  test("image has loaded", async ({ page }) => {
    await expect(page.getByRole("img", { name: "image" })).toBeVisible();
  });

  test("navbar", async ({ page }) => {
    await page.getByRole("link", { name: "Employees" }).click();
    await expect.soft(page).toHaveURL("http://localhost:5173/employees");
    await page.getByRole("link", { name: "Map" }).click();
    await expect.soft(page).toHaveURL("http://localhost:5173/map");
    await page.getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("http://localhost:5173/");
  });
});

test.describe("employee page", () => {
  test("all employee cards visible", async ({ page }) => {
    await page.getByRole("link", { name: "Employees" }).click();
    await expect(page.locator("div.MuiCard-root img[alt]")).toHaveCount(9);
  });

  test("employee modal", async ({ page }) => {
    await page.getByRole("link", { name: "Employees" }).click();
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
    await page.getByRole("link", { name: "Map" }).click();
    for (let index = 0; index < 20; index++) {
      await page.getByRole("button", { name: "Zoom out" }).click();
    }

    await page.getByRole("button", { name: "Marker" }).nth(4).click();
    await expect(page.getByText("Steven Buchanan, Michael")).toBeVisible();
  });
});
