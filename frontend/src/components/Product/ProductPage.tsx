import { useParams } from 'react-router-dom';

export const ProductPage = () => {
    const { id } = useParams();
    console.log(id);

    return(
        <>
        <h1>Hello</h1>
        </>
    );
};
