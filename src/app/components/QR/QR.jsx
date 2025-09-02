"use client";
import Image from 'next/image';
import React from 'react';

const QR = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/real-estate/qr.png';
        link.download = 'qr.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <div className="flex flex-col items-center gap-4">
            <Image src="/real-estate/qr.png" width={1000} height={1000} alt='qr' className='w-[90%] h-[90%] mx-auto'  />
            <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-md bg-[#c1dc18] text-primary-foreground font-medium shadow hover:bg-primary/90 transition"
            >
                Download QR
            </button>
        </div>
    );
};

export default QR;