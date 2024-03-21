import React from 'react';
import Layout from "../layouts/main";

const Rules = () => {
    return (
        <Layout>
            <div className="normalizer"></div>
            <div className="policy">
                <h4>Ниже предоставлен перечень правил с соответствующими наказаниями за их нарушение.</h4>

                <h6>Общие правила:</h6>

                <p>
                    1.1 Отправка 4-х и более одинаковых и похожих сообщений с коротким интервалом.
                    <br/>
                    Временный мут до 1 часа
                </p>

                <p>
                    1.2 Воздействие на других игроков с целью подтолкнуть их к нарушению правил (подстрекательство в чате к нарушениям любых правил).
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.3 Реклама и попытки перенаправить игроков на другие Minecraft сервера.
                    <br/>
                    Блокировка аккаунта до 7 дней + снятие привилегии
                </p>

                <p>
                    1.3.1 Торговля игровыми аккаунтами/предметами/информацией за реальную валюту.
                    <br/>
                    Блокировка аккаунта до 14 дней + снятие привилегии
                </p>

                <p>
                    1.4 Размещение информации, содержащей политическую агитацию реального мира.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.4.1 Пропаганда и демонстрация нацистской, фашистской атрибутики или символики, призывы к разжиганию межнациональной розни.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.5 Размещение ссылок ведущих на подозрительные сайты, пиратский контент, вредоносное ПО, сайты с NSFW-контентом.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.5.1 Размещение ссылок на изображения и видео, содержащие угрозы, клевету, материалы с откровенным сексуальным характером, а также рекламу. Также недопустимо размещение фотографий или других данных игроков без их согласия.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.6 Клевета, дезинформация и дискредитация новичков. Неправомерные оскорбления в сторону администрации и модерации.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.6.1 Оскорбление проекта.
                    <br/>
                    Временный мут до 8 часов
                </p>

                <p>
                    1.7 Оскорбление или затрагивание членов семьи игроков.
                    <br/>
                    Временный мут до 3 часов
                </p>

                <p>
                    1.8 Выдача себя за администрацию/модерацию проекта.
                    <br/>
                    Временный мут до 6 часов
                </p>

                <p>
                    1.9 Ставить никнеймы, что оскорбляют игроков, администрацию, модерацию проекта.
                    <br/>
                    Блокировка аккаунта перманентом
                </p>

                <p>
                    2.0 Необоснованное наказание игроков.
                    <br/>
                    — Заглушение чата без причины/доказательств:
                    <br/>
                    Блокировка аккаунта до 3 часов
                    <br/>
                    — Исключение с сервера без причины/доказательств:
                    <br/>
                    Блокировка аккаунта до 6 часов
                    <br/>
                    — Блокировка без причины/доказательств:
                    <br/>
                    Блокировка аккаунта до 12 часов
                </p>

                <p>
                    2.1 Использование/Хранение читов и любого постороннего ПО.
                    <br/>
                    Блокировка аккаунта до 30 дней + понижение привилегии
                </p>

                <p>
                    2.1.1 Использование модов обеспечивающих преимущество в игровом процессе.
                    <br/>
                    Блокировка аккаунта до 7 дней
                </p>

                <p>
                    2.1.2 Совместная игра с читером.
                    <br/>
                    Блокировка аккаунта до 5 дней
                </p>

                <p>
                    2.2 Взлом или попытка взлома чужого аккаунта, а так же передача аккаунта.
                    <br/>
                    Блокировка аккаунта перманентом
                </p>

                <p>
                    2.3 Умышленное нанесение вреда серверу, такое как создание объектов/построек/механизмов способных повлиять на работоспособность сервера и вызвать задержки.
                    <br/>
                    Блокировка аккаунта до 7 дней
                </p>

                <p>
                    2.3.1 Использование уязвимости сервера (багов, дюпов).
                    <br/>
                    Блокировка аккаунта до 7 дней
                </p>

                <p>
                    2.4 Обход любого типа наказания.
                    <br/>
                    Выдача повторного наказания
                </p>

                <p>
                    2.5 Многочисленные нарушения правил, вредительство серверу/игрокам.
                    <br/>
                    Наказание выдаётся на усмотрение администрации.
                </p>

                <p>
                    Правила для модераторов:
                    <br/>
                    — При выдаче наказания, модератор обязан иметь скриншот или видеозапись нарушения.
                    <br/>
                    — Использование игровых полномочий во вред серверу.
                    <br/>
                    — Создание помехи для игры при телепортации к другому игроку.
                    <br/>
                    — Преждевременное снятие наказания.
                    <br/>
                    — Оскорбления, унижения и всяческие провокации игроков.
                    <br/>
                    — Слив конфиденциальной информации в общий доступ.
                    <br/>
                    — Модератор обязан вести себя адекватно.
                </p>

                <h6>
                    Запрещенные моды:
                </h6>

                <p>
                    Ниже предоставлен список запрещенных модов.
                    Список может дорабатываться с течением времени.
                </p>

                <p>
                    Список:
                    <br/>
                    ItemScroller;
                    <br/>
                    AutoFish;
                    <br/>
                    AutoTotem;
                    <br/>
                    AutoMyst;
                    <br/>
                    TopkaScroller;
                    <br/>
                    Elytra Swap;
                    <br/>
                    FreeCam;
                    <br/>
                    ReplayMod (может быть выдано разрешение YT-участникам);
                    <br/>
                    ItemScroller;
                    <br/>
                    Baritone;
                    <br/>
                    Ресурспак x-ray;
                </p>

                <h6>
                    Список разрешенных программ для проверки на читы:
                </h6>

                <p>
                    Ниже представлен список программ для проверки на читы, право на установку
                    которых есть только у модераторов. Список может дорабатываться с течением времени.
                </p>

                <p>
                    Список:
                    <br/>
                    Process Hacker
                    <br/>
                    Shellbag Analyzer
                    <br/>
                    Everything
                    <br/>
                    Wise JetSearch
                    <br/>
                    LastActivityView
                    <br/>
                    USBDeview
                    <br/>
                    WinPrefetchView
                </p>

                <p>
                    Если у вас появились вопросы или просьбы относительно правил или сервера в целом, просим обратиться к нам в поддержку: <a
                    href="https://discord.gg/4Ph6MTtyNy" target={"_blank"} rel="noreferrer">https://discord.gg/4Ph6MTtyNy</a>
                </p>
            </div>
        </Layout>
    );
};

export default Rules;