import { type StepProps } from "./steps/Step";
import { CiUser } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";

const Sidebar: Array<StepProps> = [
    {
        icon:<CiUser />,
        title:"Inscription",
        description:"Entrez vos informations"
    },

    {
        icon:<MdOutlineEmail />,
        title:"Validation OTP",
        description:"Confirmez votre adresse e-mail."
    },

    {
        icon:<FaUserPlus />,
        title:"Invitez vos amis ",
        description:"Envoyez des invitations à vos amis."
    },

    {
        icon:<FaRocket />,
        title:"Bienvenu à worketyamo",
        description:"Votre inscription est terminée."
    }
]
export default Sidebar