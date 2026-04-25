import React from 'react';

export const BackgroundVideo: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover scale-105"
            >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_084718_72a17915-4964-4059-afcd-22d59399b72e.mp4" type="video/mp4" />
            </video>

            {/* 
        Dark overlay to ensure white text remains extremely readable
        Adds to the cinematic dark 'VEX' style design
      */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />
        </div>
    );
};
