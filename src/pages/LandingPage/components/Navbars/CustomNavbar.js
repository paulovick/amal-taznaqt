import React, { Component } from "react";
//import './CustomNavbars.scss';
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

import {CustomNavItem} from "./components/CustomNavItem/CustomNavItem";


class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            login:false
        }

    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.location && this.props.location.attr && this.props.location.attr.login){
            this.setState({login:true})
        }
    }

    goTo(e, route){
        console.log(route)
        console.log(this.props)
        if (this.props.attr) {
            console.log('loloo')
            console.log(this.props.attr)
            this.props.attr.history.push({pathname: route, history:this.props.attr.history})
        }
        else {
            console.log('lolaaa')

            this.props.history.push({pathname: route, history:this.props.history})
        }

        //this.props.history.push({pathname: route, props:this.props.history})
    }


    render() {

        return (
            <div>
                <Navbar className={"fixed-top "} expand="lg" style={{backgroundColor:'#437336'}}>
                    <Container>
                        <Collapse
                            className=""
                            isOpen={true}
                            navbar
                        >
                            <Nav navbar>
                                <CustomNavItem attr={{href:'/home', name:'Home', icon:'icon'}}/>
                                <CustomNavItem attr={{href:'/info', name:'Info', icon:'icon'}}/>
                                {this.state.login ? <CustomNavItem attr={{href:'/flights', name:'Vols', icon:'icon'}}/> : null}
                                {this.state.login ? <CustomNavItem attr={{href:'/profile', name:'Perfil', icon:'icon'}}/> : null}
                                {this.state.login ? <CustomNavItem attr={{href:'/groups', name:'Equip', icon:'icon'}}/> : null}

                            </Nav>
                        </Collapse>
                        <Collapse
                            className="justify-content-end"
                            navbar
                        >
                            <Nav navbar>
                                {this.state.login ? null : <CustomNavItem attr={{href:'/login', name:'Log in', icon:'icon'}}/>}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }



};

export { CustomNavbar }