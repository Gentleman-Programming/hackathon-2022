import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import { guestsInfo } from './SliderData';
import './style-slider.css';

interface Links {
  [key: string]: string | undefined;
  twitter?: string;
  youtube?: string;
  instagram?: string;
  discord?: string;
  linkedin?: string;
}
interface Guest {
  id: number;
  image: string;
  name: string;
  links: Links;
  iconMedia: Links;
}

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export function CustomSlider() {
  const settings = {
    lazyLoad: 'ondemand' as any,
    autoplay: true,
    autoplaySpeed: 2200,
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
              <div className="socialContainer">
                {Object.keys(guest.links).map((key: string) => (
                  <p key={key} className="body1">
                    <a href={guest.links[key]} target="blank">
                      <img className="iconMedia" src={guest.iconMedia[key]} alt="" />
                    </a>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </div>
  );
}
