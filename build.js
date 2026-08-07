const esbuild = require("esbuild");

esbuild.build({
    entryPoints: ["resolver.js"],
    bundle: true,
    format: "esm",
    outfile: "dist/resolver.js"
}).catch(() => process.exit(1));
