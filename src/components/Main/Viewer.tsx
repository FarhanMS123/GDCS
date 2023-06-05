import { useCardStyles } from "@/styles/card.styles";
import { makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";

export const useViewerStyles = makeStyles({
  root: {
    position: "relative",
    // ...shorthands.padding(0),
  },
});

export default function Viewer({ className }: React.AllHTMLAttributes<any>) {
  const classes = useViewerStyles();
  const c_card = useCardStyles();

  return (
    <div className={mergeClasses(c_card.root, classes.root, className)}>
      <div></div>
      <div></div>
    </div>
  );
}
