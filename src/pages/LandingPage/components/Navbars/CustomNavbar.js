import React from "react";
import {
    Collapse,
    Container,
    Nav,
    Navbar
} from "reactstrap";

import {CustomNavItem} from "./components/CustomNavItem/CustomNavItem";
import { isLogged } from "../../../../services/userService"


class CustomNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const userIsLogged = isLogged()

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
                                {userIsLogged ? <CustomNavItem attr={{href:'/flights', name:'Vols', icon:'icon'}}/> : null}
                                {userIsLogged ? <CustomNavItem attr={{href:'/profile', name:'Perfil', icon:'icon'}}/> : null}
                                {userIsLogged ? <CustomNavItem attr={{href:'/groups', name:'Equip', icon:'icon'}}/> : null}

                            </Nav>
                        </Collapse>
                        <Collapse
                            className="justify-content-end"
                            navbar
                        >
                            <Nav navbar>
                                {userIsLogged ? null : <CustomNavItem attr={{href:'/login', name:'Log in', icon:'icon'}}/>}
                                {userIsLogged ? <CustomNavItem attr={{href:'/logout', name:'Log out', icon:'icon'}}/> : null}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }



};

export { CustomNavbar }
