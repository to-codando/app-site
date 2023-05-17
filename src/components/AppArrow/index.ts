import { html, css } from "iares";
import { FamIcon } from "fam-code-ui";

const template = () => html`
  <div class="wrap-ctx">
    <a href="#/" class="floating-ctx">
      <${FamIcon}  name="keyboard_double_arrow_down" size="2" />
    </a>
  </div>
`;

export const AppArrow = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-menu,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
  }

  .floating-ctx { 
      animation-name: floating-ctx ;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
      border-radius: 20px;
      border: 2px var(--gray) solid;
      width: 32px;
      height: 40px;
  }
 
  @keyframes floating-ctx {
      0% { transform: translate(0,  0px); }
      50%  { transform: translate(0, 15px); }
      100%   { transform: translate(0, -0px); }   
  }
`;
