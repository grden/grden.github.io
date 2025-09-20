import Education from "../components/education";
import Work from "../components/work";
import Activities from "../components/activities";
import Awards from "../components/awards";
import Others from "../components/others";
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
                <Others />
            </ScrollReveal>
            <ScrollReveal>
                <Skills />
            </ScrollReveal>
        </>
    );
}