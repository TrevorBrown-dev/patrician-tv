import { useCallback, useEffect, useReducer, useState } from "react";
import { youtube } from "../apis/youtube";
import { YoutubeEmbed } from "./YoutubeEmbed";


enum VideoState {
    LOADING,
    LOAD_SUCCESS,
    LOAD_FAILED
}
interface State {
    loading: boolean;
    error?: string;
    data?: {
        title: string;
        videoId: string;
    }
}
interface Payload {
    title: string;
    videoId: string;
}
interface ActionWithPayload {
    type: VideoState,
    payload?: Payload
}

export const MostRecentVideo: React.FC = () => {
    const reducer = useCallback((state: State, action: ActionWithPayload): State => {
        switch (action.type) {
            case VideoState.LOADING:
                return { ...state, loading: true };
            case VideoState.LOAD_SUCCESS:
                return {
                    loading: false, error: "", data: {
                        title: action.payload?.title || "",
                        videoId: action.payload?.videoId || ""
                    }
                }
            case VideoState.LOAD_FAILED:
                return {
                    loading: false,
                    error: "Something went wrong. Sorry! ☹️"
                }
        }
    }, [])
    const [state, dispatch] = useReducer<(state: State, action: ActionWithPayload) => State>(reducer, { loading: false });
    useEffect(() => {
        dispatch({ type: VideoState.LOADING });
        youtube.get('/search', {
            params: {
                maxResults: '1'
            }
        }).then(({ data }) => {
            const payload: Payload = {
                videoId: data.items[0].id.videoId,
                title: data.items[0].snippet.title,
            }
            dispatch({ type: VideoState.LOAD_SUCCESS, payload });
        }).catch(e => {
            console.log(e);
            dispatch({ type: VideoState.LOAD_FAILED });
        })
    }, [])

    if (state.error) return <div>{state.error}</div>;
    else if (state.data) return <YoutubeEmbed videoId={state.data.videoId} title={state.data.title} />
    else return <div>Loading... 🤔</div>;

}