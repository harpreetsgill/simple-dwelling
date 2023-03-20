import Hero from "@/components/UI/Hero";

export default function AdvertisePage() {
  return (
    <>
      <Hero>
        Partnering with Simple Dwelling gives your brand the opportunity to
        reach a design-minded audience through original, native video content.
      </Hero>
      <div className="page-text">
        <div className="text-col-1">
          <p>
            Simple Dwelling looks for opportunities with brands that share the
            same ethos of good design, simplicity and minimalism and want to
            reach an audience of people who value good-design and products that
            bring them value.
          </p>
          <p>
            All partnerships are tailored to suit you and your objectives, my
            aim is to help your mission in any way that I can. I will work with
            you to ensure your message is integrated into my videos in a highly
            considered and intentional manner to achieve beautiful results.
          </p>
        </div>
        <div className="text-col-2">
          <p>
            Reach me on{" "}
            <a href="mailto:advertise@simpledwelling.net">
              advertise@simpledwelling.net
            </a>{" "}
            to discuss partnership opportunities or request access to my media
            kit
          </p>
        </div>
      </div>
    </>
  );
}
