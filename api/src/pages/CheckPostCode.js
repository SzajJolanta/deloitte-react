import { useState } from "react";

const CheckPostCodePage = () => {
    const [postCode, setPostCode] = useState('');
    const [result, setResult] = useState()

    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetch(`//api.postcodes.io/postcodes/${postCode}/validate`)
            .then(res => res.json())
            .then(res => {
                setResult(res.result);
            });
    }

    const renderResponse = () => {
        return result ? (<p>Kod jest poprawnuy</p>) : (<p>Kod jest błędny</p>)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input name="postcode" id="postcode" value={postCode} onChange={(e) => setPostCode(e.target.value)} required/>
                <button type="submit">Sprawdź</button>
            </form>
            { 
                result !== undefined && renderResponse() 
            }
        </div>
    )
}

export default CheckPostCodePage;
