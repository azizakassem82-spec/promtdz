import React, { useEffect, useState } from 'react';

interface AnimatedHeadingProps {
    text: string;
    className?: string;
    delay?: number;
    charDelay?: number;
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
    text,
    className = '',
    delay = 200,
    charDelay = 30,
}) => {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartAnimation(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const lines = text.split('\n');

    return (
        <div className={className} style={{ letterSpacing: '-0.04em' }}>
            {lines.map((line, lineIndex) => {
                const words = line.split(' ');
                const isArabic = /[\u0600-\u06FF]/.test(line);
                let charCountSoFar = lines.slice(0, lineIndex).reduce((acc, l) => acc + (isArabic ? l.split(' ').length : l.length + 1), 0); // +1 assuming spaces/newlines

                return (
                    <div key={lineIndex} className={`flex flex-wrap justify-center overflow-hidden ${isArabic ? 'flex-row-reverse' : ''}`}>
                        {words.map((word, wordIndex) => {
                            if (isArabic) {
                                const globalWordIndex = charCountSoFar++;
                                const delayMs = startAnimation ? globalWordIndex * (charDelay * 3) : 0;

                                return (
                                    <span
                                        key={wordIndex}
                                        className="inline-block transition-all duration-500 will-change-transform mx-[0.15em]"
                                        style={{
                                            opacity: startAnimation ? 1 : 0,
                                            transform: startAnimation ? 'translateX(0)' : 'translateX(18px)',
                                            transitionDelay: `${delayMs}ms`,
                                        }}
                                    >
                                        {word}
                                    </span>
                                );
                            }

                            const wordChars = word.split('');
                            const wordRender = (
                                <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.27em]">
                                    {wordChars.map((char, charIndex) => {
                                        const globalCharIndex = charCountSoFar++;
                                        const delayMs = startAnimation ? globalCharIndex * charDelay : 0;

                                        return (
                                            <span
                                                key={charIndex}
                                                className="inline-block transition-all duration-500 will-change-transform"
                                                style={{
                                                    opacity: startAnimation ? 1 : 0,
                                                    transform: startAnimation ? 'translateX(0)' : 'translateX(-18px)',
                                                    transitionDelay: `${delayMs}ms`,
                                                }}
                                            >
                                                {char}
                                            </span>
                                        );
                                    })}
                                </span>
                            );
                            charCountSoFar++; // Count the space separator
                            return wordRender;
                        })}
                    </div>
                );
            })}
        </div>
    );
};
