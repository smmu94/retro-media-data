import { Category } from "../../../../utils/constants";

export const getClassNames = (index: Category) => {
    return `${
      index % 2 === 0 ? "even" : "odd"
    }`;
};