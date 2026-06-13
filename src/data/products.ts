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
    title: 'Перлова Класика',
    description: 'Вишукана сумочка з білого перлового бісеру з ланцюжком через плече',
    image: '/images/bag-01.jpg',
    category: 'Клатчі',
    aspectRatio: 'tall',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Кристальний Блиск',
    description: 'Мінібег з переливних кристальних намистин з голографічним ефектом',
    image: '/images/bag-02.jpg',
    category: 'Вечірні',
    aspectRatio: 'square',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Персиковий Захід',
    description: 'Ніжна сумочка з персикового бісеру з золотою застібкою',
    image: '/images/bag-03.jpg',
    category: 'Клатчі',
    aspectRatio: 'tall',
    isNew: true,
  },
  {
    id: 4,
    title: 'Молочний Дует',
    description: 'Два варіанти перлових сумочок — мінібег та класика',
    image: '/images/bag-04.jpg',
    category: 'Мінібеги',
    aspectRatio: 'wide',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Білосніжна',
    description: 'Маленька сумочка з білого бісеру з декором у вигляді метелика',
    image: '/images/bag-05.jpg',
    category: 'Мінібеги',
    aspectRatio: 'tall',
  },
  {
    id: 6,
    title: 'Нічний Акцент',
    description: 'Перлова сумочка з ручкою з темних кристалів — для особливих вечорів',
    image: '/images/bag-06.jpg',
    category: 'Вечірні',
    aspectRatio: 'square',
    isNew: true,
  },
  {
    id: 7,
    title: 'Серце Рубін',
    description: 'Сумочка-серце з темно-червоних кристалів на золотому ланцюжку',
    image: '/images/bag-07.jpg',
    category: 'Клатчі',
    aspectRatio: 'square',
    isFeatured: true,
  },
  {
    id: 8,
    title: 'Любовний Подарунок',
    description: 'Кристальне серце у подарунковому пакуванні Pearl Boutique',
    image: '/images/bag-08.jpg',
    category: 'Вечірні',
    aspectRatio: 'wide',
  },
  {
    id: 9,
    title: 'Кришталева Скринька',
    description: 'Переливна сумочка з голографічних намистин у фірмовій коробці',
    image: '/images/bag-09.jpg',
    category: 'Мінібеги',
    aspectRatio: 'square',
  },
  {
    id: 10,
    title: 'Золота Застібка',
    description: 'Перлова сумочка преміум з золотою поворотною застібкою',
    image: '/images/bag-10.jpg',
    category: 'Вечірні',
    aspectRatio: 'tall',
    isNew: true,
    isFeatured: true,
  },
];

export const heroImage = '/images/hero-main.jpg';
export const aboutImage = '/images/about-craft.jpg';

export const galleryCategories = ['Усі', 'Клатчі', 'Мінібеги', 'Вечірні'];
