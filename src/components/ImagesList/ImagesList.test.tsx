import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ImagesList from './ImagesList';

const testImages = [
    {
        name: '1.jpg',
        filepath: '/1.jpg',
        thumbpath: '/preview/1.jpg'
    },
    {
        name: '2.jpg',
        filepath: '/2.jpg',
        thumbpath: '/preview/2.jpg'
    }
];

it('renders correctly', () => {
    const onImageClick = jest.fn();
    const element = renderer
        .create(<ImagesList images={testImages} onCloseClick={onImageClick} />)
        .toJSON();
    expect(element).toMatchSnapshot();
});

it('checks onCloseClick prop', () => {
    const onImageClick = jest.fn();
    render(
        <ImagesList
            images={testImages.slice(0, 1)}
            onCloseClick={onImageClick}
        />
    );
    const closeIcon = screen.getByTestId('close-icon');
    userEvent.click(closeIcon);
    expect(onImageClick).toHaveBeenCalledTimes(1);
    expect(onImageClick).toHaveBeenCalledWith(testImages[0].name);
});

it('opens on full screen', () => {
    const onImageClick = jest.fn();
    const { container } = render(
        <ImagesList images={testImages} onCloseClick={onImageClick} />
    );
    const fullscreen = container.querySelector('.images-list__fullscreen');
    expect(fullscreen).toBeInTheDocument();
    if (fullscreen) {
        expect(
            fullscreen.classList.contains('images-list__fullscreen_show')
        ).toBeFalsy();
        const image = screen.getByAltText(testImages[0].name);
        userEvent.click(image);
        expect(
            fullscreen.classList.contains('images-list__fullscreen_show')
        ).toBeTruthy();
        userEvent.click(fullscreen);
        expect(
            fullscreen.classList.contains('images-list__fullscreen_show')
        ).toBeFalsy();
    }
});
