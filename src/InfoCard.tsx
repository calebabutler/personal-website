import { ReactNode } from "react";
import { Card } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

const InfoCard = (): ReactNode => {
    const { t } = useTranslation();
    return (
        <Card
            style={{ width: "18rem", position: "sticky", top: "3.6em" }}
            className="border-0"
        >
            <Card.Body>
                <div className="ratio ratio-1x1 rounded-circle overflow-hidden">
                    <Card.Img variant="top" src="headshot.jpg" />
                </div>
                <br />
                <Card.Title>Caleb Butler</Card.Title>
                <Card.Text>
                    {t("email")}:{" "}
                    <a href="mailto:caleb@calebbutler.dev">
                        caleb@calebbutler.dev
                    </a>
                    <br />
                    <Trans t={t} i18nKey="pgp">
                        This <a href="public-key.asc">text</a>
                    </Trans>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default InfoCard;
