import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Discuss</FooterLink>
            <FooterLink href="#">BookClubSupport@gmail.com</FooterLink>
            <FooterLink href="#">+855 77 888 999</FooterLink>
            {/* <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <FontAwesomeIcon icon={faFacebookF} />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <FontAwesomeIcon icon={faInstagram} />
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <FontAwesomeIcon icon={faTwitter} />
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <FontAwesomeIcon icon={faYoutube} />
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Technology</FooterLink>
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">OUR Team</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
