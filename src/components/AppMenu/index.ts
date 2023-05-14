import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";

const template = () => html`
  <nav class="wrap-ctx">
    <ul>
      <li><a href="#/">Início</a></li>
      <li><a href="#/">Cases</a></li>
      <li><a href="#/">Objetivo</a></li>
      <li><a href="#/">Orçamento</a></li>
      <li><a href="#/">Sobre</a></li>
    </ul>
  </nav>
`;

export const AppMenu = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-menu,
  .wrap-ctx,
  .wrap-ctx > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
  }

  .wrap-ctx li + li {
    margin-left: 1em
  }

  .wrap-ctx .highlight {
    border-radius: 8px;
    background: var(--amber);
    color: var(--black);
    padding: 1em
  }
`;
