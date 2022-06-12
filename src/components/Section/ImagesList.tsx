import React from 'react';

import './ImagesList.scss';
import Button from '../Button';
import { CloseIcon } from '../icons';

const Image: React.FC = () => {
    return (
        <div className="images-list__item image">
            <div className="image__view">
                <img src="" />
                <div className="image__remove">
                    <CloseIcon />
                </div>
            </div>
            <div className="image__info">
                <div className="image__name">Надгробный камень.jpg</div>
                <div className="image__date">11 июня 2018</div>
            </div>
        </div>
    );
};

const ImagesList: React.FC = () => {
    return (
        <>
            <div className="images-list">
                <Image />
                <Image />
                <Image />
            </div>
            <Button text="ДОБАВИТЬ ИЗОБРАЖЕНИЕ" />
        </>
    );
};

export default ImagesList;
