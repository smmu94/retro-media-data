import routes from "./routes";

export enum Category {
    HOME,
    MUSIC,
    MOVIES,
    SERIES,
    GAMES,
};
  
export const CategoryTranslations: { [key in Category]: string } = {
    [Category.HOME]: "nav.home",
    [Category.MUSIC]: "nav.music",
    [Category.MOVIES]: "nav.movies",
    [Category.SERIES]: "nav.series",
    [Category.GAMES]: "nav.games",
};
  

export const getRoute: { [key in Category]: string } = {
    [Category.HOME]: routes.home.main,
    [Category.MUSIC]: routes.music.main,
    [Category.MOVIES]: routes.movies.main,
    [Category.SERIES]: routes.series.main,
    [Category.GAMES]: routes.games.main,
};