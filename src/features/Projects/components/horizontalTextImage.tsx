import React from 'react';

type HorizontalTextImageProps = {
    textContent: React.ReactNode;
    image: string;
    rightText?: boolean;
}

export default function HorizontalTextImage({ textContent, image, rightText = false }: HorizontalTextImageProps) {
    const imageComponent = (
        <img
            src={image}
            alt="Prototype"
            className="rounded-lg w-full md:w-3/5 h-72 object-cover border border-gray-300"
        />
    );
    
    const textComponent = (
        <div className="flex flex-col w-full md:w-2/5 justify-start">
            {textContent}
        </div>
    );

    return (
        <div className="flex flex-col md:flex-row mx-auto gap-6">
            {/* On mobile (flex-col), always show image first, then text */}
            {/* On md+ (flex-row), respect rightText prop */}
            <div className={`md:hidden flex flex-col gap-6`}>
                {imageComponent}
                {textComponent}
            </div>
            <div className={`hidden md:flex md:flex-row gap-6 ${rightText ? 'md:flex-row-reverse' : ''}`}>
                {imageComponent}
                {textComponent}
            </div>
        </div>
    );
}