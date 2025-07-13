import ArrowLink from '@/components/ArrowLink/arrowLink';

export default function IntroSection() {
    return (
        <>
            <h1 className="text-4xl font-bold mt-24">Hi, I'm Jeongwon Kim<img src="/space_invader.svg" alt="logo" className="w-9 h-9 inline-block ml-2 relative bottom-[0.14em]" /></h1>
            <p className="mt-8 mb-6 text-gray-600">I'm an undergraduate student at 
                <ArrowLink href="https://ce.khu.ac.kr/ce/user/main/view.do" className="ml-1">
                    Kyung Hee University School of Computing
                </ArrowLink>,
                and currently a member of 
                <ArrowLink href="https://uxc.khu.ac.kr/" className="ml-1">
                    UXC Lab
                </ArrowLink>.
                <br />My recent interests lie in <span className="text-black font-medium">Human-Computer Interaction</span>, alongside <span className="text-black font-medium">Frontend Development</span> — exploring ways to combine these disciplines to create more intuitive and engaging digital experiences.</p>
        </>
    )
}