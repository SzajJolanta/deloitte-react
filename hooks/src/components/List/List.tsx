import React from "react";
import Item from "../Item/Item";

interface ListProps {
    data: any;
}

class List extends React.Component<ListProps> {
    render() {
        const { data } = this.props;

        return <ul>
            {
                data.map(item => <Item {...item}/>)
            }
        </ul>
    }
}

export default List;