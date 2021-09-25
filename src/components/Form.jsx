// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

const Form = (props) => (
    <form className="siimple-form" onSubmit={props.handleAdd}>
        <div className="siimple-form-field">
            <label className="siimple-label siimple--color-white">Your ToDo</label>
            <input name="title" type="text" className="siimple-input"/> <input type="submit" value="Add" className="siimple-btn--teal"/>
        </div>
    </form>
);

export default Form;