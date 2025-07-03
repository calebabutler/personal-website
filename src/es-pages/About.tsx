import { ReactNode } from "react";
import { Card, Col, Row } from "react-bootstrap";

const About = (): ReactNode => {
    return (
        <>
            <p>
                Vivo con mi esposa, Carla, y nuestros dos gatos, Blue y Walnut.
            </p>
            <p>
                A Blue le encanta dormir y comer Meow Mix. También le encantan
                los aperitivos Fancy Feast. Es muy hablador y le gusta sacar la
                lengua.
            </p>
            <p>
                A Walnut le encanta saltar sobre la gente cuando menos se lo
                esperan. Le gusta que la carguen y la acaricien, y te arañará si
                no la acaricias. Come alimento seco. Es muy juguetona.
            </p>
            <p>A ambos les encantan las croquetas para gatos Temptations.</p>
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
