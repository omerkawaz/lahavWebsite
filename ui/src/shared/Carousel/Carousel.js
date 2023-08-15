import { useEffect, useRef, useState } from "react";
import {
  CarouselWrapper,
  CarouselItemWrapper,
  InnerWrapper,
  IconWrapper,
  Dot,
  ArrowIconRight,
  ArrowIconLeft,
} from "./Carousel.style";
import "./Carousel.css";
import { useSwipeable } from "react-swipeable";

export const CarouselItem = ({ children, activeIndex, isTablet, isMobile }) => {
  return (
    <CarouselItemWrapper
      activeIndex={activeIndex}
      isTablet={isTablet}
      isMobile={isMobile}
    >
      {children}
    </CarouselItemWrapper>
  );
};

const PIVOT = 35;

const Carousel = ({ cardWidth, isTablet, isMobile, children }) => {
  const [activeIndex, setActiveIndex] = useState(PIVOT);
  const [paused, setPaused] = useState(false);
  const dotNext = useRef();
  const dotPrev = useRef();
  const dotCenter = useRef();

  const itemsLength = children.length;

  const nextActiveIndex = () => {
    if (itemsLength - 3 === activeIndex) {
      return setActiveIndex(PIVOT);
    }

    setActiveIndex((activeIndex) => activeIndex + 1);

    if (isMobile) {
      dotNext.current.style.background = dotNext.current.style && "#679889";
      dotNext.current.style.border = dotNext.current.style && "1px solid #679889";

      dotCenter.current.style.border = dotCenter.current.style && "1px solid #aec8c0";
      dotCenter.current.style.background = dotCenter.current.style && "#aec8c0";

      setTimeout(() => {
        dotNext.current.style.background = dotNext.current.style && "#aec8c0";
        dotNext.current.style.border = dotNext.current.style && "1px solid #aec8c0";

        dotCenter.current.style.background = dotCenter.current.style &&  "#7ba699";
        dotCenter.current.style.border = dotCenter.current.style &&  "1px solid #7ba699";
      }, 300);
    }
  };

  const prevActiveIndex = () => {
    if (activeIndex === 0) {
      return setActiveIndex(PIVOT);
    }

    setActiveIndex((activeIndex) => activeIndex - 1);

    if (dotNext.current && dotCenter.current && isMobile) {
      dotPrev.current.style.background = dotPrev.current.style && "#679889";
      dotPrev.current.style.border = dotPrev.current.style && "1px solid #679889";

      dotCenter.current.style.border = dotCenter.current.style && "1px solid #aec8c0";
      dotCenter.current.style.background = dotCenter.current.style && "#aec8c0";

      setTimeout(() => {
        dotPrev.current.style.background = dotPrev.current.style &&  "#aec8c0";
        dotPrev.current.style.border = dotPrev.current.style && "1px solid #aec8c0";

        dotCenter.current.style.border = dotCenter.current.style && "1px solid #7ba699";
        dotCenter.current.style.background = dotCenter.current.style &&  "#7ba699";
      }, 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        nextActiveIndex();
      }
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  const handlers = useSwipeable({
    onSwipedLeft: () => prevActiveIndex(),
    onSwipedRight: () => nextActiveIndex(),
    onTouchStartOrOnMouseDown: () => setPaused(true),
    onTouchEndOrOnMouseUp: () => setPaused(false),
  });

  return (
    <>
      <div
        style={{
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <CarouselWrapper
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          {...handlers}
        >
          <InnerWrapper>
            <CarouselItem
              activeIndex={activeIndex}
              cardWidth={cardWidth}
              isTablet={isTablet}
              isMobile={isMobile}
            >
              {children}
            </CarouselItem>
          </InnerWrapper>
        </CarouselWrapper>
        {!isMobile && (
          <>
            <IconWrapper
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "-60px",
                zIndex: "99",
              }}
            >
              <ArrowIconRight
                size="60px"
                color="#aec8c0"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onClick={() => prevActiveIndex()}
              />
            </IconWrapper>
            <IconWrapper
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "-60px",
                zIndex: "99",
              }}
            >
              <ArrowIconLeft
                size="60px"
                color="#aec8c0"
                style={{ cursor: "pointer" }}
                onClick={() => nextActiveIndex()}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              />
            </IconWrapper>
          </>
        )}
      </div>
      {isMobile && (
        <>
          <Dot ref={dotPrev} light onClick={() => prevActiveIndex()} />
          <Dot ref={dotCenter} />
          <Dot ref={dotNext} light onClick={() => nextActiveIndex()} />
        </>
      )}
    </>
  );
};

export default Carousel;
