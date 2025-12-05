import BackgroundParallax from "@/components/animation/BackgroundParallax";
import Approch from "@/components/common/Approch";
import Awards from "@/components/common/Awards";
import Blogs from "@/components/common/Blogs";
import Cta from "@/components/common/Cta";
import Facts from "@/components/common/Facts";
import MarqueeSlider from "@/components/common/MarqueeSlider";
import Footer2 from "@/components/footers/Footer2";
import HeroMarketingDigital from "@/components/other-pages/about/HeroMarketingDigital";
import MarqueeSlider2 from "@/components/other-pages/about/MarqueeSlider2";
import Team from "@/components/other-pages/about/Team";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Bcentral",
  description:
    "Rayo - Digital Agency & Personal Portfolio React Nextjs Template",
};
export default function AboutUsPage() {
  return (
    <>
      <main
        id="mxd-page-content"
        className="mxd-page-content inner-page-content"
      >
        <HeroMarketingDigital />
        <MarqueeSlider2 />
        <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <BackgroundParallax className="mxd-divider__image divider-image-8 parallax-img" />
            </div>
          </div>
        </div>
       {/*} <Awards /> {*/}
        <MarqueeSlider />
        <Team />
        <Facts />
        <Approch />
       {/*} <div className="mxd-section padding-pre-title">
          <div className="mxd-container">
            <div className="mxd-divider">
              <BackgroundParallax className="mxd-divider__image divider-image-9 parallax-img" />
            </div>
          </div>
        </div>{*/}
       {/*} <Blogs />{*/}
        <Cta />
      </main>
      <Footer2 />
    </>
  );
}
