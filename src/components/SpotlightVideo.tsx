import { useContext } from "react"
import { SpotlightContext } from "../contexts/spotlightContext"
import { YoutubeEmbed } from "./YoutubeEmbed";

export const SpotlightVideo: React.FC = () => {
    const spotlightState = useContext(SpotlightContext);
    return (spotlightState?.spotlight?.videoId) ? <YoutubeEmbed videoId={spotlightState.spotlight.videoId} title={spotlightState.spotlight.title} /> :
        <YoutubeEmbed videoId="T-otpq6oI2Q" title="TES4: Oblivion Analysis | A Quick Retrospective" />
}