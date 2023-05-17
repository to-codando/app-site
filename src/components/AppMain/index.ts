import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";

const template = () => html`
  <div class="wrap-ctx">
  <div class="header-ctx">
    <${AppHeader}  />    
  </div>  
    <router-view></router-view>
  </div>
`;

export const AppMain = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap:wrap;
    width:100vw;
  }

    .header-ctx {
      width: 100%
    }
`;
