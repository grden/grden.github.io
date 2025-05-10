import Education from "../components/education";
import Work from "../components/work";
import Activities from "../components/activities";
import Awards from "../components/awards";
import Skills from "../components/skills";
import ScrollReveal from "@/components/Animations/scrollReveal";

export default function SpecSection() {
    return (
        <>
            <ScrollReveal>
                <Education />
            </ScrollReveal>
            <ScrollReveal>
                <Work />
            </ScrollReveal>
            <ScrollReveal>
                <Activities />
            </ScrollReveal>
            <ScrollReveal>
                <Awards />
            </ScrollReveal>
            <ScrollReveal>
                <Skills />
            </ScrollReveal>
        </>
    );
}