import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import "./ArticleCardContainer.scss";

function ArticleCardContainer() {
  const demo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="ArticleCardContainer">
        <h1 className="mt-5">Recommended Articles</h1>
        <div className="ArticleCardContainer__container">
          {demo.map((d, index) => {
            if (index % 2 === 0) {
              return (
                <div className="ArticleCardContainer__container--right">
                  <Card key={index} className="ArticleCardContainer__card mb-4">
                    <CardBody>
                      <div>
                        <img src={"https://picsum.photos/300/200"} alt="..." />
                      </div>
                      <CardTitle
                        className="ArticleCardContainer__title"
                        tag="h1"
                      >
                        Card title
                      </CardTitle>
                      <CardText className="ArticleCardContainer__body">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="ArticleCardContainer__button">
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            } else {
              return (
                <div className="ArticleCardContainer__container--left">
                  <Card key={index} className="ArticleCardContainer__card mb-4">
                    <CardBody>
                      <div>
                        <img src={"https://picsum.photos/300/200"} alt="..." />
                      </div>
                      <CardTitle
                        className="ArticleCardContainer__title"
                        tag="h1"
                      >
                        Card title
                      </CardTitle>
                      <CardText className="ArticleCardContainer__body">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="ArticleCardContainer__button">
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default ArticleCardContainer;
