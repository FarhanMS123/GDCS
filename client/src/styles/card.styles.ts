import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const useCardStyles = makeStyles({
    root: {
        backgroundColor: tokens.colorNeutralBackground2,
        ...shorthands.padding(tokens.spacingVerticalL, tokens.spacingHorizontalL),
        ...shorthands.borderRadius(tokens.borderRadiusMedium),
        boxShadow: tokens.shadow4,
    },
});