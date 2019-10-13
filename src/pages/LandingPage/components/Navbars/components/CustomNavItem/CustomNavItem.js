import React, { Component } from "react";
import {
    Button,
    Collapse,
    Container, DropdownItem, DropdownMenu, DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    UncontrolledTooltip
} from "reactstrap";
import {Link} from "react-router-dom";


class CustomNavItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    componentDidMount() {}


    render() {

        return (
            <>
                <NavItem>
                    <NavItem>
                        <NavLink href={this.props.attr.href}>
                            {/*<i className="now-ui-icons arrows-1_cloud-download-93"></i>*/}
                            <p>{this.props.attr.name}</p>
                        </NavLink>
                    </NavItem>
                </NavItem>
            </>
        )
    }



};

export { CustomNavItem }