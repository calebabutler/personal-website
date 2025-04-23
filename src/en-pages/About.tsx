import { ReactNode } from "react";
import { Card, Col, Row } from "react-bootstrap";

const About = (): ReactNode => {
    return (
        <>
            <p>I live with my fiancée, Carla, and two cats, Blue and Walnut.</p>
            <p>
                Blue loves to sleep and eat Meow Mix cups. He also loves the
                Fancy Feast Appetizers. He is very talkative. He likes to stick
                his tongue out.
            </p>
            <p>
                Walnut loves to jump onto people when they least expect it. She
                likes being held and petted, and she will scratch you if you do
                not pet. She eats dry food. She is very playful.
            </p>
            <p>They both love the Temptations cat treats.</p>
            <Row xs={2} className="g-4">
                <Col>
                    <Card className="h-100 border-0 text-center">
                        <Card.Img src="blue.jpg" />
                        <Card.Body>
                            <Card.Text>
                                <i>Blue</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 border-0 text-center">
                        <Card.Img src="walnut.jpg" />
                        <Card.Body>
                            <Card.Text>
                                <i>Walnut</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default About;
