import React, { FC, useState } from "react";
import { ItemDetails } from "../../App";
import './Item.css';

const Item: FC<ItemDetails & { removeItem: (id: number) => void }> = ({ name, id, removeItem }) => {
    const [checked, setChecked] = useState(false);

    const handleItemClick = () => {
        setChecked(!checked);
    }

    return <li onClick={handleItemClick} className={`item ${checked && 'isChecked'}`}>
        {name}
        <button onClick={() => removeItem(id)}>Usuń</button>
    </li>
}

export default Item;
