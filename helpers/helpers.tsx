import { TopLevelCategory } from '../interfaces/toppage.iterface';
import { firstLevelMenuItem } from '../interfaces/menu.interface';

import { CoursesIcon } from './icons/courses.svg';
import { ServicesIcon } from './icons/services.svg';
import { BooksIcon } from './icons/books.svg';
import { ProductsIcon } from './icons/products.svg';

export const firstLevelMenu: firstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const convertNum = (num: number): string => {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/, ' ') + ' ₽';
};

export const declOfNum = (num: number, titles: string[]): string => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]];
};