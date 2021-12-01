import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./ArticleCardContainer.scss";

function ArticleCardContainer() {
  return (
    <>
      <div className="ArticleCardContainer">
        <div className="ArticleCardContainer__container">
          <Card className="ArticleCardContainer__card">
            <CardBody>
              <CardTitle className="ArticleCardContainer__title" tag="h1">
                Card title
              </CardTitle>
              <CardText className="ArticleCardContainer__body">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button className="ArticleCardContainer__button">Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ArticleCardContainer;
