import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
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
    min-width:100vw;
    min-height: 100vh
  }
`;
