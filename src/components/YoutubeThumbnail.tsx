import { useContext } from 'react';
import { SpotlightContext } from '../contexts/spotlightContext';

interface YoutubeThumbnailProps {
    src: string;
    alt: string;
    title: string;
    videoId: string;
}
export const renderSkeletons = (num: number): JSX.Element[] => {
    const skeletons = [];
    for (let i = 0; i < num; i++) {
        skeletons.push(<YoutubeThumbnailSkeleton key={i} />);
    }
    return skeletons;
};
export const YoutubeThumbnailSkeleton: React.FC = () => {
    return (
        <div className='youtube-thumbnail'>
            <div className='image-placeholder'></div>
            <div className='title-placeholder'></div>
        </div>
    );
};

export const YoutubeThumbnail: React.FC<YoutubeThumbnailProps> = ({ src, alt, title, videoId }) => {
    const spotlightState = useContext(SpotlightContext);
    const handleThumbnailClick = () => {
        spotlightState?.setSpotlight({ videoId, title });
    };
    return (
        <div className='youtube-thumbnail' onClick={(e) => handleThumbnailClick()}>
            <img src={src} alt={alt} className='image' />
            <a href={`https://www.youtube.com/watch?v=${videoId}`} onClick={(e) => e.stopPropagation()} target='_blank' rel='noopener noreferrer'>
                <div className='title'>{title}</div>
            </a>
        </div>
    );
};
