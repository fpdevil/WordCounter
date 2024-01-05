import { useEffect } from 'react';

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - WordCounter`;
    }, [title]);
    return null;
};
