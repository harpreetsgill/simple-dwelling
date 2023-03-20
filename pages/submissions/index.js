import Head from "next/head";
import Hero from "@/components/UI/Hero";

export default function SubmissionPage() {
  return (
    <>
      <Head>
        <title>Submissions</title>
        <meta
          name="description"
          content="If you are an architect or designer with a completed, or soon to be completed, project that aligns with Simple Dwelling, I want to hear from you."
        />
      </Head>
      <Hero>Simple and Sustainable</Hero>
      <div className="page-text">
        <div className="text-col-1">
          <p>
            If you are an architect or designer with a completed, or soon to be
            completed, project that aligns with Simple Dwelling, I want to hear
            from you.
          </p>
        </div>
        <div className="text-col-2">
          <p>
            I am looking for: new homes, extensions, renovations, apartments or
            townhouses that are sustainable, ideally carbon-neutral in
            operations (no gas connected where viable), passive design, energy
            efficient and small (under 200sqm), while having simple forms, clean
            lines and limited material palette.
          </p>
        </div>
      </div>
    </>
  );
}
