import moment from "moment";
import "./Footer.css";
export default function Footer() {
  const currentYear = moment().format("YYYY");

  return (
    <>
      <div className="footer-container text-xs">
        <div>&copy; {currentYear} Vincenzo De Pascale</div>
      </div>
    </>
  );
}
