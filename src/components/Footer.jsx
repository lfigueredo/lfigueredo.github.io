import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="container footer-content">

        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Luis Figueredo.
        </div>
      </div>
    </footer>
  );
}
