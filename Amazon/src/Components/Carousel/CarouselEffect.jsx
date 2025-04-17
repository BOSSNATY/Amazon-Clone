import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./carousel.module.css";

function CarouselEffect() {
  return (
    <div className={classes.fullPage}>
      <div className={classes.hero__img}>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img
              src="https://m.media-amazon.com/images/I/61AnASun+qL._SX3000_.jpg"
              className={classes.carouselImage}
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              src="https://m.media-amazon.com/images/I/61A-FJoXloL._SX3000_.jpg"
              className={classes.carouselImage}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
              className={classes.carouselImage}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              className={classes.carouselImage}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg"
              className={classes.carouselImage}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselEffect;
