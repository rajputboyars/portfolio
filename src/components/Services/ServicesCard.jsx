"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const ServicesCard = () => {
    const [transformStyle, setTransformStyle] = useState({});

    const handleMouseMove = (e) => {

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const offsetX = (e.clientX - cardX) / rect.width * 15;
        const offsetY = (e.clientY - cardY) / rect.height * 15;

        setTransformStyle({
            transform: `rotateX(${offsetY}deg) rotateY(${offsetX}deg) translate(${offsetX / 2}px, ${offsetY / 2}px)`,
            transition: 'transform 0.1s',
        });
    };

    const handleMouseLeave = () => {
        setTransformStyle({
            transform: 'rotateX(0deg) rotateY(0deg) translate(0, 0)',
            transition: 'transform 0.5s ease',
        });
    };
    return (
        <div
            style={{ ...transformStyle }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='flex flex-col items-center text-white'>
            <Image
                src={"/images/testmonial1.png"}
                alt='image'
                width={400}
                height={100}
                className='object-contain rounded-lg overflow-hidden'
            />
            <h2>Short Form Video Editing</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi similique reiciendis obcaecati esse debitis repellendus praesentium aut laborum? Odio.</p>
        </div>
    )
}

export default ServicesCard
