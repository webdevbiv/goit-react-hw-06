import { FaPhone } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
const Contact = ({ name, number, id, onClick }) => {
  return (
    <li key={id}>
      <div>
        <div>
          <BiSolidContact />
          <div>{name}</div>
        </div>
        <div>
          <FaPhone />
          <div>{number}</div>
        </div>
      </div>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
