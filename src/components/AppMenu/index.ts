import { html, css, createState } from "iares";

import { FamIcon } from "fam-code-ui";

import { breakpoints } from "@/utils/mediaQuery";

const showMenu = () => {
  const menu = document.querySelector('#navMenu')
  menu?.classList.toggle('show-nav')
}

const template = () => html`
  <nav class="wrap-ctx" id="navMenu">
    <div class="button-ctx" onClick=${showMenu}>
      <${FamIcon} name="menu" size="1" />
    </div>
    <ul>
      <li><a href="#/">Início</a></li>
      <li><a href="#/">Portifólio</a></li>
      <li><a href="#/">Sobre</a></li>
      <li><a href="#/">Currículo</a></li>
      <li class="highlight"><a href="#/">Contato</a></li>
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

  .button-ctx {
    overflow: hidden;
    height:0;
    width:0;
    opacity:0;
    cursor: pointer;
  }

  @media all and (min-width: ${breakpoints.md}) {
    .wrap-ctx .highlight {
      border-radius: 8px;
      background: var(--amber);
      color: var(--black);
      padding: 1em
    }    
  }


  @media all and (max-width: ${breakpoints.md}) {
    .wrap-ctx {
      position: relative
    }    

    .wrap-ctx::before {
      content: '';

      width: 100%;
      height: 100%;

      position: fixed;
      top: 0;
      right: -100%;
      bottom:0;

      z-index: 999;
      background: rgba(0, 0, 0, 0.3)      ;

      transition: all 0.5s;
    }

    .button-ctx {
      display:flex;
      opacity: 1;
      width: 1.4em;
      height: 1.4em;
      padding-top: 5px;
      justify-content: center;
      overflow: hidden;
      position: fixed;
      top: 1.5em;
      right:1em;
      
      transform: translateY(-50%);
      z-index: 1001;      

      background: #fff;
      box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      font-size: 1.2em   
    }    

    .button-ctx fam-icon span {
      color: var(--gray)
    }

    .wrap-ctx ul {
      flex-wrap: wrap;
      justify-content: flex-start;
      flex-direction: column;

      max-width: 320px;

      position: fixed;
      top: 0;
      right: -420px;
      bottom:0;

      z-index: 1000;
      background: #fff;
      box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.2);

      transition: all 0.3s;
    }

    .wrap-ctx li {
      width: 100%;
      padding: 1em
    }
    .wrap-ctx li + li {
      margin-left: 0
    }

    .wrap-ctx li:first-of-type {
      margin-top: 3.7em;
      border-top: 1px #ebebeb solid
    }

    .wrap-ctx.show-nav ul {
      right:0;
    }
    .wrap-ctx.show-nav::before  {
      right:0;
    }
  }




`;
