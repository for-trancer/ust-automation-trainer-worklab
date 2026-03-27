import { defineConfig,devices }  from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    timeout: 90000,
});