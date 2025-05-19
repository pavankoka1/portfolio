import { Typography } from "@/types/typography";

const typography: Typography = {
  fontSizes: {
    8: "8px",
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    34: "34px",
    36: "36px",
    38: "38px",
    40: "40px",
    44: "44px",
    48: "48px",
  },
  fontWeights: {
    r: "PPNeueMontreal-Regular",
    b: "PPNeueMontreal-Bold",
    m: "PPNeueMontreal-Medium",
    t: "PPNeueMontreal-Thin",
  },
  fontFamilies: {
    ppnm: "PPNeueMontreal",
  },
};

const generateDynamicStyles = () => {
  let styles = "";

  Object.keys(typography.fontFamilies).forEach((family) => {
    Object.keys(typography.fontWeights).forEach((weight) => {
      Object.keys(typography.fontSizes).forEach((size) => {
        styles += `
          .${family}-${weight}-${size} {
            font-family: ${typography.fontWeights[weight]};
            font-size: ${typography.fontSizes[size]};
          }
        `;
      });
    });
  });

  return styles;
};

export default generateDynamicStyles;
