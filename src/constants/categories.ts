
export enum Category {
    HOME,
    MUSIC,
    MOVIES,
    SERIES,
    POSTERS,
};
  
export const CategoryTranslations: { [key in Category]: string } = {
    [Category.HOME]: "nav.home",
    [Category.MUSIC]: "nav.music",
    [Category.MOVIES]: "nav.movies",
    [Category.SERIES]: "nav.series",
    [Category.POSTERS]: "nav.posters",
};
  