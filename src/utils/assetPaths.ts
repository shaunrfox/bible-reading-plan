/**
 * Resolves a path to a public asset, handling both development and production environments
 * @param path - The path to the asset, relative to the public folder (without leading slash)
 * @returns The full path to the asset
 */
export function getPublicPath(path: string): string {
  // Remove any leading slashes
  const cleanPath = path.replace(/^\/+/, '');

  // In development, we need to use the base path
  // In production, the base path is already included in the URL
  const basePath = '/bible-reading-plan/';

  return `${basePath}${cleanPath}`;
}

/**
 * Gets the path to a data file for a specific date
 * @param date - An ISO date string (YYYY-MM-DD)
 * @returns The full path to the data file
 */
export function getDataPath(date: string): string {
  const year = date.substring(0, 4);
  return getPublicPath(`data/${year}/${date}.json`);
}
