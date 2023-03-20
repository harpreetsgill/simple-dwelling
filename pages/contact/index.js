import Hero from "@/components/UI/Hero";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Hero>Get in Touch</Hero>
      <div className="page-text">
        <div className="text-col-1">
          <p>
            If you’re interested in brand partnership and advertising, visit the{" "}
            <Link href="/advertise">advertising page</Link> for more information.
          </p>
          <p>
            If you have a home that I can film for an episode, visit the{" "}
            <Link href="/submissions">episode submission page</Link> for guidelines
            and to fill out the form.
          </p>
          <p>
            I am no longer accepting submissions for the Instagram account.
            Rather than explain it here, refer to{" "}
            <a href="https://www.instagram.com/p/CNYlOVdBihJ/" target="_blank">
              this post on Instagram
            </a>
            . I hope you understand, and perhaps consider{" "}
            <Link href="/submissions">
              submitting interest for an episode feature
            </Link>
            .
          </p>
        </div>
        <div className="text-col-2">
          <p>
            If you’re after information about a particular project I’ve featured
            or an architect, it’s best to just leave a comment on{" "}
            <a href="https://www.instagram.com/simple_dwelling" target="_blank">
              Instagram
            </a>{" "}
            or{" "}
            <a href="https://www.youtube.com/simpledwelling" target="_blank">
              YouTube
            </a>{" "}
            that relates, and I can help you out that way. Please note that I
            may not be able to answer your question, so consider reaching out to
            the architect or designer directly.
          </p>
        </div>
      </div>
    </>
  );
}
