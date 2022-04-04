import React from "react";
import './Item.css';

class Item extends React.Component {
    handleItemClick() {
        this.setState({ checked: !this.state.checked })
    }

    render() {
        const { name } = this.props;
        return <li onClick={this.handleItemClick.bind(this)} className="item">{name}</li>
    }
}

export default Item;
