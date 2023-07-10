import { useParams } from 'react-router-dom';

export const ProductPage = () => {
    const { id } = useParams();

    return(
        <>
        <h1>Hello</h1>
        </>
    );
};
