import { html, render } from "iares";
import { TRoute } from "iares";

import { AppDefault } from "@/components/AppDefault";
import { AppHome } from "@/components/AppHome";
import { AppAbout } from "@/components/AppAbout";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppHome} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/sobre$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppAbout} />`, context);
    },
  },
];
