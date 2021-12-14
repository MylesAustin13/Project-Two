import React from 'react';
 import {
   FaFacebook,
   FaInstagram,
   FaYoutube,
   FaTwitter,
   FaLinkedin
 } from 'react-icons/fa'; 
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <div className="fixed-bottom">
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>O-Donutz</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='/meta.com' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/instagram.com' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/youtube.com' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Twitter'
                rel=''
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
    </div>
  );
};

export default Footer;