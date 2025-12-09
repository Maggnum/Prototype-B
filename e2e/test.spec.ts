import { test, expect } from "@playwright/test";

test("test employee page and modal", async ({ page }) => {
  await page.goto("http://localhost:5173/");
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

test("test map and employee popup", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("link", { name: "Map" }).click();
  for (let index = 0; index < 15; index++) {
    await page
      .locator("div")
      .nth(2)
      .hover({ position: { x: 100, y: 100 } });
    await page.mouse.down();
    await page
      .locator("div")
      .nth(2)
      .hover({ position: { x: 500, y: 440 } });
    await page.mouse.up();
  }

  await page.getByRole("button", { name: "Marker" }).nth(4).click();
  await expect(page.getByText("Steven Buchanan, Michael")).toBeVisible();
});
