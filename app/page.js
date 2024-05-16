import Image from "next/image";
import Hero from "./component/hero";
import Footer from "./component/footer";
import Content from "./component/content";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Content />
      <Footer />
    </main>
  );
}
