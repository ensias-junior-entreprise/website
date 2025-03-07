import Link from "next/link";
import BlurFade from "@/app/magicui/ui/blur-fade";
import GradualSpacing from "@/app/magicui/ui/gradual-spacing";
import Companies from "../Companies";

const Banner = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient( to bottom, #540509 0%, #5b0509 10%, #ac0710 50%, #de0914 75%, #f20a16 100% )",
      }}
    >
      <div className="mx-auto relative min-h-[100vh] flex flex-col justify-center items-center">
        <div className="text-center z-[1]">
          <GradualSpacing
            className="text-2xl lg:text-4xl drop-shadow-lg text-white font-semibold sm:text-5xl lg:text-7xl md:4px lh-96"
            text="Empowering Innovation,"
          />
          <GradualSpacing
            className="text-2xl lg:text-4xl drop-shadow-lg text-white font-semibold sm:text-5xl lg:text-7xl md:4px lh-96"
            text="Shaping Tomorrow"
          />
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-black text-opacity-90">
              At Junior Entreprise ENSIAS, we harness the talent and creativity
              of tomorrow’s leaders
            </p>
            <p className="text-md leading-8 text-white drop-shadow-lg font-medium text-black text-opacity-90">
              to deliver cutting-edge solutions.
            </p>
          </BlurFade>
        </div>
        <div className="text-center z-[1] mt-10">
          <BlurFade>
            <Link
              href="#about"
              type="button"
              className="text-15px text-cinnabar-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton"
            >
              Who are we?
            </Link>
            <Link
              href="#contact"
              type="button"
              className="text-15px text-cinnabar-600 font-bold bg-white mx-2 mt-2 py-5 w-[180px] leafbutton-reverse"
            >
              Contact us
            </Link>
          </BlurFade>
        </div>
        <div className="banner-image z-[0]"></div>
        <div className="companies-slider z-[1]">
          <Companies />
        </div>
      </div>
    </div>
  );
};

export default Banner;
