import Contacts from "@/components/Contacts/contacts";

export default function IntroSection() {
    return (
        <div className="flex flex-col md:flex-row items-start gap-8 mt-12 mb-16">
        <div className="w-full md:w-1/3">
            <img
                src="/profile/IMG_3363.jpg"
                alt="Jeongwon Kim"
                className="w-full rounded-lg shadow-lg"
            />
        </div>
        <div className="w-full md:w-2/3">
            <p className="text-gray-700 mb-8">
                I'm a software engineering student with a passion for human-centered technology. I've been exploring ways to create digital experiences that feel comfortable and engaging for users.
                <br /><br />
                When I'm not coding or researching, I enjoy hitting the basketball court, playing drums in our school band, and working out at the gym.
            </p>
            <Contacts />
        </div>
    </div>
    );
}