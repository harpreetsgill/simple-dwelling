import Head from "next/head";
import Hero from "@/components/UI/Hero";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="The Design Emotive is about a belief that simplicity and minimalist design gives you space to breathe, gives you moments of relaxation and has the ability to calm you, and should bring you a sense of delight, and provide simple moments of pleasure and joy."
        />
      </Head>
      <Hero>
        Simple Dwelling explores sustainability and simplicity in homes, design
        and living.
      </Hero>
      <div className="page-text">
        <div className="text-col-1">
          <p>
            Simple Dwelling features homes, including new homes, renovations and
            extensions, apartments and townhouses, by architects and designers
            that bring a sense of simplicity to your life, while reducing their
            impact on the planet.
          </p>
        </div>
        <div className="text-col-2">
          <p>
            Life can often be chaotic, so through simplicity and minimalist
            design, our homes can be a place that brings a sense of calm, peace
            and allows space to breathe. We can also address more significant
            issues through simplicity and how we live, such as sustainability,
            waste, housing, climate change and urban sprawl. Simple Dwelling
            aims to be a source of inspiration as you discover the beauty that
            lies in simplicity.
          </p>
        </div>
      </div>
    </>
  );
}
