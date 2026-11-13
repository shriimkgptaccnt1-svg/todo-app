// Copies the app page and its fonts into www/, which Capacitor packages into the APK.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const www = path.join(root, "www");
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, "fonts"), { recursive: true });
fs.copyFileSync(path.join(root, "src", "index.html"), path.join(www, "index.html"));
const fonts = [
  ["@fontsource/figtree", ["figtree-latin-400-normal.woff2", "figtree-latin-500-normal.woff2", "figtree-latin-600-normal.woff2", "figtree-latin-700-normal.woff2"]],
  ["@fontsource/bricolage-grotesque", ["bricolage-grotesque-latin-600-normal.woff2", "bricolage-grotesque-latin-700-normal.woff2"]],
];
for (const [pkg, files] of fonts) {
  for (const f of files) {
    fs.copyFileSync(path.join(root, "node_modules", pkg, "files", f), path.join(www, "fonts", f));
  }
}
console.log("Built www/");
