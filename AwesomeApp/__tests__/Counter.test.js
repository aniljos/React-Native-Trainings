import  React from 'react';
import Counter from '../src/components/Counter';
import {render, screen, fireEvent} from '@testing-library/react-native';


it("should render Counter", () => {

    //mount the component
    render(<Counter initCount={5}/>);
    //examine the screen
    let result = screen.getByText("Count : 5", {exact: false});
    expect(result).toBeTruthy();

    //screen.debug();

    fireEvent.press(screen.getByText("Inc", {exact: false}), {});
    result = screen.getByText("Count : 6", {exact: false});
    expect(result).toBeTruthy();

    fireEvent.press(screen.getByText("Decr", {exact: false}), {});
    result = screen.getByText("Count : 5", {exact: false});
    expect(result).toBeTruthy();



});