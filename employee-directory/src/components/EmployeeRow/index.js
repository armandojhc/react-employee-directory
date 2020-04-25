import React, { Component } from 'react';

class EmployeeRow extends Component {

    render() {
        return (
            <tr>
                <td><img alt="Employee" src={this.props.picture} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>@mdo</td>
                <td></td>
            </tr>
        );
    }
}

export default EmployeeRow;