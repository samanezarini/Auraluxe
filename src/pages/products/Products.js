import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar'

function Products() {

    const param = useParams().productsId
    console.log(param)

    return (
        <>
            <Navbar />
        </>
    )
}

export default Products;