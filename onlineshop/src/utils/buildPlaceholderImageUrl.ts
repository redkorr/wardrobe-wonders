export const COLOR_MAP: Record<string, string> = {
  '#E0E0E0': 'black',
  '#FFFF00': 'black'
};

const buildPlaceholderImageUrl = (color: string, path?: string, size = '360x540'): string => {
  const textColor = COLOR_MAP[color] || 'white';

  const url = new URL(`https://placehold.co/${size}/${color.slice(1)}/${textColor}`);

  if (path) {
    url.searchParams.append('text', path.slice(1, -5));
  }

  return url.toString();
};

export default buildPlaceholderImageUrl;
