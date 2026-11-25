import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

// Every photo in the account; pages group them by their Cloudinary folder (asset_folder).
export const collections = {
  photos: defineCollection({
    loader: cldAssetsLoader({
      folder: '',
      context: true,
      // The loader stops at 10 photos by default. 500 is the most Cloudinary returns per request.
      // ponytail: caps the whole portfolio at 500 photos; raise it if he ever passes that.
      limit: 500
    })
  })
};
