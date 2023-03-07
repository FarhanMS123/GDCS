import { useCardStyles } from "@/styles/card.styles";
import { makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";

export const useViewerStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    ...shorthands.gap(tokens.spacingVerticalL, tokens.spacingHorizontalL),
  },
  card: {
    width: `calc(50% - ${tokens.spacingVerticalL})`,
  },
});

export type ViewerProps = {
  className: string;
};

export default function Viewer({ className }: ViewerProps) {
  const classes = useViewerStyles();
  const c_card = useCardStyles();

  return (
    <div className={mergeClasses(c_card.root, classes.root, className)}>
      <div></div>
      <div></div>
    </div>
  );
}