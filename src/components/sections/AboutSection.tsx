import BlurFade from "@/components/magicui/blur-fade";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export function AboutSection() {
  return (
    <section id="about">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-3xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
      <button className="bg-yellow-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">
  <a href="resume.pdf" target="_blank">Resume</a>
</button>
    </section>
    
  );
}