import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGif } from "../../src/hooks/useFetchGif";

describe('Testing useFetchGifs custom hook ', () => { 
    test('should return the initial state', () => { 
        const { result } = renderHook(() => useFetchGif('One Punch'));
        const { images, isLoading } = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('should return an array of images and isLoading in false', async () => { 
        const { result } = renderHook(() => useFetchGif('One Punch'));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     });
 });