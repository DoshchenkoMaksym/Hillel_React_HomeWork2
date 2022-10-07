import React from 'react'

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Stepan',
            age: 25,
            isLogin: true,
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange() {
        this.setState({
            name: 'Mykola',
            age: 30,
            isLogin: !this.state.isLogin,
        })
    };

    render() {
        
        return (

            <div>
                {this.state.isLogin ?
                    <p>Name: {this.state.name}, age: {this.state.age}</p> :
                    null}
                <button onClick={this.handleChange}>
                    {this.state.isLogin ? 'Скрыть' : 'Показать'}
                </button>
            </div>

        )
    }
}

export default UserInfo; 