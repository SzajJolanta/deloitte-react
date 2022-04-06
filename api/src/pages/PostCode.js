import { useEffect, useState } from "react";

const PostCodePage = ({ handleError }) => {
    const [postCode, setPostCode] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchCode = () => {
        fetch('https://api.postcodes.io/random/postcodesaa')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPostCode(data.result);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    // const fetchCode = async () => {
    //     try {
    //         const data = await fetch('https://api.postcodes.io/random/postcodesss');
    //         const res = await data.json();
            
    //         setPostCode(res.result);
    //     } catch(err) {
    //         console.log('asdad');
    //         handleError();
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    useEffect(() => {
        fetchCode();
    }, [])

    const renderContent = () => postCode ? ( 
        <div>
            {postCode.country} {postCode.postcode}
        </div>
    ) : null;

    return isLoading ? (
        <p>Trwa wyszukiwanie kodu</p>
    ) : renderContent();
}

export default PostCodePage;
