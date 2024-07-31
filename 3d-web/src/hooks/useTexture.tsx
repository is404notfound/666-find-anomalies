import { useLoader } from '@react-three/fiber';
import { ClampToEdgeWrapping, RepeatWrapping, TextureLoader } from 'three';
import wallPattern from '../assets/summer-wall-texture.webp';
import dinosaurNewspaper from '../assets/dinosaur-news.jpg';
import geneticNewspaper from '../assets/genetic-news.webp';
import ufoPoster from '../assets/ufo-poster.png';

interface ITexture {
    pattern: string;
    repeat: [number, number];
    wrapping: string;
};

export function useTexture() {
    function usePattern({ pattern, repeat, wrapping }: ITexture) {
        const texture = useLoader(TextureLoader, pattern);
        if (wrapping === 'repeat') {
            texture.wrapS = RepeatWrapping;
            texture.wrapT = RepeatWrapping;
        } else {
            texture.wrapS = ClampToEdgeWrapping;
            texture.wrapT = ClampToEdgeWrapping;
        }
        texture.repeat.set(repeat[0], repeat[1]);

        return texture;
    };

    const wallTexture = usePattern({ pattern: wallPattern, repeat: [3, 1], wrapping: 'repeat' });
    const dinosaurNewsTexture = usePattern({ pattern: dinosaurNewspaper, repeat: [1, 1], wrapping: 'clamp' });
    const geneticNewsTexture = usePattern({ pattern: geneticNewspaper, repeat: [1, 1], wrapping: 'clamp' });
    const ufoPosterTexture = usePattern({ pattern: ufoPoster, repeat: [1, 1], wrapping: 'clamp' });

    return { wallTexture, dinosaurNewsTexture, geneticNewsTexture, ufoPosterTexture };
};