import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
    test('Landing Page - Desktop', async ({ page }) => {
        await page.goto('/');
        // Wait for the animation to finish
        await page.waitForTimeout(6000);
        await expect(page).toHaveScreenshot('landing-page-desktop.png', {
            fullPage: true,
            maxDiffPixelRatio: 0.1, // Allow 10% diff for GSAP floating
        });
    });

    test('Story Page - Desktoppy', async ({ page }) => {
        await page.goto('/story');
        await page.waitForTimeout(3000);
        await expect(page).toHaveScreenshot('story-page-desktop.png', {
            fullPage: true,
            maxDiffPixelRatio: 0.1,
        });
    });
});
