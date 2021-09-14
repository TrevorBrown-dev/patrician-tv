import { useContext, useEffect, useState } from "react"
import { SpotlightContext } from "../../contexts/spotlightContext"
import { LogoTray } from "../LogoTray"
import { SpotlightVideo } from "../SpotlightVideo"
import { Patrician } from "../svg/Patrician"

export const Header: React.FC = () => {
    return (
        <header className="header">
            <LogoTray />
            <div className="header-content">
                <div className="pat-left"><Patrician /></div>
                <div className="spotlight-video" id="most-recent-video">
                    <h1 id="most-recent-video" title="Something about a horse...">Most Recent Video</h1>
                    <SpotlightVideo />
                </div>
                <div className="pat-right"><Patrician /></div>

            </div>
        </header>
    )
}