import React, { FC, useState } from "react";
import { ItemDetails } from "../../App";
import Item from "../Item/Item";

interface ListProps {
    data: ItemDetails[];
}

const List: FC<ListProps> = ({ data }) => {
    const [items, setItems] = useState<ItemDetails[]>(data);

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <ul>
            { items.map(item => <Item key={item.id} {...item} removeItem={removeItem}/>) }
        </ul>
    )
}
export default List;