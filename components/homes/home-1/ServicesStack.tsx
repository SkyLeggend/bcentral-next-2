import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";

export default function ServicesStack() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper in-content-stack">
              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/contact`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Social Media</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                 {/* <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      UI/UX
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Web design
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Packaging
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Motion
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      3D models
                    </span>
                  </div> */}
                  <p className="t-small-mobile t-opposite">
                  Impulsa tu marca en redes sociales con contenido estratégico, 
                  visualmente atractivo y diseñado para conectar con tu audiencia y analizamos 
                  resultados para optimizar tu presencia digital. Con Social Media, 
                  convertimos tus redes en un motor real de alcance, engagement y 
                  crecimiento para tu negocio.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/hero/social-media-bcentral-1.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/hero/social-media-bcentral-1.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/contact`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Relaciones
                    <br />
                    Públicas
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                 {/* <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Frontend
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Interactions
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Backend
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Mobile Apps
                    </span>
                  </div>*/}
                  <p className="t-small-mobile t-opposite">
                  Fortalece la reputación de tu marca con estrategias de Relaciones Públicas 
                  que generen credibilidad, visibilidad y confianza. Gestionamos tu presencia en medios, 
                  desarrollamos comunicados efectivos y creamos oportunidades de exposición positiva. 
      
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/hero/rela-publi-100x100.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/hero/rela-publi-100x100.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/contact`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Influencer 
                    <br />
                    marketing
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  {/*<div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Brand strategy
                    </span>
                    <span className="tag tag-default tag-outline">
                      Logo design
                    </span>
                    <span className="tag tag-default tag-outline">
                      Guidelines
                    </span>
                    <span className="tag tag-default tag-outline">
                      Rebranding
                    </span>
                  </div>*/}
                  <p className="t-small-mobile">
                  Potencia el alcance de tu marca colaborando con influencers 
                  que realmente conectan con tu audiencia. Gestionamos todo el proceso: 
                  selección estratégica de creadores, negociación, coordinación de campañas, 
                  desarrollo de contenidos y análisis de resultados. Creamos alianzas 
                  auténticas que generan confianza, aumentan la visibilidad y convierten 
                  el impacto social en resultados medibles para tu negocio.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/hero/influencer-mark-100-100.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/hero/influencer-mark-100-100.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/contact`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Desarrollo 
                    <br />
                    Web
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  {/*<div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Strategy
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Social media
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      SEO
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Optimization
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Campaigns
                    </span>
                  </div>*/}
                  <p className="t-small-mobile t-opposite">
                  Creamos sitios web, diseñamos experiencias 
                  digitales a la medida de tu marca, optimizadas para SEO, 
                  móviles y con alto rendimiento. Desde landing pages hasta plataformas 
                  completas, desarrollamos soluciones seguras, escalables y 
                  preparadas para crecer con tu negocio. Tu web es más que 
                  una página: es tu presentación al mundo digital.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    alt="Service/Feature Image"
                    src="/img/hero/desa-web-1000.webp"
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    alt="Service/Feature Image"
                    src="/img/hero/desa-web-1000.webp"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
