const characterImages = import.meta.glob(
  "./assets/characters/**/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const getImageUrl = (filename) => {
  const imagePath = `./assets/characters/${filename}`;
  const imageUrl = characterImages[imagePath];

  return imageUrl;
};

export default getImageUrl;
