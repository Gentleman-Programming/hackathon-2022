import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import {guestsInfo} from './SliderData';

const guestsInfo = [
  {
    id: 0,
    image: 'Alan.png',
    name: 'Alan Buscaglia',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum.',
  },
  {
    id: 1,
    image: 'AnnelisFuenmayor.png',
    name: 'Annelis Fuenmayor',
    links: {
      twitter: 'https://twitter.com/G_Programming',
      youtube: 'https://www.youtube.com/c/GentlemanProgramming',
      instagram: 'https://www.instagram.com/gentlemanprogramming/',
      discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 2,
    image: 'Dominicode.png',
    name: 'Dominicode',
    links: {
      twitter: 'https://twitter.com/G_Programming',
      youtube: 'https://www.youtube.com/c/GentlemanProgramming',
      instagram: 'https://www.instagram.com/gentlemanprogramming/',
      discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 3,
    image: 'LaraDiaz.png',
    name: 'Lara Díaz',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 4,
    image: 'LeiferMendez.png',
    name: 'Leifer Mendez',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 5,
    image: 'Neryad.png',
    name: 'Neryad',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 6,
    image: 'NicolasMolina.png',
    name: 'Nicolas Molina',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
  {
    id: 7,
    image: 'PedroPlasencia.png',
    name: 'Pedro Plasencia',
    links: {
        twitter: 'https://twitter.com/G_Programming',
        youtube: 'https://www.youtube.com/c/GentlemanProgramming',
        instagram: 'https://www.instagram.com/gentlemanprogramming/',
        discord: 'https://discord.gg/KEavKkDc5Y',
    },
    description:
      'Maecenas id urna lobortis, laoreet arcu sit amet, convallis ligula. Duis a ipsum tellus. Nam vulputate nulla nunc, eget tincidunt felis lobortis quis. In hac habitasse platea dictumst. Vestibulum nec mauris quis tortor efficitur blandit. Donec mattis magna ante, tincidunt porttitor lacus condimentum eu. Integer nisl dui, mattis consectetur pharetra sit amet, dapibus quis felis. Nam posuere pharetra purus, et gravida eros tincidunt in. Nullam fermentum sollicitudin nisl, ut faucibus purus tristique nec. Cras pharetra felis at blandit sodales. Pellentesque luctus dolor nulla, a pharetra diam rutrum ultrices. Aliquam erat volutpat. Suspendisse dictum fringilla neque, at molestie libero scelerisque nec. Cras metus nibh, porta nec rhoncus non, finibus vel ipsum. <br /> <br /> Integer hendrerit tellus non lacus tristique, sit amet cursus ante maximus. In consectetur vehicula vulputate. Etiam sed vulputate purus. Phasellus eleifend ligula eu condimentum iaculis. Fusce at dapibus dolor. Etiam at mi non nunc pretium pellentesque. Proin posuere nisi quis est pellentesque sodales. In quis nibh in nulla auctor ultrices ac at enim. Phasellus non velit faucibus, dignissim nibh at, egestas justo. Quisque condimentum nisi in augue ornare interdum.',
  },
];

interface Guest {
  id: number;
  image: string;
  name: string;
  links: { 
    twitter: string; 
    youtube: string; 
    instagram: string; 
    discord: string; 
  };
  description: string;
}

const SliderContainer = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
`;

export function Slider() {
  const [guests] = useState(guestsInfo);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedGuest, setSelectedGuest] = useState(guests[0]);

  const selectNewGuest = (index: number, guests: Guest[], next = true) => {
    const condition = next
      ? selectedIndex < guests.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : guests.length - 1;
    setSelectedGuest(guests[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previous = () => {
    selectNewGuest(selectedIndex, guests, false);
  };

  const next = () => {
    selectNewGuest(selectedIndex, guests);
  };

  return (
    <>
      <div>
        <img src={require(`assets/img/${selectedGuest.image}`).default} alt={selectedGuest.name} />
        <p className='subtitle1'>{selectedGuest.name}</p>
        <p className='body1'>{selectedGuest.description}</p>
      </div>
      <button onClick={previous}>{'<'}</button>
      <button onClick={next}>{'>'}</button>
    </>
  );
}
