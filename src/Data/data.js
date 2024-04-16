import { FaHandshake} from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { MdPerson4 } from "react-icons/md";
import { MdOutlineConstruction } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";


export const userData = [
  {
    title: "Guest",
    hindiTitle: "मेहमान",
    icons: <BsPersonArmsUp />,
  },
  {
    title: "Relative",
    hindiTitle: "रिश्तेदार",
    icons: <MdPerson4 />
  },
  {
    title: "Friends",
    hindiTitle: "दोस्त",
    icons: <FaHandshake />
  },
  {
    title: "House Maid",
    hindiTitle: "नौकरानी",
    icons: <BsFillPersonFill />  
  },
  {
    title: "Construction",
    hindiTitle: "निर्माण",
    icons: <MdOutlineConstruction/>
  },
  {
    title: "Workers",
    hindiTitle: "श्रमिक",
    icons: <BsFillPersonFill />
  },
  {
    title: "Vendors",
    hindiTitle: "विक्रेता",
    icons: <BsFillPersonFill />
  },
  {
    title: "Others",
    hindiTitle: "अन्य",
    icons: <BsFillPersonFill />
  },
]

