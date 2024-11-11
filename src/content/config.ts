import { defineCollection } from 'astro:content';
import { cldAssetsLoader } from 'astro-cloudinary/loaders';

export const collections = {
  test1: defineCollection({
    loader: cldAssetsLoader({
      folder: 'test1'
    })
  }),
  all: defineCollection({
    loader: cldAssetsLoader({
      folder: ''
    })
  }),

}