import { useCardStyles } from "@/styles/card.styles";
import { Button, Divider, Input, Label, makeStyles, mergeClasses, shorthands, Text, tokens, Toolbar, ToolbarButton, useId } from "@fluentui/react-components";
import { Wrench16Filled, Wrench20Filled, WrenchFilled } from "@fluentui/react-icons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useConnectorStyles = makeStyles({
  root: {
    width: '16rem',
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap(0, tokens.spacingVerticalS)
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
    ...shorthands.margin('0px'),
    ...shorthands.padding('0px'),
    justifyContent: 'flex-end'
  },
})

export type Status = 'closed' | 'established' | 'wait';
export type StateStatus = [Status, Dispatch<SetStateAction<Status>>];

/**
 * Create Room, Connect, Disconnect, Reconnect, Generate
 * @returns 
 */

export default function Connector(){
  const [status, setStatus]: StateStatus = useState('closed' as Status);
  const classes = useConnectorStyles();
  const c_card = useCardStyles();

  if (status == 'wait') setTimeout(() => { setStatus('established') }, 3000);

  return (
    <div className={mergeClasses(c_card.root, classes.root)}>
      <Input appearance="filled-lighter-shadow" contentBefore={<Text className={classes.textContentBefore} weight="medium">Room</Text>} />
      <div className={classes.buttonContainer}>
        <Button disabled={ status != 'closed' }>Create Room</Button>
        { status == 'closed' && <Button appearance="primary" onClick={() => setStatus('wait')}>Connect</Button>}
        { status == 'wait' && <Button appearance="primary" disabled>Connecting</Button>}
        { status == 'established' && <Button appearance="primary" onClick={() => setStatus('closed')}>Disconnect</Button>}
      </div>
      <Divider />
      <Toolbar className={classes.toolbar}>
        <ToolbarButton icon={ <WrenchFilled /> } />
      </Toolbar>
    </div>
  );
}