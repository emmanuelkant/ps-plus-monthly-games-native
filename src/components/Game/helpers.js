const WRAPPED_HEIGHT_IMAGE = 180;
const LETTERS_PER_LINE = 48;
const HEIGHT_PER_LINE_MODIFIER = 25;
const TITLE_PLUS_PLATFORM_HEIGHT = 90;

const formatPlatform = platform => {
  return platform.replace('_', ' and ');
};

const totalHeight = description => {
  return (description.length / LETTERS_PER_LINE) * 
    HEIGHT_PER_LINE_MODIFIER + 
    TITLE_PLUS_PLATFORM_HEIGHT + 
    WRAPPED_HEIGHT_IMAGE;
}

export {
  formatPlatform,
  totalHeight
}