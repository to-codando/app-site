import { breakpoints } from "@/utils/mediaQuery";
import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";
import { AppArrow } from "@/components/AppArrow";

import { FamTitle, FamTagline, FamImage, FamContainer, FamButton } from "fam-code-ui";

const template = () => html`
  <div class="wrap-ctx">

    <div class="content-ctx">
      <${FamContainer}>
        <slot target="content" ctx="app-about">
          <h1>about</h1>
        </slot>
      </>
    </div>
    
  </div>
`;

export const AppAbout = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-home,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%
  }

  .wrap-ctx {
    flex-wrap: wrap
  }

  

  
`;
