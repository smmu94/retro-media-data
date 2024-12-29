import { CategoryTranslations } from "../../../../utils/constants";

export type CardProps = {
    index: keyof typeof CategoryTranslations;
    isExpanded: boolean;
    onToggle: (index: keyof typeof CategoryTranslations) => void;
}