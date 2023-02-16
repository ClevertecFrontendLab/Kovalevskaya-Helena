import type { Book, Category,FullBook } from 'api/types';
import type { Reviews,User } from 'types';

import avatarSrc from './imgs/avatar.svg';
import photoSrc from './imgs/photo.svg';

// todo удалить картинки из папки imgs
// import coverSrc from './imgs/cover.png';
// import firstSrc from './imgs/first.jpg';
// import fiveSrc from './imgs/five.jpg';
// import fourSrc from './imgs/four.jpg';
// import secondSrc from './imgs/second.jpg';
// import sixSrc from './imgs/six.jpg';
// import thirdSrc from './imgs/third.jpg';

export const books: Book[] = [
    {
        'issueYear': '2019',
        'rating': 3,
        'title': 'Построение бизнес-моделей: Настольная книга стратега и новатора',
        'authors': [
            'Александр Остервальдер'
        ],
        'image': {
            'url': '/uploads/10209755_0_Postroenie_biznes_modeley_Nastolnaya_kniga_stratega_i_novatora_Aleksandr_Ostervalder_Iv_Pine_931aabe20f.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 2,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Разработка ценностных предложений: Как создавать товары и услуги, которые захотят купить потребители',
        'authors': [
            'Александр Остервальдер'
        ],
        'image': {
            'url': '/uploads/10442229_0_5d1c5827e4.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 3,
        'booking': {
            'id': 130,
            'order': true,
            'dateOrder': '2023-01-24T13:31:42.192Z',
            'customerId': 5,
            'customerFirstName': 'Дарья',
            'customerLastName': 'Бичан'
        },
        'delivery': null,
        'histories': [
            {
                'id': 60,
                'userId': 5
            }
        ]
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Хулиномика 3.0: хулиганская экономика. Еще толще. Еще длиннее',
        'authors': [
            'Алексей Марков'
        ],
        'image': {
            'url': '/uploads/10849349_0_89b742cffa.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 4,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 40,
                'userId': 6
            }
        ]
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Жлобология. Откуда берутся деньги и почему не у меня',
        'authors': [
            'Алексей Марков'
        ],
        'image': {
            'url': '/uploads/10827932_0_b1fc6336fa.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 5,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Разумный инвестор: Полное руководство по стоимостному инвестированию',
        'authors': [
            'Бенджамин Грэм'
        ],
        'image': {
            'url': '/uploads/1027828_0_93fce05fab.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 6,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Мастер времени',
        'authors': [
            'Брайан Трейси'
        ],
        'image': {
            'url': '/uploads/10689720_0_Master_vremeni_Brayan_Treysi_e841bace3e.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 7,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Дожим клиента: 28 способов продавать день в день',
        'authors': [
            'Владимир Якуба'
        ],
        'image': {
            'url': '/uploads/e912cd09078d6995ed49cececff66be7_e52b9aa044.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 8,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Продажник на всю голову: Крутые стратегии профессионала',
        'authors': [
            'Владимир Якуба'
        ],
        'image': {
            'url': '/uploads/10782569_0_3cdfa87016.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 9,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': 3,
        'title': 'Продажник идет в сеть. Как продавать через мессенджеры и соцсети',
        'authors': [
            'Владмир Якуба'
        ],
        'image': {
            'url': '/uploads/10903761_0_dd519b2e4c.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 10,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 9,
                'userId': 2
            }
        ]
    },
    {
        'issueYear': '2019',
        'rating': 1.67,
        'title': '101 способ раскрутки личного бренда. Как сделать себе имя',
        'authors': [
            'Вячеслав Семенчук'
        ],
        'image': {
            'url': '/uploads/10859003_0_134ef8a55d.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 11,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 7,
                'userId': 4
            },
            {
                'id': 59,
                'userId': 11
            }
        ]
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Сам себе бренд: Искусство самопрезентации',
        'authors': [
            'Гарри Беквит'
        ],
        'image': {
            'url': '/uploads/10858981_0_Sam_sebe_brend_Iskusstvo_samoprezentacii_m_Rarri_Bekvit_Kristin_Bekvit_36345dbe51.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 12,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Продавая незримое: Руководство по современному маркетингу услуг',
        'authors': [
            'Гарри Беквит'
        ],
        'image': {
            'url': '/uploads/10791050_0_a50d785fac.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 13,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Дело не в кофе: Корпоративная культура Sturbucks',
        'authors': [
            'Говард Бехард'
        ],
        'image': {
            'url': '/uploads/1047625_0_bf65328c95.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 14,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Корпоративная культура Toyota: Уроки для других компаний',
        'authors': [
            'Джеффри Лайкер'
        ],
        'image': {
            'url': '/uploads/10152616_0_a027f27f41.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 15,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'От хорошего к великому. Почему одни компании совершают прорыв, а другие нет...',
        'authors': [
            'Джим Коллинз'
        ],
        'image': {
            'url': '/uploads/10604070_0_fdde108c97.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 16,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Деньги делают деньги: От зарплаты до финансовой свободы',
        'authors': [
            'Дмитрий Лебедев'
        ],
        'image': {
            'url': '/uploads/10926443_0_Dengi_delayut_dengi_Dmitriy_Lebedev_fe1c25beb7.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 17,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Как привести дела в порядок. Искусство продуктивности без стресса',
        'authors': [
            'Дэвид Аллен'
        ],
        'image': {
            'url': '/uploads/1030681_0_Kak_privesti_dela_v_poryadok_iskusstvo_produktivnosti_bez_stressa_Devid_Allen_ed426c115e.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 18,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Жесткий менеджмент. Заставьте людей работать на результат',
        'authors': [
            'Дэн Кеннеди'
        ],
        'image': {
            'url': '/uploads/10408083_0_Zhestkiy_menedzhment_Zastavte_lyudey_rabotat_na_rezultat_Den_Kennedi_7020239fe7.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 19,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'ВкусВилл: Как совершить революцию в ритейле, делая все не так',
        'authors': [
            'Евгений Щепин'
        ],
        'image': {
            'url': '/uploads/10777060_0_8debcb706d.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 20,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Энергия клиента: Как окупается клиентский (человеческий) подход в бизнесе',
        'authors': [
            'Евгений Щепин'
        ],
        'image': {
            'url': '/uploads/10965486_0_9ec35a4c2c.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 21,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Big Money: принципы первых. Откровенно о бизнесе и жизни успешных предпринимателей',
        'authors': [
            'Евгений Черняк'
        ],
        'image': {
            'url': '/uploads/10861429_0_b4e5a2c768.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 22,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Точки контакта. Простые идеи для улучшения вашего маркетинга',
        'authors': [
            'Игорь Манн'
        ],
        'image': {
            'url': '/uploads/10252955_0_Tochki_kontakta_Prostie_idei_dlya_uluchsheniya_vashego_marketinga_Igor_Mann_Dmitriy_Turusin_ac8ddffebc.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 23,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Номер 1. Как стать лучшим в том, что ты делаешь',
        'authors': [
            'Игорь Манн'
        ],
        'image': {
            'url': '/uploads/10355756_0_1babae347a.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 24,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Жажда',
        'authors': [
            'Игорь Рыбаков'
        ],
        'image': {
            'url': '/uploads/Igor_Rybakov_Zhazhda_03e6027493.jpeg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 25,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Действуй! 10 заповедей успеха',
        'authors': [
            'Ицхак Пинтосевич'
        ],
        'image': {
            'url': '/uploads/10217872_0_ae066e6b54.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 26,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2014',
        'rating': null,
        'title': 'Клиенты на всю жизнь',
        'authors': [
            'Карл Сьюэлл'
        ],
        'image': {
            'url': '/uploads/1017697_0_Klienti_na_vsyu_zhizn_Karl_Syuell_Pol_Braun_b1e187d02c.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 27,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Гиперфокус: Как я научился делать больше, тратя меньше времени',
        'authors': [
            'Крис Бэйли'
        ],
        'image': {
            'url': '/uploads/Kris_Bejli_Giperfokus_Kak_ya_nauchilsya_delat_bolshe_tratya_menshe_vremeni_57ded37b41.jpeg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 28,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Финансы для нефинансистов',
        'authors': [
            'Людмила Ярухина'
        ],
        'image': {
            'url': '/uploads/10613523_0_3d0607073f.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 29,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Тонкое искусство пофигизма: Парадоксальный способ жить счастливо',
        'authors': [
            'Марк Мэнсон'
        ],
        'image': {
            'url': '/uploads/10614134_0_1e5d8cd9e0.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 30,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': '45 татуировок менеджера. Правила российского руководителя',
        'authors': [
            'Максим Батырев (Комбат)'
        ],
        'image': {
            'url': '/uploads/10327034_0_9ad72be374.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 31,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': '45 татуировок личности. Правила моей жизни',
        'authors': [
            'Максим Батырев (Комбат)'
        ],
        'image': {
            'url': '/uploads/10761206_0_9e2b334fb5.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 32,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Путь джедая. Поиск собственной методики продуктивности',
        'authors': [
            'Максим Дорофеев'
        ],
        'image': {
            'url': '/uploads/10902363_0_Put_dzhedaya_Poisk_sobstvennoy_metodiki_produktivnosti_Maksim_Dorofeev_74dfef5bd5.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 33,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Джедайские техники. Как воспитать свою обезьяну, опустошить инбокс и сберечь мыслетопливо',
        'authors': [
            'Максим Дорофеев'
        ],
        'image': {
            'url': '/uploads/10584051_0_Dzhedayskie_tehniki_Kak_vospitat_svoyu_obezyanu_opustoshit_inboks_i_sberech_misletoplivo_Maksim_Dorofeev_0805fefdb1.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 34,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Пиши, сокращай: Как создавать сильный текст',
        'authors': [
            'Максим Ильяхов'
        ],
        'image': {
            'url': '/uploads/10534756_0_e30262d68c.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 35,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Ясно, понятно. Как доносить мысли и убеждать людей с помощью слов',
        'authors': [
            'Максим Ильяхов'
        ],
        'image': {
            'url': '/uploads/10962043_0_f5936c92f7.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 36,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Рискуя собственной шкурой: Скрытая асимметрия повседневной жизни',
        'authors': [
            'Нассим Талеб'
        ],
        'image': {
            'url': '/uploads/10734923_0_3735db09cc.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 37,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2012',
        'rating': null,
        'title': 'Как стать бизнесменом',
        'authors': [
            'Олег Тиньков'
        ],
        'image': {
            'url': '/uploads/10204302_0_c3bb9afbeb.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 38,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Дизайн-мышление. Все инструметы в одной книге',
        'authors': [
            'Оливер Кемпкенс'
        ],
        'image': {
            'url': '/uploads/10885498_0_27f9e6e81b.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 39,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'От нуля к единице. Как создать стартап, который изменит будущее',
        'authors': [
            'Питер Тиль'
        ],
        'image': {
            'url': '/uploads/10394145_0_47ee8ad494.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 40,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Спроси маму',
        'authors': [
            'Роб Фитцпатрик'
        ],
        'image': {
            'url': '/uploads/10968986_0_34ca8465ed.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 41,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 3,
                'userId': 1
            }
        ]
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Клуб "5 часов утра". Секрет личной эффективности от монаха, который продал свой "феррари".',
        'authors': [
            'Робин Шарма'
        ],
        'image': {
            'url': '/uploads/10877173_0_c2e206cb40.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 42,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Семь навыков высокоэффективных людей',
        'authors': [
            'Стивен Р. Кови'
        ],
        'image': {
            'url': '/uploads/1018520_0_101ab285cf.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 43,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Как я создал Walmart',
        'authors': [
            'Сэм Уолтон'
        ],
        'image': {
            'url': '/uploads/10549180_0_7676bfd021.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 44,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Huawei: Лидерство, корпоративная культура, открытость',
        'authors': [
            'Тао Тань'
        ],
        'image': {
            'url': '/uploads/3be5f977_ab60_48ff_9276_1308637d2131_d47b4a05d8.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 45,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Бизнес без MBA: самые важные знания о бизнесе для тех, кто начинает собственное дело',
        'authors': [
            'Тинькофф'
        ],
        'image': {
            'url': '/uploads/10802802_0_83f597a859.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 46,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Интеллект-карты. Полное руководство по мощному инструменту мышления',
        'authors': [
            'Тони Бьюзен'
        ],
        'image': {
            'url': '/uploads/10760776_0_52d5bd6da6.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 47,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Продавец обуви. Как я создал Nike',
        'authors': [
            'Фил Найт'
        ],
        'image': {
            'url': '/uploads/10911315_0_Prodavec_obuvi_Kak_ya_sozdal_Nike_Versiya_dlya_detey_i_podrostkov_Fil_Nayt_f6efe6fb47.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 48,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Додо Книга',
        'authors': [
            'Максим Котин'
        ],
        'image': {
            'url': '/uploads/Dodo_kniga_702e2a4239.jpeg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 49,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Big Money: принципы первых. Откровенно о бизнесе и жизни успешных предпринимательниц. Книга 2',
        'authors': [
            'Евгений Черняк'
        ],
        'image': {
            'url': '/uploads/b364bc3c_04d7_11e7_80c5_000c29ae1566_9b7bd3ec_f676_11ea_813d_000c29ae1566_1382b318df.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 50,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2015',
        'rating': null,
        'title': 'Суперпамять',
        'authors': [
            'Тони Бьюзен'
        ],
        'image': {
            'url': '/uploads/1014568_0_4744f1508e.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 51,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': '15 секретов управления временем. Как успешные люди успевают всё',
        'authors': [
            'Кевин Круз'
        ],
        'image': {
            'url': '/uploads/1032391714_c835ddfc0c.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 52,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Черный лебедь',
        'authors': [
            'Нассим Николас Талеб'
        ],
        'image': {
            'url': '/uploads/e04f4b0fb7c03ae0401996fc1028c782_25886b37d5.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 53,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Майнд-менеджмент. Решение бизнес-задач с помощью интеллект-карт',
        'authors': [
            'Сергей Бехтерев'
        ],
        'image': {
            'url': '/uploads/10792059_0_44b87ba445.jpg'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 54,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Нейромаркетинг. Как влиять на подсознание потребителя',
        'authors': [
            'Роджер Дули'
        ],
        'image': {
            'url': '/uploads/1021955469_81c91256ea.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 55,
        'booking': null,
        'delivery': null,
        'histories': [
            {
                'id': 8,
                'userId': 14
            }
        ]
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Принципы',
        'authors': [
            'Рэй Далио'
        ],
        'image': {
            'url': '/uploads/6020019394_43b89b7ee9.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 56,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Новые правила деловой переписки',
        'authors': [
            'Максим Ильяхов'
        ],
        'image': {
            'url': '/uploads/1037902535_00bde23ac1.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 57,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Маркетинговые войны',
        'authors': [
            'Джек Траут',
            'Эл Райс'
        ],
        'image': {
            'url': '/uploads/1030904156_711e68d181.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 58,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Сделай это завтра и другие секреты тайм-менеджмента',
        'authors': [
            'Марки Форстер'
        ],
        'image': {
            'url': '/uploads/6066960809_1c3e8bf8f9.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 59,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Новая поведенческая экономика. Почему люди нарушают правила традиционной экономики и как на этом заработать',
        'authors': [
            'Ричард Талер'
        ],
        'image': {
            'url': '/uploads/6065900304_975e5c1634.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 60,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Карьера менеджера',
        'authors': [
            'Ли Якокка'
        ],
        'image': {
            'url': '/uploads/1009079162_8a69bcb3f9.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 61,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Тестирование бизнес-идей',
        'authors': [
            'Дэвид Блэнд',
            'Алекс Остервальдер'
        ],
        'image': {
            'url': '/uploads/6084791398_dba0a3b1fc.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 62,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Непобедимая компания: Как непрерывно обновлять бизнес-модель вашей организации, вдохновляясь опытом лучших',
        'authors': [
            'Алекс Остервальдер',
            'Ив Пинье',
            'Фред Этьембль',
            'Алан Смит'
        ],
        'image': {
            'url': '/uploads/6061593167_01f052bf69.webp'
        },
        'categories': [
            'Бизнес'
        ],
        'id': 63,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Счастливый ребенок. Универсальные правила',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/6060732985_6d5f8bb332.webp'
        },
        'categories': [
            'Психология',
            'Родителям'
        ],
        'id': 64,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2015',
        'rating': null,
        'title': 'Практический курс счастья',
        'authors': [
            'Джон Кехо'
        ],
        'image': {
            'url': '/uploads/1012371255_a3c279632b.webp'
        },
        'categories': [
            'Психология'
        ],
        'id': 65,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Подсознание может все!',
        'authors': [
            'Джон Кехо'
        ],
        'image': {
            'url': '/uploads/1027833789_d26d341cc1.webp'
        },
        'categories': [
            'Психология'
        ],
        'id': 66,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Мой продуктивный год: Как я проверил самые известные методики личной эффективности',
        'authors': [
            'Крис Бэйли'
        ],
        'image': {
            'url': '/uploads/10571472_0_b89c0f6a0d.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 67,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Женское достоинство - сила притяжения мужчин',
        'authors': [
            'Мила Левчук'
        ],
        'image': {
            'url': '/uploads/10648955_0_1db6c2472e.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 68,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': 5,
        'title': 'Хочу и буду',
        'authors': [
            'Михаил Лабковский'
        ],
        'image': {
            'url': '/uploads/10582784_0_6ba1f42ade.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 69,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Поток: Психология оптимального переживания',
        'authors': [
            'Михай Чиксентмихайи'
        ],
        'image': {
            'url': '/uploads/10274442_0_2cf1ad9ecf.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 70,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Нескучная детская психология. Как общаться с ребенком, чтобы он вас слушался, и слышал',
        'authors': [
            'Сатья Дас'
        ],
        'image': {
            'url': '/uploads/10949964_0_Neskuchnaya_detskaya_psihologiya_Kak_obschatsya_s_rebenkom_chtobi_on_vas_i_slushalsya_i_slishal_Satya_Das_28c77fde4b.jpg'
        },
        'categories': [
            'Психология',
            'Родителям'
        ],
        'id': 71,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Выгорание. Новый подход к избавлению от стресса',
        'authors': [
            'Эмили Нагоски '
        ],
        'image': {
            'url': '/uploads/10909446_0_88340ab92c.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 72,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Медитация и  осознанность: 10 минут в день, которые приведут ваши мысли в порядок',
        'authors': [
            'Энди Паддикомб'
        ],
        'image': {
            'url': '/uploads/10385271_0_7a930430ca.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 73,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Игры, в корторые играют люди',
        'authors': [
            'Эрик Берн'
        ],
        'image': {
            'url': '/uploads/10565611_0_Igri_v_kotorie_igrayut_lyudi_m_Erik_Bern_001fda3be0.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 74,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Люди, которые играют в игры',
        'authors': [
            'Эрик Берн'
        ],
        'image': {
            'url': '/uploads/ljudi_kotorie_igrajut_v_igri_800x800_d1c05e670f.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 75,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Сила воли. Как развить и укрепить',
        'authors': [
            'Келли Макгонигал'
        ],
        'image': {
            'url': '/uploads/6053518200_478b4a0254.webp'
        },
        'categories': [
            'Психология'
        ],
        'id': 76,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Уверенность. Внятное руководство по избавлению от страхов, комплексов и тревог',
        'authors': [
            'Кэролайн Форен'
        ],
        'image': {
            'url': '/uploads/41821787_kerolayn_foren_uverennost_9014e969b5.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 77,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Красная таблетка (книга №1)',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/10689132_0_cabcde68c0.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 78,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Красная таблетка-2. Вся правда об успехе',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/10909152_0_cc5f53fcd4.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 79,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Чертоги разума',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/10718454_0_eba76b8c65.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 80,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Нанопривычки. Маленькие шаги, которые приведут к большим переменам',
        'authors': [
            'Би Джей Фогг'
        ],
        'image': {
            'url': '/uploads/10952394_0_4090195633.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 81,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Осознанное счастье',
        'authors': [
            'Пакчок Ринпоче',
            'Эррик Соломон'
        ],
        'image': {
            'url': '/uploads/101020558_0_1414393932.jpg'
        },
        'categories': [
            'Психология'
        ],
        'id': 82,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Секреты спокойствия "ленивой мамы"',
        'authors': [
            'Анна Быкова'
        ],
        'image': {
            'url': '/uploads/10626944_0_Sekreti_spokoystviya_lenivoy_mami_Anna_Bikova_61672f37fd.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 83,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Самостоятельный ребенок, или Как стать "ленивой мамой"',
        'authors': [
            'Анна Быкова'
        ],
        'image': {
            'url': '/uploads/10507071_0_448402ad71.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 84,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Развивающие занятия "ленивой мамы"',
        'authors': [
            'Анна Быкова'
        ],
        'image': {
            'url': '/uploads/10538154_0_f08240b913.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 85,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2013',
        'rating': null,
        'title': 'Ваш ребенок от 0 до 3. Книга для молодых родителей',
        'authors': [
            'Елена Смирнова'
        ],
        'image': {
            'url': '/uploads/2389005_detail_c289579b34.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 86,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Если с ребенком трудно',
        'authors': [
            'Людмила Петрановская'
        ],
        'image': {
            'url': '/uploads/6953094_1_fb4c5afd73.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 87,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2010',
        'rating': null,
        'title': 'Методика раннего развития. От 6месяцев до 6 лет',
        'authors': [
            'Мария Монтессори'
        ],
        'image': {
            'url': '/uploads/1052205_0_Metodika_rannego_razvitiya_Marii_Montessori_Ot_6_mesyacev_do_6_let_Viktoriya_Dmitrieva_c299bc93fd.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 88,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Мани, или Азбука денег',
        'authors': [
            'Бодо Шефер'
        ],
        'image': {
            'url': '/uploads/1000351843_5be4c2c9fb.webp'
        },
        'categories': [
            'Бизнес',
            'Родителям'
        ],
        'id': 89,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Воспитывая счастливых людей… Как не лишить ребенка детства в погоне за званием "идеальный родитель"',
        'authors': [
            'Любвь Сурудо'
        ],
        'image': {
            'url': '/uploads/4389878_af7a651f38.jpg'
        },
        'categories': [
            'Родителям'
        ],
        'id': 90,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Зачем мы спим.Новая наука о сне и сноведениях',
        'authors': [
            'Мэттью Уолкер'
        ],
        'image': {
            'url': '/uploads/10747771_0_418ede3589.jpg'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 91,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Homo Deus. Краткая история будущего',
        'authors': [
            'Юваль Ной Харари'
        ],
        'image': {
            'url': '/uploads/10673454_0_Homo_Deus_Kratkaya_istoriya_buduschego_Yuval_Harari_3d5bdcbd1f.jpg'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 92,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': '21 урок для XXI века',
        'authors': [
            'Юваль Ной Харари'
        ],
        'image': {
            'url': '/uploads/10919897_0_2c9b74c1ff.jpg'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 93,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Так говорили мудрецы. Афоризмы',
        'authors': [
            'С. Барсов'
        ],
        'image': {
            'url': '/uploads/Tak_govorili_mudretsy_Aforizmy_061dc9816a.jpeg'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 94,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Как быть стоиком',
        'authors': [
            'Массимо Пильюччи'
        ],
        'image': {
            'url': '/uploads/6059543389_ea1dbc93a6.webp'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 95,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2021',
        'rating': null,
        'title': 'Говори  красиво и уверенно. Постановка голоса и речи',
        'authors': [
            'Евгения Шестакова'
        ],
        'image': {
            'url': '/uploads/1005691015_7064cebb9c.webp'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 96,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Краткая история почти всего на свете',
        'authors': [
            'Билл Брайсон'
        ],
        'image': {
            'url': '/uploads/kratkaya_istoriya_pochti_vsego_na_svete_5792ee1da1.jpg'
        },
        'categories': [
            'Нон-фикшн'
        ],
        'id': 97,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Атлант расправил плечи. Часть первая. Непротиворечие',
        'authors': [
            'Айн Рэнд'
        ],
        'image': {
            'url': '/uploads/6049001435_e5b5774cb1.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 98,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Атлант расправил плечи. Часть вторая. Или-или',
        'authors': [
            'Айн Рэнд'
        ],
        'image': {
            'url': '/uploads/6049001426_da8eb22c3b.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 99,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Атлант расправил плечи. Часть третья. А есть А',
        'authors': [
            'Айн Рэнд'
        ],
        'image': {
            'url': '/uploads/6049001431_06f4e779f2.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 100,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Маленький принц',
        'authors': [
            'Антуан де Сент-Экзюпери'
        ],
        'image': {
            'url': '/uploads/cover_a6724f3043.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 101,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2010',
        'rating': null,
        'title': 'Понедельник начинается в субботу',
        'authors': [
            'Аркадий и Борис Стругацкие'
        ],
        'image': {
            'url': '/uploads/31671_eb7f1b6d7d.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 102,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2012',
        'rating': null,
        'title': 'Москва-Петушки',
        'authors': [
            'Венедикт Ерофеев'
        ],
        'image': {
            'url': '/uploads/1035586_0_e948159aa3.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 103,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2011',
        'rating': null,
        'title': 'Записки о Шерлоке Холмсе',
        'authors': [
            'Артур Конан Дойл'
        ],
        'image': {
            'url': '/uploads/10191824_0_Zapiski_o_Sherloke_Holmse_Ser_Artur_Konan_Doyl_55742abb3f.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 104,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Сто лет одиночества',
        'authors': [
            'Габриэль Гарсия Маркес'
        ],
        'image': {
            'url': '/uploads/10609309_0_6a3fca8133.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 105,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Полковнику никто не пишет',
        'authors': [
            'Габриэль Гарсия Маркес'
        ],
        'image': {
            'url': '/uploads/10348653_0_369c9c1da5.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 106,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Вызовите акушерку. Тени Ист-Энда',
        'authors': [
            'Дженифер Уорф'
        ],
        'image': {
            'url': '/uploads/10659753_0_de555cef7f.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 107,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Вызовите акушерку. Прощание с Ист-Эндом',
        'authors': [
            'Дженифер Уорф'
        ],
        'image': {
            'url': '/uploads/10680603_0_08dfd7eeb0.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 108,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Сильмариллион',
        'authors': [
            'Джон Р.Р. Толкин'
        ],
        'image': {
            'url': '/uploads/10492145_0_82521e341f.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 109,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Таинственная история Билли Миллигана',
        'authors': [
            'Дэниел Киз'
        ],
        'image': {
            'url': '/uploads/1037906861_b5adeceb25.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 110,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2012',
        'rating': null,
        'title': 'Титаник',
        'authors': [
            'Милош Губачек'
        ],
        'image': {
            'url': '/uploads/1015870_0_bcc252d7e3.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 111,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Кодекс порядочных людей, или о способах не попасться на удочку мошенника',
        'authors': [
            'Оноре де Бальзак'
        ],
        'image': {
            'url': '/uploads/Onore_de_Balzak_Kodeks_poryadochnyh_lyudej_462b084835.jpeg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 112,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Летнее утро, летняя ночь',
        'authors': [
            'Рэй Бредбери'
        ],
        'image': {
            'url': '/uploads/6016428258_19dfc630df.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 113,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Здесь была Бритт-Мари',
        'authors': [
            'Фредерик Бакман'
        ],
        'image': {
            'url': '/uploads/10673471_0_636c0df653.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 114,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Люди, которые всегда со мной',
        'authors': [
            'Наринэ Абгарян'
        ],
        'image': {
            'url': '/uploads/Narine_Abgaryan_Lyudi_kotorye_vsegda_so_mnoj_9aae66ae54.jpeg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 115,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2014',
        'rating': null,
        'title': 'От полудня до полуночи',
        'authors': [
            'Эрих Мария Ремарк'
        ],
        'image': {
            'url': '/uploads/Erih_Mariya_Remark_Ot_poludnya_do_polunochi_sbornik_0ac31a5be6.jpeg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 116,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': 'Все мои женщины. Пробуждение',
        'authors': [
            'Януш Леон Вишневский'
        ],
        'image': {
            'url': '/uploads/10650207_0_55eef08c8b.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 117,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Маленькие женщины',
        'authors': [
            'Луиза Мэй Олкотт'
        ],
        'image': {
            'url': '/uploads/B08_JH_5_T9_J6_01_SCLZZZZZZZ_SX_500_a9e8d4d2f9.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 118,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Гарри Поттер и проклятое дитя',
        'authors': [
            'Дж. К. Роулинг '
        ],
        'image': {
            'url': '/uploads/10679903_0_7bbab522e0.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 119,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2017',
        'rating': null,
        'title': "Harry Potter and the Philosopher's Stone",
        'authors': [
            'J. K. Rowling'
        ],
        'image': {
            'url': '/uploads/51_Pc_U_Ahn15_L_2d1e67f1ea.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 120,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Цветы для Элджернона',
        'authors': [
            'Дэниел Киз'
        ],
        'image': {
            'url': '/uploads/6053509628_653f992e84.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 121,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Дом в котором...Том 1. Курильщик',
        'authors': [
            'Мариам Петросян'
        ],
        'image': {
            'url': '/uploads/38078_90f4a2d616.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 122,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Дом в котором...Том 2. Шакалиный восьмидневник',
        'authors': [
            'Мариам Петросян'
        ],
        'image': {
            'url': '/uploads/38082_0e54508629.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 123,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Дом в котором...Том 3. Пустые гнезда',
        'authors': [
            'Мариам Петросян'
        ],
        'image': {
            'url': '/uploads/38088_48b123ff43.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 124,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Дневник домового',
        'authors': [
            'Евгений ЧеширКо'
        ],
        'image': {
            'url': '/uploads/6008888071_1200fc05f9.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 125,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2014',
        'rating': null,
        'title': 'The Picture  of Dorian Gray',
        'authors': [
            'Wilde Oscar'
        ],
        'image': {
            'url': '/uploads/81f_RD_4_Ez_Go_L_15c4048a79.jpg'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 126,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2010',
        'rating': 4.5,
        'title': 'Чистый код: создание, анализ и рефакторинг. Библиотека прогаммиста',
        'authors': [
            'Роберт Мартин '
        ],
        'image': {
            'url': '/uploads/1001563239_b0cf866a9f.webp'
        },
        'categories': [
            'Программирование'
        ],
        'id': 127,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2014',
        'rating': null,
        'title': 'Java. Объектно-ориентированное программирование',
        'authors': [
            'Алексей Николаевич'
        ],
        'image': {
            'url': '/uploads/6012958582_79835de350.webp'
        },
        'categories': [
            'Программирование'
        ],
        'id': 128,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Теоретический минимум по Computer Science. Все, что нужно знать программисту и разработчику',
        'authors': [
            'Владсон Феррейра Фило'
        ],
        'image': {
            'url': '/uploads/1022639997_0f1c06f920.webp'
        },
        'categories': [
            'Программирование'
        ],
        'id': 129,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': 0,
        'title': 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
        'authors': [
            'Адитья Бхаргава'
        ],
        'image': {
            'url': '/uploads/image_book_c27c1aaf74.jpg'
        },
        'categories': [
            'Программирование'
        ],
        'id': 130,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2016',
        'rating': null,
        'title': 'Вино. Практический путеводитель',
        'authors': [
            'Мадлен Пакетт'
        ],
        'image': {
            'url': '/uploads/10516002_0_58deebd77f.jpg'
        },
        'categories': [
            'Хобби'
        ],
        'id': 131,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Дизайн. Книга для недизайнеров',
        'authors': [
            'Робин Уильямс'
        ],
        'image': {
            'url': '/uploads/1025027525_a2e92c2a7b.webp'
        },
        'categories': [
            'Дизайн'
        ],
        'id': 132,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Школа дизайна. Шрифт',
        'authors': [
            'Ричард Пулин'
        ],
        'image': {
            'url': '/uploads/10907435_0_3937c2d1d6.jpg'
        },
        'categories': [
            'Дизайн'
        ],
        'id': 133,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Школа дизайна. Макет',
        'authors': [
            'Ричард Пулин'
        ],
        'image': {
            'url': '/uploads/10905898_0_e15299a48e.jpg'
        },
        'categories': [
            'Дизайн'
        ],
        'id': 134,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Как быть счастливым?',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': null,
        'categories': [
            'Детские'
        ],
        'id': 135,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2020',
        'rating': null,
        'title': 'Как научиться дружить?',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/ph_001_4a638f1923.webp'
        },
        'categories': [
            'Детские'
        ],
        'id': 136,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Как устроен мозг?',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/cover1_a4e57025a3.webp'
        },
        'categories': [
            'Детские'
        ],
        'id': 137,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2019',
        'rating': null,
        'title': 'Как исполняются мечты?',
        'authors': [
            'Андрей Курпатов'
        ],
        'image': {
            'url': '/uploads/cover2_aa0efc07fa.webp'
        },
        'categories': [
            'Детские'
        ],
        'id': 138,
        'booking': null,
        'delivery': null,
        'histories': null
    },
    {
        'issueYear': '2018',
        'rating': null,
        'title': 'Harry Potter and the Chamber of Secrets',
        'authors': [
            'J. K. Rowling'
        ],
        'image': {
            'url': '/uploads/6016615311_edce0c111d.webp'
        },
        'categories': [
            'Художественная литература'
        ],
        'id': 139,
        'booking': null,
        'delivery': null,
        'histories': null
    }
];

export const menuList: Category[] = [
    {
        'name': 'Бизнес',
        'path': 'business',
        'id': 1,
        count: 0,
    },
    {
        'name': 'Психология',
        'path': 'psychology',
        'id': 2,
        count: 0,
    },
    {
        'name': 'Родителям',
        'path': 'parents',
        'id': 3,
        count: 0,
    },
    {
        'name': 'Нон-фикшн',
        'path': 'non-fiction',
        'id': 4,
        count: 0,
    },
    {
        'name': 'Художественная литература',
        'path': 'fiction',
        'id': 5,
        count: 0,
    },
    {
        'name': 'Программирование',
        'path': 'programming',
        'id': 6,
        count: 0,
    },
    {
        'name': 'Хобби',
        'path': 'hobby',
        'id': 7,
        count: 0,
    },
    {
        'name': 'Дизайн',
        'path': 'design',
        'id': 8,
        count: 0,
    },
    {
        'name': 'Детские',
        'path': 'childish',
        'id': 9,
        count: 0,
    },
    {
        'name': 'Другое',
        'path': 'other',
        'id': 10,
        count: 0,
    }
];

export const user: User = {id:1, name:'Иван', surname:'Ковалевский', avatar: avatarSrc }

export const reviews:Reviews [] = [
    {id:1,name:'Иван', surname:'Иванов',avatar:photoSrc, date:'5 января 2019',rating:4, review:null},
    {id:2, name:'Николай', surname:'Качков', avatar:photoSrc, date:'20 июня 2018', rating:4, review:'Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.'},
    {id:3,name:'Екатерина', surname:'Беляева',avatar:photoSrc, date:'18 февраля 2018',rating:4, review:null},
];

export const fullBook: FullBook = {
    'id': 128,
    'title': 'Java. Объектно-ориентированное программирование',
    'rating': null,
    'issueYear': '2014',
    'description': 'Учебное пособие предназначено для изучающих объектно-ориентированное программирование в вузе, а также для всех желающих самостоятельно изучить язык программирования Java. Книга охватывает все базовые темы, необходимые для эффективного составления программ на Java, в том числе базовые типы данных, управляющие инструкции, особенности описания классов и объектов в Java, создание пакетов и интерфейсов, перегрузку методов и наследование. Особое внимание уделяется созданию приложений с графическим интерфейсом.\r\nВ первой части книги излагаются основы синтаксиса языка Java. Материала первой части книги достаточно для написания простых программ. Во второй части описываются темы, которые будут интересны тем, кто хочет освоить язык на профессиональном уровне. Каждая глава книги содержит теоретический материал, иллюстрируемый простыми примерами, позволяющими подчеркнуть особенности языка программирования Java. В конце каждой главы первой части имеется раздел с примерами решения задач.\r\nУчебное пособие соответствует Государственному образовательному стандарту 3-го поколения для специальностей «Информатика и вычислительная техника», «Информационные системы и технологии», «Прикладная информатика» и «Фундаментальная информатика и информационные технологии».',
    'publish': '\r\nПитер',
    'pages': '400',
    'cover': 'Мягкий переплет',
    'weight': '555',
    'format': '70x100/16',
    'ISBN': '978-5-469-00044-4',
    'producer': 'Издательский дом «Питер»',
    'authors': [
        'Алексей Николаевич'
    ],
    'images': [
        {
            'url': '/uploads/6012958582_79835de350.webp'
        }
    ],
    'categories': [
        'Программирование'
    ],
    'comments': null,
    'booking': null,
    'delivery': null,
    'histories': null,
}
