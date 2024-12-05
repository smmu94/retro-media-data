
export enum Category {
    HOME,
    MUSIC,
    MOVIES,
    SERIES,
    POSTERS,
};
  
export const CategoryTranslations: { [key in Category]: string } = {
    [Category.HOME]: "Inicio",
    [Category.MUSIC]: "Música",
    [Category.MOVIES]: "Películas",
    [Category.SERIES]: "Series",
    [Category.POSTERS]: "Pósters",
};
  