'use client';

import { useCardStyles } from "@/styles/card.styles";
import { SelectTabData, SelectTabEvent, Tab, TabList, makeStyles, mergeClasses, shorthands, tokens } from "@fluentui/react-components";
import { useState } from "react";
import * as actions from '@/actions/gdcs';

export const useViewerStyles = makeStyles({
  root: {
    width: '40rem',
    height: '20rem',
    position: "relative",
    ...shorthands.padding(0),
  },
});

/**
 * Camera, Canvas, Stream
 * @returns 
 */

export default function Viewer({ className }: React.AllHTMLAttributes<HTMLDivElement>) {
  const classes = useViewerStyles();
  const c_card = useCardStyles();

  const [selectedTab, selectTab] = useState("stream");

  return (
    <div className={mergeClasses(c_card.root, classes.root, className)}>
      <TabList size="small" selectedValue={selectedTab} onTabSelect={(ev: SelectTabEvent, data: SelectTabData) => selectTab(data.value as string)}>
        <Tab value="camera">Camera</Tab>
        <Tab value="canvas">Canvas</Tab>
        <Tab value="stream">Stream</Tab>
        <Tab value="flag">Flag</Tab>
      </TabList>
      <div></div>
    </div>
  );
}
