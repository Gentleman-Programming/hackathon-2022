import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router';

export function IntersectionObserverSection(props: any) {
  const thisRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const changeHash = () => {
    history.push(`#${props.hash}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        !history.location.hash.includes(props.hash) &&
        thisRef.current &&
        ((thisRef.current.offsetTop - document.body.scrollTop > 0 &&
          thisRef.current.offsetTop - document.body.scrollTop < document.body.clientHeight / 3) ||
          (thisRef.current.offsetTop === 0 && document.body.scrollTop === 0))
      ) {
        changeHash();
      }
    };
    document.body.addEventListener('scroll', handleScroll);
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      setTimeout(() => {
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 1500);
    }
  }, []);

  return <div ref={thisRef}>{props.children}</div>;
}
