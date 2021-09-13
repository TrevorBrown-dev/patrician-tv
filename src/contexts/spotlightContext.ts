import { createContext } from 'react';
export interface SpotlightProps {
    videoId: string;
    title: string;
}
export interface SpotlightContextProps {
    spotlight: SpotlightProps | null;
    setSpotlight: React.Dispatch<React.SetStateAction<SpotlightProps | null>>;
}
export const SpotlightContext = createContext<SpotlightContextProps | null>(null);
