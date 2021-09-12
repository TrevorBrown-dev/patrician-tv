interface YoutubeThumbnailProps {
    src: string;
    alt: string;
    title: string;
    videoId: string;
}
export const YoutubeThumbnail: React.FC<YoutubeThumbnailProps> = ({ src, alt, title, videoId }) => {
    return (
        <a className="youtube-thumbnail" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} className="image" />
            <div className="title">{title}</div>
        </a>
    );
}