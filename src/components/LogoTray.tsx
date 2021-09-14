import { DiscordLogo } from "./svg/DiscordLogo";
import { PatreonLogo } from "./svg/PatreonLogo";
import { SubscribeStar } from "./svg/SubscribeStar";
import { TwitterLogo } from "./svg/TwitterLogo";
import { YoutubeLogo } from "./svg/YoutubeLogo";

export const LogoTray: React.FC = () => {
    return (
        <div className="logo-tray">
            <a className="logo" title="YouTube" href="https://www.youtube.com/c/PatricianTV">
                <YoutubeLogo />
            </a>
            <a className="logo" title="Discord" href="https://discord.com/invite/u9gq6XD4CA">
                <DiscordLogo />
            </a>
            <a className="logo" title="Twitter" href="https://twitter.com/patrician_tv">
                <TwitterLogo />
            </a>
            <a className="logo" title="Patreon" href="https://www.patreon.com/patricianTV">
                <PatreonLogo />
            </a>
            <a className="logo" title="SubscribeStar" href="https://www.subscribestar.com/Patrician">
                <SubscribeStar />
            </a>
        </div>
    );
}