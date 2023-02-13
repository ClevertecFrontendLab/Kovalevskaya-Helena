import { type FC } from 'react';

import css from './terms.module.css'


interface TermsProps {
    contentView: string;
}

export const Terms: FC<TermsProps> = ({ contentView }) => (
    <div className={css.container}>
        <h1 className={css.title}>{contentView === 'terms' ? 'Правила пользования' : 'Договор оферты'}</h1>
        <ol className={css.list}>
            <li>
                Идейные соображения высшего порядка,
                а также высокое качество позиционных исследований представляет собой интересный эксперимент проверки экспериментов,
                поражающих по своей масштабности и грандиозности.
                <ol className={css.item}>
                    <li>Задача организации,
                        в особенности же социально-экономическое развитие однозначно определяет каждого участника как
                        способного принимать собственные решения касаемо инновационных методов управления процессами.
                    </li>
                    <li>
                        Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                        рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями.
                        Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
                    </li>
                    <li>
                        Приятно, граждане, наблюдать, как элементы политического процесса,
                        превозмогая сложившуюся непростую экономическую ситуацию,
                        объявлены нарушающими общечеловеческие нормы этики и морали.
                    </li>
                    <li>
                        Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры,
                        будут объединены в целые кластеры себе подобных.
                    </li>
                </ol>

            </li>
            <li>
                C учётом сложившейся международной обстановки,
                консультация с широким активом предоставляет широкие возможности для приоритизации разума над эмоциями.
                <ol>
                    <li>
                        Задача организации,
                        в особенности же социально-экономическое развитие однозначно определяет каждого участника как
                        способного принимать собственные решения касаемо инновационных методов управления процессами.
                        <ol>
                            <li>
                                Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                                рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями.
                                Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
                            </li>
                            <li>
                                Приятно, граждане, наблюдать, как элементы политического процесса,
                                превозмогая сложившуюся непростую экономическую ситуацию,
                                объявлены нарушающими общечеловеческие нормы этики и морали.
                            </li>
                        </ol>
                    </li>
                    <li>Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры,
                        будут объединены в целые кластеры себе подобных.
                    </li>
                </ol>
            </li>
            <li>
                Принимая во внимание показатели успешности,
                укрепление и развитие внутренней структуры требует от нас анализа приоритизации разума над эмоциями.
                <ol>
                    <li>
                        Задача организации,
                        в особенности же социально-экономическое развитие однозначно определяет каждого участника как
                        способного принимать собственные решения касаемо инновационных методов управления процессами.
                        <ol>
                            <li>
                                Не следует, однако, забывать, что разбавленное изрядной долей эмпатии,
                                рациональное мышление играет важную роль в формировании приоритизации разума над эмоциями.
                                Но некоторые особенности внутренней политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.
                            </li>
                            <li>
                                Приятно, граждане, наблюдать, как элементы политического процесса,
                                превозмогая сложившуюся непростую экономическую ситуацию,
                                объявлены нарушающими общечеловеческие нормы этики и морали.
                            </li>
                        </ol>
                    </li>
                    <li>Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической культуры,
                        будут объединены в целые кластеры себе подобных.
                    </li>
                    <li>
                        Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа существующих паттернов поведения.
                        <ol >
                            <li>
                                А ещё представители современных социальных резервов набирают популярность среди определенных слоев населения,
                                а значит, должны быть функционально разнесены на независимые элементы.
                                <ol>
                                    <li>
                                        Стремящиеся вытеснить традиционное производство,
                                        нанотехнологии могут быть объявлены нарушающими общечеловеческие нормы этики и морали.
                                    </li>
                                    <li>
                                        Прежде всего, разбавленное изрядной долей эмпатии,
                                        рациональное мышление однозначно фиксирует необходимость новых предложений.
                                        Являясь всего лишь частью общей картины, независимые государства представлены в исключительно положительном свете.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                    <li>
                        Повседневная практика показывает,
                        что убеждённость некоторых оппонентов требует от нас анализа распределения внутренних резервов и ресурсов.
                    </li>
                </ol>
            </li>
        </ol>

    </div>


)
