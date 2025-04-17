import { ReactNode } from "react";
import { Card } from "react-bootstrap";

const InfoCard = (): ReactNode => {
    return (
        <Card style={{ width: "18rem" }} className="border-0">
            <Card.Body>
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <Card.Img variant="top" src="profile.png" />
                </div>
                <br />
                <Card.Title>Caleb Butler</Card.Title>
                <Card.Text>A little about who I am.</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InfoCard;
