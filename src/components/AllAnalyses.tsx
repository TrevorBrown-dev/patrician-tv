import { useEffect, useState } from "react";
import { youtube } from "../apis/youtube";
import { renderSkeletons, YoutubeThumbnail } from "./YoutubeThumbnail";

export const AllAnalyses: React.FC = () => {
    const mapVideos = (data: any) => {
        setVideos(data.items.map((item: any, index: number) => {
            const props = {
                src: item.snippet.thumbnails.medium.url,
                alt: item.snippet.title,
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId
            }
            return <YoutubeThumbnail {...props} key={index} />
        }))

    }
    const [videos, setVideos] = useState<JSX.Element[]>([]);
    useEffect(() => {
        let res = localStorage.getItem('spotlight') || "";
        if (res) {
            const data = JSON.parse(res);
            mapVideos(data);
        } else {
            youtube.get('/playlistItems', {
                params: {
                    playlistId: "PL8DlBi8nE56xa2hnQk58K7jHg1cC5LmzX",
                    maxResults: "25"
                }
            }).then(async (res) => {
                localStorage.setItem('spotlight', JSON.stringify(res.data));
                mapVideos(res.data);
            }).catch(e => {
                alert("Something went wrong loading Pat's videos :(");
            })

        }
    }, [])

    return (
        <div className="all-analyses">
            {(videos.length > 0) ? videos : renderSkeletons(6)}
        </div>
    );
}