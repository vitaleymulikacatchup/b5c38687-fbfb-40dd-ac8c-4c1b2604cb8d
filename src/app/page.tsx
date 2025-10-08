"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import BaseAbout from '@/components/sections/layouts/about/BaseAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';
import { Globe, DollarSign, Users } from 'lucide-react';

const theme: SiteTheme = { styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" };

export default function Page() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <FooterLogo 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759921218798-0059bc18.jpg"
          logoAlt="MemePulse logo"
          logoText="MemePulse"
          className="footer"
          svgClassName="footer-svg"
        />
      </div>
      <div id="hero" data-section="hero">
        <VoidHero 
          title="MemePulse"
          description="Join the community for an exciting memecoin journey!"
          tagLabel="The future of fun and transparency"
          primaryButtonText="Buy MemePulse Now"
          secondaryButtonText="How It Works"
        />
      </div>
      <div id="about" data-section="about">
        <BaseAbout 
          title="About MemePulse"
          descriptions={['A lively memecoin aiming to revolutionize the crypto space.', 'Join us for playful community-driven projects.', 'Get involved and make a difference!']}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D 
          steps={[
            { position: 'left', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759921213670-3f9e344e.jpg', title: 'Step 1', description: 'Join the MemePulse community.' },
            { position: 'center', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759921215747-616e9613.jpg', title: 'Step 2', description: 'Connect your crypto wallet.' },
            { position: 'right', image: 'https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/a-flat-cartoon-portrait-of-an-anthropomo-1759921217238-54df1f63.jpg', title: 'Step 3', description: 'Start trading MemePulse!' },
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <BigNumberTokenomics 
          title="MemePulse Tokenomics"
          description="Discover the key stats behind MemePulse."
          kpiItems={[
            { value: '100M', description: 'Total Supply', longDescription: 'The total amount of MemePulse tokens that will ever exist.', icon: Globe },
            { value: '50K', description: 'Active Holders', longDescription: 'Number of wallets holding MemePulse.', icon: Users },
            { value: '5%', description: 'Transaction Fee', longDescription: 'Fee for each transaction to support the ecosystem.', icon: DollarSign }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo 
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759921218798-0059bc18.jpg"
          logoAlt="MemePulse logo"
          logoText="MemePulse"
          className="footer"
          svgClassName="footer-svg"
        />
      </div>
    </SiteThemeProvider>
  );
}