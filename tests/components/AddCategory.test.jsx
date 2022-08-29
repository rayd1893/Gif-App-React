import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Testing <addCategory />', () => { 
    test('should change the value of textfield', () => { 
        render(<AddCategory onAddCategory={ () => { } }/>)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target:{value: 'Saitama'} })
        expect(input.value).toBe('Saitama');
     });

     test('should call to function onAddCategory if the input has value', () => { 
        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target:{value: inputValue} });
        fireEvent.submit(form);
        // screen.debug();
        expect(input.value).toBe('')
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
      });

      test('should not call onAddCategory function if input is empty', () => {
        const onAddCategory = jest.fn();

        render(<AddCategory onAddCategory={ onAddCategory }/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target:{value: ''} });
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
        expect(onAddCategory).not.toHaveBeenCalled();
        });
 })