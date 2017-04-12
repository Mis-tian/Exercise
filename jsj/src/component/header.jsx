import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

Header.propTypes = {
    
};

export default Header;