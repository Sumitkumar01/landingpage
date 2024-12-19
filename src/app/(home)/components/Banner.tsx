import { Container } from "@/components";
import Image from "next/image";

const Banner = () => {
  //     background: url(<path-to-image>) lightgray 0px -168.525px / 100% 152.422% no-repeat, #FFF;

  // Selection colors
  // Hex

  // #343F52

  return (
    <section className="max-w-[1920px] mx-auto pt-4 lg:pb-10 pb-5">
      <Container className="rounded-lg bg-gradient-to-r from-[#605DBA]/50 to-[#F857A6]/30 text-white py-16 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col justify-center px-2">
            <h1 className="heading2 tracking-wider font-bold">
              Find your perfect{" "}
              <span className="text-[#0f1c2c]">freelancer</span>
            </h1>
          </div>
          <div className="relative top-11 right-0 w-full h-full ">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/bannerImage.png"
                alt="banner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
