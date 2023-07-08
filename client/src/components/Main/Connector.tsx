'use client';

import { RootState } from "@/redux";
import { useCreateRoom, useJoinRoom } from "@/services/rooms";
import { useCardStyles } from "@/styles/card.styles";
import { Button, Divider, Input, makeStyles, mergeClasses, shorthands, Spinner, Text, tokens, Toolbar, ToolbarButton } from "@fluentui/react-components";
import { WrenchFilled } from "@fluentui/react-icons";
import { useState } from "react";
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

export default function Connector({ className }: React.AllHTMLAttributes<HTMLDivElement>) {
  const classes = useConnectorStyles();
  const c_card = useCardStyles();

  const status = useSelector((state: RootState) => state.gdcs.status);
  const room = useSelector((state: RootState) => state.gdcs.room);

  const { createRoom } = useCreateRoom();
  const { joinRoom, setStatus } = useJoinRoom();

  const [isCreatingRoom, setIsCreatingRoom] = useState(false);

  async function promptCreateRoom() {
    try {
      setIsCreatingRoom(true);
      await createRoom();
    } finally {
      setIsCreatingRoom(false)
    }
  }

  return (
    <div className={mergeClasses(c_card.root, classes.root, className)}>
      <Input appearance="filled-lighter" className={classes.inputRoom} contentBefore={<Text className={classes.textContentBefore} weight="medium">Room</Text>} value={room} />
      <div className={classes.buttonContainer}>
        <Button
          disabled={status != 'closed' || isCreatingRoom}
          icon={isCreatingRoom ? <Spinner size="tiny" /> : <></>}
          iconPosition="after"
          onClick={promptCreateRoom}>Create Room</Button>
        {status == 'closed' && <Button key="bc1" appearance="primary" onClick={() => joinRoom(room)}>Connect</Button>}
        {status == 'wait' && <Button key="bc2" appearance="primary" disabled>Connecting...</Button>}
        {status == 'established' && <Button key="bc3" appearance="primary" onClick={() => setStatus('closed')}>Disconnect</Button>}
      </div>
      <Divider />
      <Toolbar className={classes.toolbar}>
        <ToolbarButton icon={<WrenchFilled />} />
      </Toolbar>
    </div>
  );
}
