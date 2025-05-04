import Contacts from "@/components/Contacts/contacts";
import IntroSection from "@/features/Home/sections/introSection";
import UpdateSection from "@/features/Home/sections/updateSection";

export default function Home() {
    return (
        <>
            <title>Jeongwon Kim</title>
            <IntroSection />
            <Contacts />
            <UpdateSection />
        </>
    )
}