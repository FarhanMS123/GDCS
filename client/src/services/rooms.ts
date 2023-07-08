import { useDispatch, useSelector } from "react-redux";
import client from '@/utils/trpc';
import { GdcsState, setClientId, setConnectionState, setPeer, setRoom } from "@/redux/gdcs.slice";
import Peer from 'simple-peer';
import { RootState } from "@/redux";
import { useEffect, useState } from "react";
import { Unsubscribable } from "@trpc/server/observable";

export function useCreateRoom() {
    const dispatch = useDispatch();

    const dispatchSetRoom = (code: GdcsState['room']) => dispatch(setRoom(code));
    
    async function createRoom() {
        const room = await client.room.create.mutate();
        dispatchSetRoom(room.code);
    }

    return { createRoom, setRoom: dispatchSetRoom };
}

export function useJoinRoom() {
    const status = useSelector((state: RootState) => state.gdcs.status);

    const dispatch = useDispatch();
    const dispatchSetStatus = (status: GdcsState['status']) => dispatch(setConnectionState(status));
    const dispatchSetClientId = (code: GdcsState['client_id']) => dispatch(setClientId(code));
    const dispatchSetPeer = (peer: GdcsState['peer']) => dispatch(setPeer(peer));

    const [ subs, setSubs ] = useState<null | Unsubscribable>(null);

    function joinRoom(code: string) {
        dispatchSetStatus('wait');

        let client_id: string | null = null;
        let peer: Peer.Instance;

        const _subs = client.room.subsJoin.subscribe(code, {
            onData(val) {
                switch(val.type){
                    case "client_id":
                        if(client_id != null) break;

                        client_id = val.data;
                        peer = new Peer({ initiator: true, });
                        
                        dispatchSetClientId(client_id);
                        dispatchSetPeer(peer);

                        peer.on("signal", (signal) => client.room.signalPeer.mutate({ client_id: client_id as string, data: signal }));
                        peer.on("connect", () => {
                            dispatchSetStatus("established");
                        });
                        break;
                    case "signal":
                        peer.signal(val.data);
                        break;
                    case "update":
                        break;
                }
            },
            onStopped() {
                dispatchSetStatus('closed');
            },
        });
        setSubs(_subs);

        return _subs;
    }

    useEffect(() => {
        if (status == 'closed') subs?.unsubscribe();
    }, [status]);

    return { 
        joinRoom, subs, setSubs,
        setStatus: dispatchSetStatus, 
        setClientId: dispatchSetClientId, 
        setPeer: dispatchSetPeer 
    };
}
