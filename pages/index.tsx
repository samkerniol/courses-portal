import { GetStaticProps } from 'next';
import axios from 'axios';

import { Title, Button, Text, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home(): JSX.Element {
    return (
        <>
            <Title tag='h1'>Текст</Title>

            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Button appearance='primary'>Кнопка</Button>

            <Text description='course'>Курсы</Text>
            <Text description='review'>Отзывы</Text>
            <Text description='advantages'>Преимущества</Text>

            <Tag color='red'>Red</Tag>
            <Tag color='green'>Green</Tag>
            <Tag color='ghost'>Ghost</Tag>
            <Tag color='primary'>Primary</Tag>

            <Rating mutable />
            <Rating rating={4} />
        </>
    );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;

    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', { firstCategory });

    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}