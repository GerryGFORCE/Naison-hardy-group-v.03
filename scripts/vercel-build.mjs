import { execSync } from "node:child_process";
import { cpSync, mkdirSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

console.log("Building TanStack Start...");
execSync("vite build", { stdio: "inherit", cwd: root });

console.log("Creating Vercel Build Output...");
const outputDir = resolve(root, ".vercel/output");
if (existsSync(outputDir)) rmSync(outputDir, { recursive: true });
mkdirSync(resolve(outputDir, "static"), { recursive: true });

// Copy static client assets
cpSync(resolve(root, "dist/client"), resolve(outputDir, "static"), {
  recursive: true,
});

// Bundle server + all dependencies, with splitting so dynamic imports work
await build({
  entryPoints: [resolve(root, "scripts/vercel-handler.mjs")],
  bundle: true,
  outdir: resolve(outputDir, "functions/render.func"),
  format: "esm",
  platform: "node",
  target: "node20",
  external: ["node:*"],
  banner: {
    js: 'import { createRequire as __createRequire__ } from "node:module"; var require = __createRequire__(import.meta.url);',
  },
  splitting: true,
  chunkNames: "chunks/[hash]",
  entryNames: "index",
  outExtension: { ".js": ".mjs" },
  minify: false,
});

// Vercel function config
writeFileSync(
  resolve(outputDir, "functions/render.func/.vc-config.json"),
  JSON.stringify({ runtime: "nodejs20.x", handler: "index.mjs", maxDuration: 30 }, null, 2),
);

// Vercel output routing config
writeFileSync(
  resolve(outputDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/render" },
      ],
    },
    null,
    2,
  ),
);

console.log("✓ Vercel output ready at .vercel/output/");
