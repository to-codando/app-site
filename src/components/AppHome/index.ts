import { html, css } from "iares";

import { AppHeader } from "@/components/AppHeader";
import { AppArrow } from "@/components/AppArrow";

import { FamTitle, FamTagline, FamImage, FamContainer, FamButton } from "fam-code-ui";

const template = () => html`
  <div class="wrap-ctx">
    <div class="header-ctx">
      <${AppHeader}  />    
    </div>
    <div class="content-ctx">
      <${FamContainer}>
        <slot target="content" ctx="app-home">
          <div class="banner-ctx">
            <div class="message-ctx">
              <${FamTitle}>
                <slot target="content" ctx="app-home">
                  <h1 class="title-ctx">
                    <span>Precisando de um </span>
                    <span>desenvolvedor experiente?</span>
                  </h1>
                </slot>
              </>
              <${FamTagline}>
                <slot target="content" ctx="app-home">
                  <p class="tagline-ctx">
                    <span>Nos últimos dez anos, estive lado a lado com profissionais de excelência, juntos construímos aplicativos, produtos e serviços de muito sucesso.</span>
                    <span>Entre em contato, para juntos fazermos história mais uma vez.</span>
                  </p>
                </slot>
              </>

              <div class="wrap-button-ctx">
                <div class="button-ctx">
                  <${FamButton}>
                    <slot target="content">
                      <span type="primary">
                        <i>Entre em contato</i>
                      </span>
                    </slot>
                  </>
                </div>
              
                <div class="button-ctx">
                  <${FamButton}>
                    <slot target="content">
                      <span type="primary-hole">
                        <i>Veja meus projetos</i>
                      </span>
                    </slot>
                  </>
                </div>     
              </div>       
            </div>

            <div class="image-ctx">
              <${FamImage} src="/assets/images/rodrigo-rocha.png" fallbackSrc="/assets/images/fallback-white.png" />
            </div>   
            
            <div class="arrow-ctx">
              <${AppArrow}  />
            </div>

          </div>
        </slot>
      </>
    </div>
  </div>
`;

export const AppHome = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-home,
  .wrap-ctx,
  .banner-ctx,
  .content-ctx,
  .wrap-button-ctx  {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%
  }

  .wrap-ctx {
    flex-wrap: wrap
  }

  .header-ctx,
  .content-ctx,
  .banner-ctx,
  .message-ctx,
  .tagline-ctx,
  .image-ctx,
  .wrap-button-ctx,
  .button-ctx {
    width: 100%;
  }

  .wrap-button-ctx {
    justify-content: space-between;
    max-width: 450px;
    margin-top: 2em
  }

  .content-ctx {
    background: var(--light-amber);
    border-bottom: 5px #fff solid;
    box-shadow: 3px 3px 3px #503c150d
  }

  .banner-ctx {
    align-items: center;
    position: relative;
    height: calc(100vh - 5em)
  }

  .banner-ctx::before {
    content: url('/assets/images/seta-banner.png');
    width: 220px;
    height: 60px;
    position: absolute; 
    top:8em;
    left:calc(50% + 3em);
    transform: translateX(-50%)
  }

  .title-ctx,
  .tagline-ctx {
    flex-wrap: wrap
  }

  .title-ctx {
    line-height: 0.875em
  }

  .title-ctx span {
    width: 100%
  }

  .title-ctx span:first-of-type {
    font-size: 0.7em;
  }
  .title-ctx span:last-of-type {
    margin-bottom: 0.5em
  }

  .title-ctx span {
    font-family: 'Fugaz One', cursive;
    font-weight: normal;
  }

  .tagline-ctx {
    max-width: 550px
  }

  .tagline-ctx span {
    width: 100%;
  }

  .tagline-ctx span + span {
    margin-top: 1em
  }

  .image-ctx {
    justify-content: space-between;
    width: 100%;
    max-width: 450px;
  }

  .button-ctx + .button-ctx {
    margin-left: 1em
  }

  .arrow-ctx {
    position:absolute;
    bottom: 2em;
    left:50%;
    transform: translate3d(-50%)
  }
`;
