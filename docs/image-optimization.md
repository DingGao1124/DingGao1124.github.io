# Image optimization

## Purpose

Images are compressed manually with TinyPNG before being added or replaced. `vite-plugin-image-optimizer` provides conservative build-time optimization through Sharp and SVGO. It does not overwrite source assets or change their dimensions or formats.

## Configuration

The plugin is configured in `.vitepress/config.ts` under `vite.plugins` and runs during production builds only.

| Format | Build behavior |
| --- | --- |
| JPEG | Excluded to preserve the existing TinyPNG result without another lossy encoding pass. |
| PNG | Lossless compression with palette quantization disabled, compression level 9, and adaptive filtering. |
| WebP | Lossless encoding. |
| SVG | Remove comments, metadata, and editor namespaces; normalize and sort attributes. Preserve paths, transforms, and `viewBox`. |
| Other files | Excluded. |

The plugin keeps the original output when optimization would produce an equal or larger file. It processes emitted assets and matching files from `public`, including the favicon, but explicitly excludes `public/publications/journal/original/`. Small images that Vite inlines into the bundle are not processed separately. No resize, format conversion, additional image variants, or persistent optimization cache is configured.

Publication previews and patent images live under `src/assets/publications/`. High-resolution journal originals live under `public/publications/journal/original/` and are copied unchanged, with fixed URLs used for `media.originalSrc`.

## Updating images

Replace display images with the same filenames and formats after compressing them with TinyPNG. Keep high-resolution journal originals in `public/publications/journal/original/` unchanged. Run `npm run build` to produce optimized output. Newly added display JPEG files should also be compressed manually.

## Verification

Run `npm run build`, `npm run lint`, and `npm run format:check`. When changing optimization settings, compare decoded PNG/WebP pixels and dimensions with their sources, confirm JPEG bytes remain unchanged, verify SVG `viewBox` values, and check generated image and original-image links. Source files must remain unchanged after the build.
