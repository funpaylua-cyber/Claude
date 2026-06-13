export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  aspectRatio: 'tall' | 'wide' | 'square';
  isNew?: boolean;
  isFeatured?: boolean;
}

// TODO: Replace image paths with actual product photos.
// Place your JPG/WEBP images in the /public/images/ folder and update the paths below.
// Recommended image sizes:
//   tall: 600×900px  — portrait bags, clutches
//   wide: 900×600px  — flat lay shots, lifestyle
//   square: 700×700px — detail shots, close-ups

export const products: Product[] = [
  {
    id: 1,
    title: 'Перлова Вечірня',
    description: 'Вечірня сумочка-клатч з білого бісеру з золотими акцентами',
    image: '/images/bag-01.jpg',
    category: 'Клатчі',
    aspectRatio: 'tall',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Бежева Класика',
    description: 'Мінімалістична сумка в тілесних відтінках',
    image: '/images/bag-02.jpg',
    category: 'Мінібеги',
    aspectRatio: 'square',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Золотий Захід',
    description: 'Маленька сумочка з золотистого бісеру',
    image: '/images/bag-03.jpg',
    category: 'Клатчі',
    aspectRatio: 'tall',
    isNew: true,
  },
  {
    id: 4,
    title: 'Кремова Мрія',
    description: 'Ніжна сумочка кольору слонової кістки для особливих виходів',
    image: '/images/bag-04.jpg',
    category: 'Вечірні',
    aspectRatio: 'wide',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Рожева Поетика',
    description: 'Романтична сумочка з пастельного бісеру',
    image: '/images/bag-05.jpg',
    category: 'Мінібеги',
    aspectRatio: 'tall',
  },
  {
    id: 6,
    title: 'Срібний Акцент',
    description: 'Стримана елегантність з срібними намистинами',
    image: '/images/bag-06.jpg',
    category: 'Клатчі',
    aspectRatio: 'square',
    isNew: true,
  },
  {
    id: 7,
    title: 'Натуральний Ліс',
    description: 'Bag із природними відтінками — теракота та пісок',
    image: '/images/bag-07.jpg',
    category: 'Повсякденні',
    aspectRatio: 'tall',
    isFeatured: true,
  },
  {
    id: 8,
    title: 'Молочний Шовк',
    description: 'Ніжна клатч молочно-білого кольору',
    image: '/images/bag-08.jpg',
    category: 'Вечірні',
    aspectRatio: 'wide',
  },
  {
    id: 9,
    title: 'Пудровий Ранок',
    description: 'Маленька сумочка в пудровому відтінку',
    image: '/images/bag-09.jpg',
    category: 'Мінібеги',
    aspectRatio: 'square',
  },
  {
    id: 10,
    title: 'Золота Ера',
    description: 'Розкішна вечірня клатч із металевим бісером',
    image: '/images/bag-10.jpg',
    category: 'Вечірні',
    aspectRatio: 'tall',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 11,
    title: 'Кіно Руж',
    description: 'Сміливий клатч з білого та золотого бісеру',
    image: '/images/bag-11.jpg',
    category: 'Клатчі',
    aspectRatio: 'square',
  },
  {
    id: 12,
    title: 'Ніжний Шепіт',
    description: 'Тендітна сумочка в пастельних відтінках',
    image: '/images/bag-12.jpg',
    category: 'Повсякденні',
    aspectRatio: 'tall',
    isFeatured: true,
  },
];

export const heroImage = '/images/hero-main.jpg';
export const aboutImage = '/images/about-craft.jpg';

export const galleryCategories = ['Усі', 'Клатчі', 'Мінібеги', 'Вечірні', 'Повсякденні'];
