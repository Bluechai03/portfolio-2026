import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <SiteFooter />
    </>
  );
}
