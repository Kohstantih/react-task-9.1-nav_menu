import { NavLink } from "react-router-dom";

export default function Menu() {
    const menuList = [
        {
            text: 'Главная',
            link: '/'
        },
        {
            text: 'Дрифт-такси',
            link: '/drift'
        },
        {
            text: 'Time Attack',
            link: '/timeattack'
        },
        {
            text: 'Forza Karting',
            link: '/forza'
        }
    ];

    const linkClasses = ({ isActive }: { isActive: boolean}) => isActive ? 'menu__item menu__item-active' : 'menu__item';

    return (
        <nav className="menu">
            {menuList.map((item, index) => <NavLink
                key={index}
                className={linkClasses}
                to={item.link}
            >{item.text}</NavLink>)}
        </nav>
    )
  }
