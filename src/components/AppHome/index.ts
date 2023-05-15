import { breakpoints } from '@/utils/mediaQuery';
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
    box-shadow: 3px 3px 3px #503c150d;
    padding: 0 1em
  }

  .banner-ctx {
    display: grid;
    grid-template-columns: 1fr 450px;
    grid-template-rows: 1fr;
    grid-template-areas: 'message image';
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
    grid-area: image
  }

  .message-ctx {
    grid-area: message
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

  @media all and (max-width: ${breakpoints.xl}) {

    .banner-ctx  {
      max-width: 75em;
      grid-template-columns: 1fr 420px;
      grid-template-areas: 'message image';
      margin:0 auto
    }

    .banner-ctx::before {
      top: 3em
    }

    .banner-ctx .message-ctx{
      font-size: .875em
    }

  }

  @media all and (max-width: ${breakpoints.lg}) {

    .banner-ctx  {
      max-width: 62em;
      grid-template-columns: 1fr 380px;
      grid-template-areas: 'message image';
      margin:0 auto;
    }

    .banner-ctx::before {
      top: 4em
    }

    .banner-ctx .message-ctx{
      font-size: .75em
    }

  }

  @media all and (max-width: ${breakpoints.md}) {

    .banner-ctx  {
      max-width: 24em;
      height: 100vh;
      grid-template-columns: 1fr;
      grid-template-areas: 
      'image'
      'message';
      margin:0 auto;

    }

    .banner-ctx::before {
      top: 10em;
      left:-2em;
      transform: rotate(-60deg)
    }

    .banner-ctx .message-ctx{
      font-size: 0.875em;
      top: -2em;
      position:relative
    }

    .banner-ctx .title-ctx {
      text-align:center;
      font-size: 3em;
    }

    .banner-ctx .image-ctx{
      max-width:280px;
      margin:0 auto;
    }

    .banner-ctx .tagline-ctx {
      font-size: 1em;
      max-width: 26em;
      text-align:center;
      margin:0 auto
    }

    .wrap-button-ctx {
      max-width: 24em;
      margin:1em auto 0 auto;
      font-size: .875em;
    }

    .arrow-ctx {
      display:none
    }

  }

  @media all and (max-width: ${breakpoints.sm}) {

    .banner-ctx .title-ctx {
      font-size: 2.5em;
    }    

    .banner-ctx::before {
      font-size: 2em;
      top: 6em;
      left: -2em;
      transform: rotate(-76deg);
    }   
    
    .banner-ctx .message-ctx {
      font-size: .75em;
      top: -3em;
    }

  }  

  
`;
