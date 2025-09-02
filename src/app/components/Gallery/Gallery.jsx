"use client";
import React, { useState } from 'react';


const images = [
    // Replace with your image URLs or import them
    '/real-estate/company.jpg',
    '/real-estate/cover.jpg',
    '/real-estate/profile.jpg',
    '/globe.svg',
    '/next.svg',
    '/vercel.svg',
    '/window.svg',
];

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (idx) => {
        setCurrentIndex(idx);
        setModalOpen(true);
    };

    const closeModal = () => setModalOpen(false);

    const showPrev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const showNext = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='mt-4'>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                maxWidth: '600px',
                margin: '0 auto',
            }}>
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Gallery ${idx}`}
                        style={{ width: '100%', cursor: 'pointer', borderRadius: '8px', objectFit: 'cover', aspectRatio: '1.2/1' }}
                        onClick={() => openModal(idx)}
                    />
                ))}
            </div>

            {modalOpen && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                    }}
                >
                    <button
                        onClick={showPrev}
                        style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                        aria-label="Previous image"
                    >&#8592;</button>
                    <img
                        src={images[currentIndex]}
                        alt={`Modal ${currentIndex}`}
                        style={{ maxHeight: '80vh', maxWidth: '80vw', borderRadius: '12px', boxShadow: '0 2px 16px #0008' }}
                        onClick={e => e.stopPropagation()}
                    />
                    <button
                        onClick={showNext}
                        style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', fontSize: 32, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                        aria-label="Next image"
                    >&#8594;</button>
                    <button
                        onClick={closeModal}
                        style={{ position: 'absolute', top: 24, right: 32, fontSize: 28, background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                        aria-label="Close modal"
                    >&#10005;</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;