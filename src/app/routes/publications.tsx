import SlideUp from "@/components/Animations/slideUp";
import PublicationList from "@/features/Publications/comonents/publicationList";

export default function Publications() {
    return (
        <>
            <title>Publications - Jeongwon Kim</title>
            <SlideUp delay={100}>
                <PublicationList />
            </SlideUp>
        </>
    )
}