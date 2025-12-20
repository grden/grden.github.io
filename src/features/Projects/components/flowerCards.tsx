import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type FlowerType = {
    cardId: number;
    imageUrl: string;
    colors: string[];
}

const flowers: FlowerType[] = [
    {
        cardId: 1,
        imageUrl: "/projects/palmful/demo/flower1.png",
        colors: ["#FFF3FF", "#FFB5B1", "#FDCE85", "#FFF3FF"],
    },
    {
        cardId: 2,
        imageUrl: "/projects/palmful/demo/flower6.png",
        colors: ["#FFF3FF", "#FFD2DA", "#EDEFD0", "#E4E1F3"],
    },
    {
        cardId: 3,
        imageUrl: "/projects/palmful/demo/flower15.png",
        colors: ["#F0FDFD", "#8576FF", "#DBF2E9", "#9EC1F0"],
    },
    {
        cardId: 4,
        imageUrl: "/projects/palmful/demo/flower14.png",
        colors: ["#E8D2FF", "#FCEBB1", "#FFC4FF", "#FFB5B1"],
    },
    {
        cardId: 5,
        imageUrl: "/projects/palmful/demo/flower7.png",
        colors: ["#FFF7DF", "#FCBE00", "#FFE85A", "#FFD2BC"],
    },
];

interface FlowerCardProps {
    flower: FlowerType;
    style?: React.CSSProperties;
}

function FlowerCard({ flower, style, isMobile }: FlowerCardProps & { isMobile: boolean }) {
    const [rotation, setRotation] = useState(0);

	const handleMouseEnter = () => {
		const rotationList = [-4, -2, 2, 4];
		const randomIndex = Math.floor(Math.random() * 4);
		const randomRotation = rotationList[randomIndex];
		setRotation(randomRotation);
	};

    const cardContent = (
        <>
            <div>
                <div
                    className="absolute rounded-[0.5em] z-10 w-21 h-29 left-1.5 top-1.5"
                    style={{
                        backgroundImage: `conic-gradient(from 0deg in oklab, ${flower.colors[0]}66 28%, ${flower.colors[1]} 46%, ${flower.colors[2]} 83%, ${flower.colors[3]}33 100%)`,
                    }}
                />
                <div
                    className="absolute z-15 w-18 h-18 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        background: "linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(244, 244, 244, 0.6) 100%)",
                    }}
                />
            </div>
            <img
                src={flower.imageUrl}
                alt={`Flower ${flower.cardId}`}
                className="absolute object-contain z-20 w-20 left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2"
                style={style}
            />
        </>
    );

    if (isMobile) {
        return (
            <div className="relative rounded-[0.7em] shadow-md transition-colors duration-300 bg-white w-24 h-32">
                {cardContent}
            </div>
        );
    }

    return (
        <motion.div
            className="relative rounded-[0.7em] shadow-md transition-colors duration-300 bg-white w-24 h-32"
            onMouseEnter={handleMouseEnter}
            whileHover={{ rotate: rotation, scale: 1.05, boxShadow: "0em 0.2em 0.4em rgba(0, 0, 0, 0.15)" }}
            transition={{ type: "spring", stiffness: 50, damping: 2, mass: 0.1, ease: "easeInOut" }}
        >
            {cardContent}
        </motion.div>
    );
}

export default function FlowerCardsList() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint is 768px
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const flowersToShow = isMobile ? flowers.slice(0, 3) : flowers;

    return (
        <div className="flex flex-row gap-4">
            {flowersToShow.map((flower) => (
                <FlowerCard key={flower.cardId} flower={flower} isMobile={isMobile} />
            ))}
        </div>
    )
}
