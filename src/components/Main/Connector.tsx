'use client';

import { RootState } from "@/redux";
import { GdcsState, setConnectionState } from "@/redux/gdcs.slice";
import { useCardStyles } from "@/styles/card.styles";
import { Button, Divider, Input, makeStyles, mergeClasses, shorthands, Text, tokens, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { WrenchFilled } from "@fluentui/react-icons";
import { useDispatch, useSelector } from "react-redux";

export const useConnectorStyles = makeStyles({
  root: {
    width: '16rem',
    maxWidth: `calc(100% - (2 * ${tokens.spacingHorizontalL}))`,
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap(0, tokens.spacingVerticalS)
  },
  inputRoom: {
    boxShadow: tokens.shadow2,
  },
  textContentBefore: {
    ...shorthands.borderRight(tokens.strokeWidthThin, 'solid', tokens.colorNeutralStroke1),
    paddingRight: tokens.spacingHorizontalS,
    marginRight: tokens.spacingHorizontalXS
  },
  buttonContainer: {
    // marginTop: tokens.spacingVerticalS,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  toolbar: {
    ...shorthands.margin(0),
    ...shorthands.padding(0),
    justifyContent: 'flex-end'
  },
});

/**
 * Create Room, Connect, Disconnect, Reconnect, Generate
 * @returns 
 */

export default function Connector({ className }: React.AllHTMLAttributes<HTMLDivElement>){
  const classes = useConnectorStyles();
  const c_card = useCardStyles();
  
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.gdcs.status);
  const room = useSelector((state: RootState) => state.gdcs.room);

  if (status == 'wait') setTimeout(() => { dispatch(setConnectionState('established')) }, 3000);

  return (
    <div className={mergeClasses(c_card.root, classes.root, className)}>
      <Input appearance="filled-lighter" className={classes.inputRoom} contentBefore={<Text className={classes.textContentBefore} weight="medium">Room</Text>} />
      <div className={classes.buttonContainer}>
        <Button disabled={ status != 'closed' }>Create Room</Button>
        { status == 'closed' && <Button appearance="primary" onClick={() => dispatch(setConnectionState('wait'))}>Connect</Button>}
        { status == 'wait' && <Button appearance="primary" disabled>Connecting</Button>}
        { status == 'established' && <Button appearance="primary" onClick={() => dispatch(setConnectionState('closed'))}>Disconnect</Button>}
      </div>
      <Divider />
      <Toolbar className={classes.toolbar}>
        <ToolbarButton icon={ <WrenchFilled /> } />
      </Toolbar>
    </div>
  );
}