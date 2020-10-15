# deno_creat_custom_mat_icon.ts

## Description

Create angular typescript class which adds custom material design icons from the `.svg` files in the folder you run the command from. The code is just logged to the terminal.

## Use

`deno run --allow-read https://raw.githubusercontent.com/netsi1964/deno-utils/main/angular/deno_creat_custom_mat_icon.ts`

## Example output

```
Created code which adds 1 new custom icons.

----- HTML --------

<mat-icon svgIcon="deno"></mat-icon>


----- TYPESCRIPT --------


import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
/*
  THIS FILE IS AUTOGERATED ON Thu Oct 15 2020 09:54:35 GMT+0200 (CEST) USING deno_creat_custom_mat_icon.ts
  deno run --allow-read deno_creat_custom_mat_icon.ts
*/
export class RegisterIcons {
  public static registerIcons(
    matIconRegistry: MatIconRegistry,
    domSanitizer: DomSanitizer
  ): void {
matIconRegistry.addSvgIcon('deno', domSanitizer.bypassSecurityTrustResourceUrl('undefined/deno')
  }
}
```

In your `app.component.ts` you can use this code to get your custom mat-icons inside your app:

```
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
...
constructor(private matIconRegistry: MatIconRegistry,
            private domSanitizer: DomSanitizer) {
  RegisterIcons.registerIcons(matIconRegistry,domSanitizer)
}
```

You can see it used on [stackblits.com](https://stackblitz.com/edit/angular-fkpoqb?file=src/main.ts)

Included svg deno logo found at [Deno-Logo](https://github.com/Kirlovon/Deno-Logo)

### Created by [netsi1964](https://twitter.com/netsi1964)
