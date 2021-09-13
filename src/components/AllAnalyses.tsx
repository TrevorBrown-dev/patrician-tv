import { useEffect, useState } from "react";
import { youtube } from "../apis/youtube";
import { renderSkeletons, YoutubeThumbnail } from "./YoutubeThumbnail";

export const AllAnalyses: React.FC = () => {
    const [videos, setVideos] = useState<JSX.Element[]>([]);
    useEffect(() => {
        youtube.get('/playlistItems', {
            params: {
                playlistId: "PL8DlBi8nE56xa2hnQk58K7jHg1cC5LmzX",
                maxResults: "100"
            }
        }).then(res => {
            console.log("PLAYLIST", res.data);
            setVideos(res.data.items.map((item: any, index: number) => {
                const props = {
                    src: item.snippet.thumbnails.medium.url,
                    alt: item.snippet.title,
                    title: item.snippet.title,
                    videoId: item.snippet.resourceId.videoId
                }
                return <YoutubeThumbnail {...props} key={index} />
            }))
        }).catch(e => {
            alert("Something went wrong loading Pat's videos :(");
        })
    }, [])

    return (
        <div className="all-analyses">
            {(videos.length > 0) ? videos : renderSkeletons(6)}
        </div>
    );
}