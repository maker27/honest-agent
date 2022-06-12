import React from 'react';
import clsx from 'clsx';

import './Main.scss';
import { ClassNameProps } from '../../types';
import {
    BackIcon,
    DeleteIcon,
    EditIcon,
    LinkedIcon,
    RotationIcon
} from '../icons';
import Section, { Records } from '../Section';
import ImagesList from '../Section/ImagesList';

const Main: React.FC<ClassNameProps> = ({ className }) => {
    return (
        <div className={clsx('main', className)}>
            <div className="main__header header">
                <div className="header__link">
                    <BackIcon />К списку юридических лиц
                </div>
                <div className="header__buttons">
                    <LinkedIcon />
                    <RotationIcon />
                    <DeleteIcon />
                </div>
            </div>
            <div className="main__content">
                <div className="main__title">
                    Перспективные захоронения
                    <EditIcon />
                </div>
                <Section className="main__section" title="Общая информация">
                    <Records
                        records={[
                            [
                                'Полное название',
                                'ООО Фирма “Перспективные захоронения”'
                            ],
                            ['Договор', '12345 от 12.03.2015'],
                            ['Форма', 'ООО'],
                            ['Тип', 'Агент, Подрядчик']
                        ]}
                    />
                </Section>
                <Section className="main__section" title="Контактные данные">
                    <Records
                        records={[
                            ['ФИО', 'Григорьев Сергей Петрович'],
                            ['Телефон', '+7 (916) 216-55-88'],
                            ['Эл. почта', 'grigoriev@funeral.com']
                        ]}
                    />
                </Section>
                <Section className="main__section" title="Приложенные фото">
                    <ImagesList />
                </Section>
                <div className="main__footer footer">
                    <div className="footer__copyright">
                        © 1992 - 2020 Честный Агент © Все права защищены.
                    </div>
                    <div className="footer__phone">8 (495) 150-21-12</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
