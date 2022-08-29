import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGif } from "../../src/hooks/useFetchGif";

jest.mock('../../src/hooks/useFetchGif');

describe('Testing <GifGrid />', () => {
    const category ='One Punch'
    test('should show loading first', () => { 
        useFetchGif.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category))
     });

     test('should display items when  images have loaded ', () => { 
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ];

        useFetchGif.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={ category } />);
        expect(screen.getAllByRole('img').length).toBe(2);
      })
 });