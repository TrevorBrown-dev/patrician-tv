interface YoutubeEmbedProps {
    videoId: string;
    title: string;
}
export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title }) => {
    return (
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    );
}