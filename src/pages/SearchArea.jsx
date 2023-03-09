import { useParams } from 'react-router-dom'

const SearchArea = () => {
    const { area } = useParams()
    return (
        <h1>{area}</h1>
    );
}

export default SearchArea;