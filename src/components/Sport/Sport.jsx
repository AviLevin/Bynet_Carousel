import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import classes from '../Food/Carousel.module.css';

class Sport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      current: 1,
      isNext: true,
    };
  }

  componentDidMount() {
    fetch("https://pixabay.com/api/?key=24336337-28abf76991737630cf9b0b5ea&q=sport&image_type=photo&pretty=true")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.hits
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(items);


      return (
        <div className={classes.container} >

          <style type="text/css">
            {`
    .carousel-inner {
      background-color: purple;
      border-radius: 20px;
    }

  
    `}
          </style>
          <Carousel interval={1000}
            indicators={false} controls={true}>
            {items.map((item) => (
              <Carousel.Item className={classes.item}>
                <img
                  className="d-block "
                  src={item.webformatURL}
                  alt="First slide"
                // style={{ width: "200px", maxHeight: "200px" }}
                />

                <br></br>
                <br></br>
                <Carousel.Caption>

                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>


          <h4>showing sport collection</h4>
        </div>
      );
    }
  }
}

export default Sport;
