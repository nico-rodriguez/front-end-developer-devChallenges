import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      created by{' '}
      <a href='#' className='footer__link'>
        nico-rodriguez
      </a>{' '}
      -{' '}
      <a href='https://devchallenges.io/' className='footer__link'>
        devChallenges.io
      </a>
    </footer>
  );
}
