import { html, css } from "iares";

import { FamContainer } from "fam-code-ui";
import { AppMenu } from "@/components/AppMenu";

const template = () => html`
  <header class="wrap-ctx">
    <${FamContainer}>
      <slot target="content" ctx="app-header">
        <div class="menu-ctx">
          <${AppMenu}  />
        </div>
      </slot>
    </>
  </header>
`;

export const AppHeader = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-header {
    box-shadow: 3px 3px 3px #503c150d;
    position: relative
  }

  app-header,
  .wrap-ctx,
  .menu-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width:100%    
  }

  .wrap-ctx {
    min-height: 5em;
    background: #fff;
  }

  .menu-ctx {
    justify-content: center
  }

`;
