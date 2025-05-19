export const generateLetterShape = (letter, isSecondK = false) => {
    const letterDots = [];
    const width = 300;
    const height = 500;
    const letterWidth = 50;
    const letterSpacing = 15;
    const startX = (width - (letterWidth * 4 + letterSpacing * 3)) / 2;
    const startY = height * 0.35;
    const letterHeight = 120;

    switch (letter) {
        case 'K':
            // Adjust startX for second K
            const kStartX = isSecondK ? startX + letterWidth * 2 + letterSpacing * 2 : startX;
            const kCenterY = startY + letterHeight / 2;

            // Main vertical line - single line of dots
            for (let i = 0; i < letterHeight; i++) {
                letterDots.push({
                    x: kStartX,
                    y: startY + i,
                });
            }

            // Left decorative line - single line
            for (let i = 0; i < 15; i++) {
                letterDots.push({
                    x: kStartX - 5,
                    y: startY + 40 + i * 2,
                });
            }

            // Upper diagonal (from center to top-right)
            const diagonalLength = letterHeight / 2.5;
            for (let i = 0; i < diagonalLength; i++) {
                letterDots.push({
                    x: kStartX + i,
                    y: kCenterY - i,
                });
            }

            // Lower diagonal (from center to bottom-right)
            for (let i = 0; i < diagonalLength; i++) {
                letterDots.push({
                    x: kStartX + i,
                    y: kCenterY + i,
                });
            }
            break;

        case 'O':
            const oCenterX = startX + letterWidth + letterSpacing;
            const oCenterY = startY + letterHeight / 2;
            const outerRadius = 35; // Increased from 25 to 35
            const innerRadius = 30; // Increased from 20 to 30
            // Outer circle - increased dots for smoother appearance
            for (let i = 0; i < 80; i++) {
                // Increased from 50 to 80 dots
                const angle = (i / 80) * Math.PI * 2;
                letterDots.push({
                    x: oCenterX + Math.cos(angle) * outerRadius,
                    y: oCenterY + Math.sin(angle) * outerRadius,
                });
            }
            // Inner circle - increased dots for smoother appearance
            for (let i = 0; i < 70; i++) {
                // Increased from 40 to 70 dots
                const angle = (i / 70) * Math.PI * 2;
                letterDots.push({
                    x: oCenterX + Math.cos(angle) * innerRadius,
                    y: oCenterY + Math.sin(angle) * innerRadius,
                });
            }
            break;

        case 'A':
            const aStartX = startX + (letterWidth + letterSpacing) * 3;
            const aWidth = 45;
            const aHeight = letterHeight;

            // Left diagonal (from bottom-left to top-right)
            for (let i = 0; i < aHeight; i++) {
                const progress = i / aHeight;
                letterDots.push({
                    x: aStartX + progress * (aWidth / 2),
                    y: startY + aHeight - i,
                });
            }

            // Right diagonal (from bottom-right to top-left)
            for (let i = 0; i < aHeight; i++) {
                const progress = i / aHeight;
                letterDots.push({
                    x: aStartX + aWidth - progress * (aWidth / 2),
                    y: startY + aHeight - i,
                });
            }

            // Horizontal line (centered)
            const crossbarY = startY + aHeight * 0.6;
            for (let i = 0; i < aWidth * 0.6; i++) {
                letterDots.push({
                    x: aStartX + aWidth * 0.2 + i,
                    y: crossbarY,
                });
            }

            // Bottom line
            for (let i = 0; i < aWidth * 0.4; i++) {
                letterDots.push({
                    x: aStartX + aWidth * 0.3 + i,
                    y: startY + aHeight - 5,
                });
            }
            break;
    }
    return letterDots;
};
