import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import Services from "./components/Services.tsx";
import Contact from "./components/Contact.tsx";

// import Link from "next/link";

export default function Component() {
  return (
    <>
      <Navbar fluid rounded>
        <NavbarBrand href="#">
          <img className="mr-20 h-6 sm:h-9" alt="" />
          <span className="self-center text-xl font-sans whitespace-nowrap dark:text-white">
            Alex Carter
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#home" active>
            Home
          </NavbarLink>
          <NavbarLink href="#about">About</NavbarLink>
          <NavbarLink href="#skills">Skills</NavbarLink>
          <NavbarLink href="#projects">Projects</NavbarLink>
          <NavbarLink href="#services">Services</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2025} />
        <FooterLinkGroup>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}
