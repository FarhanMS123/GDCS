import { updateMediaState } from "@/redux/media.slice";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

export default function WindowResizeHandler(){
  const dispatch = useDispatch();
  const onresize = useMemo(() => (ev?: UIEvent) => {
    dispatch(updateMediaState());
  }, []);
  
  useEffect(() => {
    window.removeEventListener('resize', onresize);
    window.addEventListener('resize', onresize);
    onresize();
  }, []);

  return <></>;
}