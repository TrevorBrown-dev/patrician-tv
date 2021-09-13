import { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
    useEffect(() => {
        const texts = ['This footer is highly edited.', 'Not an Elder Scrolls channel.'];
        setJokeText(texts[Math.floor(Math.random() * texts.length)]);
    }, []);
    const [jokeText, setJokeText] = useState('This footer is highly edited.');
    return (
        <footer className='footer'>
            <div className='joke-of-the-day'>{jokeText}</div>
            <div id='copyright'>&copy; Patrician &mdash; All rights reserved.</div>
        </footer>
    );
};
