import React, { type FC, useState } from 'react';
import { useMedia } from 'hooks';
import Plug from 'images/noImage.png'
import { type Swiper as TSwiper, FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import css from './swiper.module.css';

import 'swiper/css/pagination'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


interface SliderProps {
    images: string[];
}

export const BigSlider: FC<SliderProps> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<TSwiper | null>(null);

    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, slideThumbActiveClass: css.thumbActive }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={css.mySwiperMain}
                data-test-id='slide-big'

            >
                {images.map((src) => <SwiperSlide key={src}><img src={src} data-test-id='slide-mini' className={css.cover} alt="обложка книги" /></SwiperSlide>)}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={45}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={css.mySwiper}


            >
                {images.map((src) => <SwiperSlide key={src}><img src={src} className={css.slideCover} data-test-id='slide-mini' alt="обложка книги" /></SwiperSlide>)}
            </Swiper>
        </React.Fragment>
    );
}


export const Slider: FC<SliderProps> = ({ images }) => {
    const mainImage = images[0] ?? Plug;

    const { sm, sx } = useMedia();

    if (sm || sx) {

        if (images.length > 1) {
            return (

                <Swiper
                    spaceBetween={0}
                    pagination={{
                        bulletActiveClass: css.bulletActive,
                        clickable: true,
                        clickableClass: css.pagination
                    }}
                    className={css.img}
                    modules={[Pagination]}
                    data-test-id='slide-big'
                >
                    {images.map((src) => <SwiperSlide key={src}><img src={src} data-test-id='slide-mini' className={css.cover} alt="обложка книги" /></SwiperSlide>)}
                </Swiper>
            );
        }

        return <img className={css.cover} data-test-id='slide-big' src={mainImage} alt='book' />;

    }

    if (images.length > 1) {
        return <BigSlider images={images} />
    }

    return <img className={css.img} data-test-id='slide-big' src={mainImage} alt='book' />;
}
