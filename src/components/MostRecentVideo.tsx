import { useCallback, useEffect, useState } from "react";
import { youtube } from "../apis/youtube";
import { YoutubeEmbed } from "./YoutubeEmbed";

interface Payload {
    title: string;
    videoId: string;
}

export const useMostRecentVideo = () => {
    return useCallback(() => youtube.get('/search', {
        params: {
            maxResults: '1'
        }
    }).then(({ data }) => {
        const payload: Payload = {
            videoId: data.items[0].id.videoId,
            title: data.items[0].snippet.title,
        }
        return payload;
    }).catch(e => {
        throw e;
    }), []);
}

export const MostRecentVideo: React.FC = () => {
    const [state, setState] = useState<Payload>({ title: "", videoId: "" });
    const getVideo = useMostRecentVideo();
    useEffect(() => {
        getVideo().then((payload) => {
            setState(payload);
        }).catch(e => {
            console.log(e);
        })

    }, [getVideo]);
    if (state.videoId) return <YoutubeEmbed videoId={state.videoId} title={state.title} />
    else return <div>Loading... 🤔</div>;

}