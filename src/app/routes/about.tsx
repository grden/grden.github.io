import IntroSection from "@/features/About/sections/introSection";
import SpecSection from "@/features/About/sections/specSection";
import SlideUp from "@/components/Animations/slideUp";

export default function About() {
    return (
        <>
            <title>About - Jeongwon Kim</title>
            <SlideUp delay={100}>
                <IntroSection />
            </SlideUp>
            <SpecSection />
        </>
    )
}