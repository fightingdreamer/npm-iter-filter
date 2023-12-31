import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/iter/filter.ts"),
      name: "@fightingdreamer/iter-filter",
      formats: ["es", "cjs"],
      fileName: "iter-filter",
    },
  },
});
