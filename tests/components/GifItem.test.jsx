const { render, screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Pruebas en <GifItem />', () => { 
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    test('It be match with snapshot', () => { 
        const { container } = render(<GifItem title={ title } url={ url } />);
        expect( container ).toMatchSnapshot();
     });

     test('should show the image with the URL and ALT correctly', () => { 
        render(<GifItem title={ title } url={ url } />)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
      });

      test('should show teh title', () => { 
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
       })
 })