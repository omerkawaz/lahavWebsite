import { useEffect, useState } from "react";
import ReviewsService from "../../services/ReviewsService";
import {
  Wrapper,
  StyledCardReview,
  Avatar,
  CardTitle,
  CardHeader,
  CardBody,
  TextDate,
} from "./Reviews.style";
import { BsFacebook } from "react-icons/bs";
import Text from "../../shared/Text";
import { imageUrl } from "../../services/HttpService";
import moment from "moment";
import "moment/locale/he";
import Carousel, { CarouselItem } from "../../shared/Carousel/Carousel";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { v4 as uuidv4 } from "uuid";

const CardReview = ({
  fullname,
  img,
  review,
  link,
  date,
  isTablet,
  isMobile,
}) => {
  const openProfile = () => window.open(link, "_blank");

  return (
    <StyledCardReview isTablet={isTablet} isMobile={isMobile}>
      <CardHeader>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar img={img} onClick={openProfile} />
          <CardTitle>
            <span onClick={openProfile}>{fullname}</span>
            <TextDate onClick={openProfile}>{date}</TextDate>
          </CardTitle>
        </div>
        <BsFacebook
          size="24px"
          color="#2374E1"
          style={{ cursor: "pointer" }}
          onClick={openProfile}
        />
      </CardHeader>
      <CardBody>{review}</CardBody>
    </StyledCardReview>
  );
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const isTablet = useMediaQuery("(max-width: 1420px)");
  const isMobile = useMediaQuery("(max-width: 990px)");

  useEffect(() => {
    ReviewsService.getReviews()
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{marginBottom: "50px"}}>
      <Text
        xxl
        bold
        style={{
          display: "flex",
          margin: "30px 0",
          justifyContent: "center",
        }}
      >
        ביקורות
      </Text>
      <Wrapper isTablet={isTablet} isMobile={isMobile}>
        {/* the Card with with the spaces (margin left and right) */}
        <Carousel cardWidth="430" isMobile={isMobile} isTablet={isTablet}>
          {reviews.length > 0 ? (
            [
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
              ...reviews,
            ].map((review) => {
              const date = review.date
                ? moment(review.date).locale("he").fromNow()
                : null;

              return (
                <CarouselItem key={uuidv4()}>
                  <CardReview
                    isMobile={isMobile}
                    isTablet={isTablet}
                    key={review.id}
                    fullname={review.fullname}
                    img={imageUrl + review?.avatar?.url}
                    review={review.review}
                    link={review.link}
                    date={date}
                  />
                </CarouselItem>
              );
            })
          ) : (
            <div></div>
          )}
        </Carousel>
      </Wrapper>
    </div>
  );
};

export default Reviews;
