import vladik from './img/projects/vladik.jpg';
import moscow1 from './img/projects/moscow1.jpg';
import spb2 from './img/projects/spb2.jpg';

//Vladik3
import Vladik3firstImg from './img/projects/vladik3/1.jpg';
import Vladik3secondImg from './img/projects/vladik3/2.jpg';
import Vladik3thirdImg from './img/projects/vladik3/3.jpg';
import Vladik3fouthImg from './img/projects/vladik3/4.jpg';

//Peter2
import peter2First from './img/projects/piter2/1.jpg';
import peter2Second from './img/projects/piter2/2.jpg';
import peter2Third from './img/projects/piter2/3.jpg';
import peter2Fourth from './img/projects/piter2/4.jpg';

//Moscow1
import Moscow1firstImg from './img/projects/Moscow1/1.jpg';
import Moscow1secondImg from './img/projects/Moscow1/2.jpg';
import Moscow1thirdImg from './img/projects/Moscow1/3.jpg';
import Moscow1fouthImg from './img/projects/Moscow1/4.jpg';

//San-Francisco
import SF1 from './img/projects/SF/1.jpg';
import SF2 from './img/projects/SF/2.jpg';
import SF3 from './img/projects/SF/3.jpg';
import SF4 from './img/projects/SF/4.jpg';
import SF from './img/projects/SF/SF.jpg';

export const dataProjects = [
    {
        id: 'Moscow1',
        image: moscow1,
        date: '01/23/2023',
        header: 'ПРОЕКТ 1',
        city: 'Москва',
        description: 'Хорошие фотографии или видео сделают публикацию более привлекательной. Помогите читателям найти информацию по интересующей их теме. Покажите лучшие материалы, отметив их как избранные. Это хороший и простой способ продвигать нужные публикации.',
        slider: [
            Moscow1firstImg,
            Moscow1secondImg,
            Moscow1thirdImg,
            Moscow1fouthImg
        ]
    },
    {
        id: 'Spb2',
        image: spb2,
        date: '02/23/2023',
        header: 'ПРОЕКТ 2',
        city: 'Санкт-Петербург',
        description: 'Хорошие фотографии или видео сделают публикацию более привлекательной. Помогите читателям найти информацию по интересующей их теме. Покажите лучшие материалы, отметив их как избранные. Это хороший и простой способ продвигать нужные публикации.',
        slider: [
            peter2First,
            peter2Second,
            peter2Third,
            peter2Fourth
        ]
    },
    {
        id: 'Vladik3',
        image: vladik,
        date: '03/23/2023',
        header: 'ПРОЕКТ 3',
        city: 'Владивосток',
        description: 'Хорошие фотографии или видео сделают публикацию более привлекательной. Помогите читателям найти информацию по интересующей их теме. Покажите лучшие материалы, отметив их как избранные. Это хороший и простой способ продвигать нужные публикации.',
        slider: [
            Vladik3firstImg,
            Vladik3secondImg,
            Vladik3thirdImg,
            Vladik3fouthImg
        ]
    },
    {
        id: 'SF4',
        image: SF,
        date: '02/23/2023',
        header: 'Золотые ворота',
        city: 'Сан-Франциско',
        description: 'Хорошие фотографии или видео сделают публикацию более привлекательной. Помогите читателям найти информацию по интересующей их теме. Покажите лучшие материалы, отметив их как избранные. Это хороший и простой способ продвигать нужные публикации.',
        slider: [
            SF1,
            SF2,
            SF3,
            SF4
        ]
    },

];