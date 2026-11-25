import { getCollection } from 'astro:content';

// First photo in the Cloudinary "hero" folder; until that exists, the first photo in any folder
// (root-level photos are Cloudinary's demo images). Used for the home page and link previews.
export async function getHeroPhoto() {
  const photos = (await getCollection('photos')).map(({ data }) => data);
  return photos.find((photo) => photo.asset_folder === 'hero') ?? photos.find((photo) => photo.asset_folder);
}
