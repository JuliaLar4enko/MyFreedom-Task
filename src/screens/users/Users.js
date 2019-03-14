import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers, createUser, deleteUser } from '../../redux/actions/index';

class Users extends Component {
    state = {
        email: '',
        password: ''
    };

    componentDidMount() {
        this.props.fetchUsers();
    }

    handleChange = (e)=>{
        const {name, value} = e.target;
        this.setState({[name]:value});
    };

    handleSubmit = (e)=>{
        e.preventDefault();
        const {email, password} = this.state;

        const user = {
            email: email,
            password: password,
        };

        this.props.createUser(user);

        this.setState({email:'', password:''});
    };

    handleDelete = (e) => {
        let id = e.target.value;
        this.props.deleteUser(id);
    };

    render() {
        const { users } = this.props;
        const { email, password } = this.state;

        return (
            <div className="container">
                <h2>Добавить нового</h2>
                <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
                    <input name="email" className="form-control mr-2" type="email"  value={email} onChange={this.handleChange}/>
                    <input name="password" className="form-control mr-2" type="password"  value={password} onChange={this.handleChange}/>
                    <button type="submit" className="btn btn-success">Добавить</button>
                </form>

                <h2>Список пользователей</h2>
                <ul>
                    {users.map(user => {
                        return (
                            <li key={user._id} className="mb-3">
                                {user.email} <button value={user._id} className="btn btn-sm btn-secondary" onClick={this.handleDelete}>Удалить</button>
                            </li>
                        )
                    })}
                </ul>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users.items
    }
};
// или
// const mapStateToProps = ({ users }) => ({ users: users.items });
export default connect(mapStateToProps, { fetchUsers, createUser, deleteUser })(Users);