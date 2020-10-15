const __dirname = Deno.cwd();
const src = __dirname.split("src/")[1] || "";

let html = ``;
let ts = `
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
/*
  THIS FILE IS AUTOGERATED ON ${new Date().toLocaleString()} USING deno_creat_custom_mat_icon.ts
  deno run --allow-read deno_creat_custom_mat_icon.ts
*/
export class RegisterIcons {
  public static registerIcons(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ): void {
`;
let count = 0;
for (const dirEntry of Deno.readDirSync(".")) {
  let { name } = dirEntry;
  if (name.match(/\.svg/gi)) {
    const iconName = name
      .toLowerCase()
      .replace(".svg", "")
      .replace(/[^\dancdefghijklmnopqrstuvwxzy]/gi, "_");
    ts += `matIconRegistry.addSvgIcon('${iconName}', domSanitizer.bypassSecurityTrustResourceUrl('${src}${name}'));`;
    html += `<mat-icon svgIcon="${iconName}"></mat-icon>\n`;
    count++;
  }
}
ts += `
  }
}
`;
if (count === 0) {
  console.log("Found no .svg files.");
} else {
  console.log(`Created code which adds ${count} new custom icons.`);
  console.log("\n----- HTML --------\n");
  console.log(html);
  console.log("\n----- TYPESCRIPT --------\n");
  console.log(ts);
}
