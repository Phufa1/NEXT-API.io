
import Image from 'next/image';
import '../globals.css';
import "boxicons";

export default function Header() {
    return (

        <div className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">
                    <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442562/logo_th4p6e.webp" width="500" height="500" alt="" className="nav__logo-img" />
                    Portfolio
                </a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">Home</a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">About</a>
                        </li>

                        <li className="nav__item">
                            <a href="#trick" className="nav__link">Candy</a>
                        </li>

                        <li className="nav__item">
                            <a href="#new" className="nav__link">New</a>
                        </li>

                        <a href="#" className="button button--ghost">Support</a>
                    </ul>

                    <div className="nav__close" id="nav-close">
                        <box-icon type='solid' name='x-circle' size='lg'></box-icon>

                    </div>

                    <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718536931/Pngtree_vector_wire_icon_5169460_fqmwnd.png" width="500" height="500" alt="" className="nav__img" />
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <box-icon name='menu' size='lg'></box-icon>
                </div>
            </nav>
        </div>
    );
};


