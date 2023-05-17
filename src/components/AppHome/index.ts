import { breakpoints } from "@/utils/mediaQuery";
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
            <div class="wrap-arrow-ctx">
              <${FamImage} src="/assets/images/seta-banner.png" fallbackSrc="/assets/images/fallback-white.png" />
            </div>
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
                    <span>Nos últimos dez anos construí sites, aplicativos e e-commerces que superaram as expectativas dos meus clientes.</span>
                    <span>Veja por sim mesmo acessando o portfólio abaixo.</span>
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
    padding: 1em;
  }

  .banner-ctx .wrap-arrow-ctx {
    width: 180px;
    height: 60px;
    position: absolute; 
    top:4em;
    left:calc(50% + 3em);
    transform: translateX(-50%);
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
    grid-area: image;
    margin-top: 2em
  }

  .message-ctx {
    grid-area: message
  }

  .button-ctx + .button-ctx {
    margin-left: 1em
  }

    .arrow-ctx {
      align-items: center;
      justify-content:center;
      width: 3em;
      height:3em;
      bottom: 2em;
      transform: translateX(-50%);
      position:absolute;
      left:50%;
      bottom:-1em;
    }

  @media all and (min-width: ${breakpoints.xl}) {
    .content-ctx {
      min-height: calc(100vh - 5em);
      align-items: center
    }
  }

  @media all and (max-width: ${breakpoints.xl}) {

    .banner-ctx  {
      max-width: 75em;
      grid-template-columns: 1fr 420px;
      grid-template-areas: 'message image';
      margin:0 auto;
      font-size: .875em;
    }

    .banner-ctx .wrap-arrow-ctx {
      top: 4em
    }  
    
    .image-ctx {
      margin-top: 2em
    }

    .arrow-ctx {display: none}
  }

  @media all and (max-width: ${breakpoints.lg}) {

    .banner-ctx  {
      font-size: .875em;
    }    

    .banner-ctx  {
      max-width: 62em;
      grid-template-columns: 1fr 380px;
      grid-template-areas: 'message image';
      margin:0 auto;
    }

    .banner-ctx .wrap-arrow-ctx {
      width: 140px;
      top: 2em;
      left: 50%;
    }
    
    .banner-ctx .title-ctx {
      font-size: 3em
    }

  }

  @media all and (max-width: ${breakpoints.md}) {

    .banner-ctx  {
      max-width: 24em;
      height: calc(100vh + 5em);
      grid-template-columns: 1fr;
      grid-template-areas: 
      'image'
      'message';
      margin:0 auto;
      font-size: 0.9em;
    }

    .banner-ctx .wrap-arrow-ctx {
      top: 24em;
      left:-6em;
      transform: rotate(-76deg);
      width: 180px;
    }

    .banner-ctx .message-ctx{
      top: -2em;
      position:relative;
      font-size: .875em;
    }

    .banner-ctx .title-ctx {
      text-align:center;
      font-size: 3.8em
    }

    .banner-ctx .image-ctx{
      max-width:380px;
      margin:1em auto 1em auto;
    }

    .banner-ctx .tagline-ctx {
      font-size: 1.4em;
      max-width: 26em;
      text-align:center;
      margin:0 auto
    }

    .wrap-button-ctx {
      max-width: 24em;
      margin:1em auto 0 auto;
      font-size: 1.3em;
    }

    .arrow-ctx {
      display:none
    }

  }

  @media all and (max-width: ${breakpoints.sm}) {



    .banner-ctx .wrap-arrow-ctx {
      font-size: 2em;
      top: 11em;
      left: -1em;
      transform: rotate(-68deg);
      width: 140px
    }   
    
    .banner-ctx .message-ctx {
      font-size: .875em;
      top: -3em;
    }

    .banner-ctx .image-ctx{
      max-width:280px;
      margin:1em auto 2em auto;
    }    

    .banner-ctx .tagline-ctx {
      max-width: 18em
    }  
    
    .banner-ctx .wrap-button-ctx {
      flex-wrap: wrap
    }

    .wrap-button-ctx .button-ctx + .button-ctx {
      margin: 1em 0 0 0
    }

  }  

  
`;
