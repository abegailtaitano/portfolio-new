import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import "../gatsby-theme-portfolio-minimal/globalStyles/theme.css";
import backgroundVideo from '../../content/video/Binary - 29078.mp4';


export default function IndexPage() {
  return (
    <>
    <video autoPlay loop muted id="video">
  <source src={backgroundVideo} type='video/mp4'/></video>
      <Seo title="Abegail Taitano" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading=" Don't be shy, let's Connect!" />
      </Page>
    </>
  );
}

