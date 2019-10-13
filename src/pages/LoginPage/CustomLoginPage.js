import React from "react";
import './CustomLoginPage.scss'
import {
    Button,
    Card,
    CardBody, CardFooter,
    Col,
    Container,
    Form, Input,
    InputGroup,
} from "reactstrap";
import { login } from "../../services/userService"


class CustomLoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user:'',
            password:'',
        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    goToHomeReg(e){
        if (this.state.user === 'marc' && this.state.password === 'marc') {
            login(this.state.user)
            this.props.history.push({pathname: '/', attr:{history:this.props.history}})
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
