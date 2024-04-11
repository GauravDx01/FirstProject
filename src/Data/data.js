import { FaHandshake} from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdPerson4 } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";


export const userData = [
  {
    title: "Guest",
    icons : <BsPersonArmsUp />,
   
  },
  {
    title: "Relative",
    icons : <MdPerson4 />
  },
  {
    title: "Friends",
    icons : <FaHandshake />
  },
  {
    title: "House Maid",
    icons : <BsFillPersonFill />
    
  },
  {
    title: "Construction",
    icons: <MdOutlineConstruction/>
  },
  {
    title: "Workers",
    icons :<BsFillPersonFill />
  },
  {
    title: "Vendors",
    icons :<BsFillPersonFill />
  },
  {
    title: "Others",
    icons : <BsFillPersonFill />
  },
];
