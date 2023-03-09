import { useParams } from 'react-router-dom'

const SearchCategory = () => {

    const { cat } = useParams()
    return (
        <h1>{cat}</h1>
    );
}

export default SearchCategory;