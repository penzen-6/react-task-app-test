// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

let style = {
    maxWidth: '700px',
};

let btn = {
    cursor: 'pointer',
};

const List = (props) => (
    <ul className="siimple-list">
        <li className="siimple-list-item siimple--bg-white" style={style}>Item 1 <span className="siimple-tag siimple-error siimple-hover" sytle={btn}>Delete</span></li>
        <li className="siimple-list-item siimple--bg-white" style={style}>Item 2 <span className="siimple-tag siimple-error siimple-hover" sytle={btn}>Delete</span></li>
        <li className="siimple-list-item siimple--bg-white" style={style}>Item 3 <span className="siimple-tag siimple-error siimple-hover" sytle={btn}>Delete</span></li>
    </ul>
);

export default List;