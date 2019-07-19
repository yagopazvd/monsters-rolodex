import React, { Component } from 'react';

import '../searchbox/SearchBox.styles.css';

export const SearchBox = (props) =>(

    <input
    className="SearchBox"
    type="search"
    id="search"
    name="search"
    placeholder={props.placeholder}
    onChange={props.handleChange}                
    />

)
            
 