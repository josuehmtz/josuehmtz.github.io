import {FaGithub, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const navigate = (url) => {

}


const icons = [
    {
        name: 'git', 
        element: <FaGithub size={30} className="hover:cursor-pointer"/>,
        url: 'https://www.linkedin.com/in/josue-martinez-b01663231/'
    },
    {
        name: 'linkedin', 
        element: <FaLinkedin size={30} className="hover:cursor-pointer"/>,
        url: 'https://github.com/josuehmtz'
    }
];

export const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white lg pt-4 mx-auto max-w-full sm:px-6 lg:px-8 fixed bottom-10">
        <div className='w-screen flex items-center justify-between'>
            <ul className="flex">
            {
                icons.map((icon) => (
                    <li className="m-4 p-4" key={icon.name}>
                        <a href={icon.url}>
                            {icon.element}
                        </a>
                    </li>
                ))
            }
            </ul>

        </div>
    </footer>
  )
}
