import React from 'react';
class TextInput extends React.Component {
    render() {
        return (
            <input
                type="text"
                value=''
                onChange={this.handleChange}
            />
        );

    }
}
export default TextInput