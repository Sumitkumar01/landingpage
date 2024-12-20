
import Banner from "./components/Banner";
import { BgImage } from "@/icons/icons";

export default function Home() {
  return (
    <main>
      <Banner />
      <section className="max-w-[1920px] mx-auto w-full pt-10 -mb-1">
        <BgImage />
      </section>
    </main>
  );
}
