import { useLoader } from '@react-three/fiber';
import { ClampToEdgeWrapping, RepeatWrapping, TextureLoader } from 'three';
import wallPattern from '../assets/summer-wall-texture.webp';

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

    return { wallTexture };
};