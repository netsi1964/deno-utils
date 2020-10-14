const __dirname = Deno.cwd();
const src = __dirname.split('src/')[1]

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
for (const dirEntry of Deno.readDirSync(".")) {
  let { name } = dirEntry;
  if (name.match(/\.svg/ig)) {
      name = name.toLowerCase().replace(/[^\dancdefghijklmnopqrstuvwxzy]/ig,'_');
      ts += `matIconRegistry.addSvgIcon(
      '${name.replace("_svg", "")}',
      domSanitizer.bypassSecurityTrustResourceUrl(
        '${src}/${name}'
      )
    );
`;
  }
}
ts += `
  }
}
`
console.log(ts);
