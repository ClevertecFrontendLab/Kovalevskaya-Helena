import { useEffect, useState } from 'react';
import { isEqual } from 'lodash';

type Breakpoints = 'lg' | 'md' | 'sm' | 'sx';

const breakpoints: Record<Breakpoints, number> = {
    lg: 1_440,
    md: 768,
    sm: 320,
    sx: 0,
}

type MediaState = Record<Breakpoints, boolean>

const getMediaState = (): MediaState => ({
    lg: window.matchMedia(`(width >= ${breakpoints.lg}px)`).matches,
    md: window.matchMedia(`(${breakpoints.md}px < width < ${breakpoints.lg}px)`).matches,
    sm: window.matchMedia(`(${breakpoints.sm}px < width <= ${breakpoints.md}px)`).matches,
    sx: window.matchMedia(`(width <= ${breakpoints.sm}px)`).matches,
})

export const useMedia = (): MediaState => {
    const [mediaState, setMediaState] = useState<MediaState>(getMediaState());

    useEffect(() => {
        const resizeHandler = () => {
            const nextMediaState = getMediaState();

            if (!isEqual(nextMediaState, mediaState)) {
                setMediaState(nextMediaState);
            }
        }

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [mediaState]);

    return mediaState;
}
