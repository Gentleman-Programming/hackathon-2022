import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { guestsInfo } from './SliderData';
import './style-slider.css';
interface Guest {
  id: number;
  image: string;
  name: string;
  links: {
    twitter?: string;
    youtube?: string;
    instagram?: string;
    discord?: string;
    linkedin?: string;
  };
}

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function CustomSlider() {
  const settings = {
    lazyLoad: 'ondemand' as any,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const styled = {
    width: '90vw'
  };

  return (
    <div style={styled}>
      <SliderContainer>
        <Slider {...settings}>
          {guestsInfo.map((guest: Guest) => (
            <div key={guest.id}>
              <img className="img-slide" style={{ margin: '0 auto' }} src={require(`assets/img/${guest.image}`).default} alt={guest.name} />
              <p className="subtitle1">{guest.name}</p>
              <p className="body1">{guest.links.discord}</p>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
}
