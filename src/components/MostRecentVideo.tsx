import { useEffect, useState } from "react";
import { youtube } from "../apis/youtube";
import { YoutubeEmbed } from "./YoutubeEmbed";

interface Payload {
    title: string;
    videoId: string;
}

export const getMostRecentVideo = () => {
    return youtube.get('/search', {
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
    })
}

export const MostRecentVideo: React.FC = () => {
    const [state, setState] = useState<Payload>({ title: "", videoId: "" });
    useEffect(() => {
        getMostRecentVideo().then((payload) => {
            setState(payload);
        }).catch(e => {
            console.log(e);
        })
    }, [])
    if (state.videoId) return <YoutubeEmbed videoId={state.videoId} title={state.title} />
    else return <div>Loading... 🤔</div>;

}