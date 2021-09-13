import { LogoTray } from "../LogoTray"
import { MostRecentVideo } from "../MostRecentVideo"
import { SpotlightVideo } from "../SpotlightVideo"
import { Patrician } from "../svg/Patrician"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <LogoTray />
            <div className="header-content">
                <div className="pat-left"><Patrician /></div>
                <div className="spotlight-video" id="most-recent-video">
                    <SpotlightVideo />
                </div>
                <div className="pat-right"><Patrician /></div>

            </div>
        </header>
    )
}