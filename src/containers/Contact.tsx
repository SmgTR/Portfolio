import { FC, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { SectionTitle } from '@/src/styled/components/ui/SectionTitle';
import { ContactWrapper } from '../styled/containers/ContactWrapper';
import { ContactLink } from '../styled/components/ui/ContactLink';
import { ContactSubTitle } from '../styled/components/contact/ContactSubTitle';
import { ContactTitleWrapper } from '../styled/components/contact/ContactTitleWrapper';
import { SocialLinkWrapper } from '../styled/components/contact/SocialLinkWrapper';

gsap.registerPlugin(ScrollTrigger);

const Contact: FC = ({}) => {
  useEffect(() => {
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-project-page',
        start: '0%',
        end: '100%',
        scrub: true
      }
    });
  }, []);

  return (
    <ContactWrapper className="contact-page">
      <ContactTitleWrapper>
        <ContactSubTitle>Have any questions?</ContactSubTitle>
        <SectionTitle dark smallMargin>
          Contact me
        </SectionTitle>
      </ContactTitleWrapper>

      <div className="contact">
        <ContactLink href="tel:531409688">
          <i className="fa-solid fa-mobile-screen-button"></i>
          +48 531 409 688
        </ContactLink>
        <ContactLink href="mailto: tomaszrusnakjs@gmail.com">
          <i className="fa-regular fa-envelope"></i>
          tomaszrusnakjs@gmail.com
        </ContactLink>
      </div>
      <SocialLinkWrapper>
        <a
          href="https://linkedin.com/in/tomasz-rusnak"
          target="_blank"
          rel="noreferrer noopener"
          className="mouseHover circle"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/SmgTR"
          target="_blank"
          rel="noreferrer noopener"
          className="mouseHover circle"
          title="Github"
        >
          <i className="fa-brands fa-github-alt"></i>
        </a>
      </SocialLinkWrapper>
    </ContactWrapper>
  );
};

export default Contact;
