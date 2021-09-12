import { MostRecentVideo } from "../MostRecentVideo"
import { Patrician } from "../svg/Patrician"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>PatrictianTV</h1>
            <div className="header-content">
                <div className="pat-left"><Patrician /></div>
                <div className="spotlight-video" id="most-recent-video">
                    <MostRecentVideo />
                </div>
                <div className="pat-right"><Patrician /></div>

            </div>
        </header>
    )
}