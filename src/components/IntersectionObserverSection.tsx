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
          thisRef.current.offsetTop - document.body.scrollTop < document.body.clientHeight / 2) ||
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

  return <div ref={thisRef}>{props.children}</div>;
}
