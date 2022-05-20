export const FONTS = {
  weight: {
    [400]: 400,
    [500]: 500,
    [600]: 600,
    [700]: 700,
    [800]: 800,
  },
  size: {
    [10]: '10px',
    [11]: '11px',
    [12]: '12px',
    [13]: '13px',
    [14]: '14px',
    [15]: '15px',
    [16]: '16px',
    [18]: '18px',
    [24]: '24px',
    [20]: '20px',
    [28]: '28px',
    [32]: '32px',
    [40]: '40px',
    [48]: '48px',
    [90]: '90px',
    [144]: '144px',
  },
  family: {
    regular: 'DMSans-Regular',
  },
};

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
