import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Projects() {
  const items = [1, 2, 3, 4, 5];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [responsive, setResponsive] = useState({ 1024: { items: 2 } });
  const [galleryItems, setGalleryItems] = useState(setGallery());

  const slideTo = i => setCurrentIndex(i);
  const onSlideChanged = e => setCurrentIndex(e.item);

  const slideNext = () => setCurrentIndex(currentIndex + 1);

  const slidePrev = () => setCurrentIndex(currentIndex - 1);

  const thumbItem = (item, i) => <span onClick={() => slideTo(i)}>* </span>;

  // const slideNext = () =>
  //   this.setState({ currentIndex: this.state.currentIndex + 1 });

  //  const  slidePrev = () =>
  //     this.setState({ currentIndex: this.state.currentIndex - 1 });

  // const thumbItem = (item, i) => <span onClick={() => slideTo(i)}>* </span>;

  function setGallery() {
    return items.map(i => <h2 key={i}> {i}</h2>);
  }

  return (
    <div>
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        items={galleryItems}
        responsive={responsive}
        slideToIndex={currentIndex}
        onSlideChanged={onSlideChanged}
      />

      <ul>{items.map(thumbItem)}</ul>
      <button onClick={() => slidePrev()}>Prev button</button>
      <button onClick={() => slideNext()}>Next button</button>
    </div>
  );
}
