import React, { useCallback, useState } from 'react';
import clsx from 'clsx';

import './ImagesList.scss';
import { CloseIcon } from '../icons';
import { ImageInfo } from '../../types';
import IconButton from '../IconButton';

interface ImageProps {
    image: ImageInfo;
    onClick: () => void;
    openOnFullScreen: (imagePath: ImageInfo['filepath']) => () => void;
}

const Image: React.FC<ImageProps> = ({
    image: { name, filepath, thumbpath },
    onClick,
    openOnFullScreen
}) => {
    return (
        <div className="images-list__item image">
            <div className="image__view">
                <img
                    src={thumbpath}
                    alt={name}
                    onClick={openOnFullScreen(filepath)}
                />
                <div className="image__remove">
                    <IconButton Icon={CloseIcon} onClick={onClick} />
                </div>
            </div>
            <div className="image__info">
                <div className="image__name">{name}</div>
                <div className="image__date">11 июня 2018</div>
            </div>
        </div>
    );
};

interface ImagesListProps {
    images: ImageInfo[];
    onImageClick: (imageName: ImageInfo['name']) => () => void;
}

const ImagesList: React.FC<ImagesListProps> = ({ images, onImageClick }) => {
    const [fullscreenImage, setFullscreenImage] = useState('');

    const openOnFullScreen = useCallback(
        (imagePath: ImageInfo['filepath']) => () => {
            setFullscreenImage(imagePath);
        },
        []
    );

    const exitFromFullScreen = () => setFullscreenImage('');

    return (
        <div className="images-list">
            {images.map(image => (
                <Image
                    key={image.name}
                    image={image}
                    onClick={onImageClick(image.name)}
                    openOnFullScreen={openOnFullScreen}
                />
            ))}
            <div
                className={clsx(
                    'images-list__fullscreen',
                    fullscreenImage && 'images-list__fullscreen_show'
                )}
                onClick={exitFromFullScreen}>
                <img src={fullscreenImage} alt="Fullscreen Image" />
            </div>
        </div>
    );
};

export default ImagesList;
