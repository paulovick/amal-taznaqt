import React, { Component } from "react";
import LandingPageHeader from "../LandingPage/components/LandingPageHeader/LandingPageHeader";
import './CustomLoginPage.scss'
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader,
    Col,
    Container,
    Form, Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";


class CustomLoginPage extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)

        this.state = {
            user:'',
            password:'',
        }

    }

    componentDidMount() {
        console.log(this.props)
    }

    goToHomeReg(e){
        if (this.state.user == 'marc' && this.state.password == 'marc') {
            this.props.history.push({pathname: '/', attr:{history:this.props.history, login:true}})
        }
    }

    handleChange(value, nameVar) {
        this.setState({[nameVar]: value})
    }


    render() {

        return (
            <>
                <div className="content login-container" style={{ backgroundImage: "url(" + require("assets/img/landing-bg.jpg") + ")" }}>
                    <Container>
                        <Col className="ml-auto mr-auto" md="4">
                            <Card className="card-login card-plain">
                                <Form action="" className="form" method="">
                                    <CardBody>
                                        <InputGroup className={"no-border input-lg"}>
                                            <Input
                                                placeholder="User..."
                                                type="text"
                                                value={this.state.user}
                                                onChange={(e) => this.handleChange(e.target.value, 'user')}
                                            />
                                        </InputGroup>
                                        <InputGroup className={"no-border input-lg"}>
                                            <Input
                                                placeholder="Password..."
                                                type="password"
                                                value={this.state.password}
                                                onChange={(e) => this.handleChange(e.target.value, 'password')}
                                            />
                                        </InputGroup>
                                    </CardBody>
                                    <CardFooter className="text-center">
                                        <Button
                                            style={{backgroundColor:'#437336'}}
                                            block
                                            className="btn-round"
                                            color="info"

                                            onClick={(e) => this.goToHomeReg(e)}
                                            size="lg"
                                        >
                                            Log in
                                        </Button>
                                    </CardFooter>
                                </Form>
                            </Card>
                        </Col>
                    </Container>
                </div>
            </>
        )
    }



};

export { CustomLoginPage }