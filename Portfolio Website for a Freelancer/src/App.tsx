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
      <Navbar fluid rounded className="w-full justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-4 py-2">
          <NavbarBrand href="#" className="flex items-center mx-8">
            <img className="mr-4 h-6 sm:h-9" alt="" />
            <span className="self-center text-xl font-sans whitespace-nowrap dark:text-white">
              Alex Carter
            </span>
          </NavbarBrand>
          <div className="flex-1 flex justify-center">
            <NavbarToggle />
            <NavbarCollapse className="flex flex-row items-center justify-center gap-8">
              <NavbarLink href="#home" active>
                Home
              </NavbarLink>
              <NavbarLink href="#about">About</NavbarLink>
              <NavbarLink href="#skills">Skills</NavbarLink>
              <NavbarLink href="#projects">Projects</NavbarLink>
              <NavbarLink href="#services">Services</NavbarLink>
              <NavbarLink href="#contact">Contact</NavbarLink>
            </NavbarCollapse>
          </div>
        </div>
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
