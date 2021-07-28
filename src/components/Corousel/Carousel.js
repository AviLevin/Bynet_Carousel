import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import classes from './Carousel.module.css';

class CarouselImages extends React.Component {
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
    fetch("./data.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
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
        <div className={classes.container}>
          <Carousel>
            {items.map((item) => (
              <Carousel.Item>
                <img
                  className="d-block "
                  src={item.pic_url}
                  alt="First slide"
                  style={{ width: "100px", height: "100px" }}
                />

                <br></br>
                <br></br>
                <Carousel.Caption>  
                  <h3>{item.title}</h3>
                  <p>
                  {item.email}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      );
    }
  }
}

export default CarouselImages;
