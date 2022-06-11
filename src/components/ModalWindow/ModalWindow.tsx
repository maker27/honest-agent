import React from 'react';

import './ModalWindow.scss';

const ModalWindow: React.FC = () => {
    return (
        <div className="modal-window">
            <div className="modal-window__header">Удалить карточку</div>
            <div className="modal-window__content">
                Отправить карточку организации в архив?
            </div>
            <div className="modal-window__buttons">
                <div className="modal-window__button modal-window__button_cancel">
                    Отмена
                </div>
                <div className="modal-window__button modal-window__button_delete">
                    Удалить
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
