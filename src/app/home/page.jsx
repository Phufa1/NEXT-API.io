'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import ScrollReal from 'scrollreveal';
import Swiper, { Pagination } from 'swiper';

export default function Page() {
    useEffect(() => {

        /*=============== SHOW MENU ===============*/
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        const navClose = document.getElementById('nav-close');

        /*===== MENU SHOW =====*/
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        /*===== MENU HIDDEN =====*/
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

        /*=============== REMOVE MENU MOBILE ===============*/
        const navLink = document.querySelectorAll('.nav__link');
        function linkAction() {
            const navMenu = document.getElementById('nav-menu');
            navMenu?.classList.remove('show-menu');
        }
        navLink.forEach(n => n.addEventListener('click', linkAction));

        /*=============== HOME SWIPER ===============*/
        new Swiper('.home-swiper', {
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        /*=============== CHANGE BACKGROUND HEADER ===============*/
        function scrollHeader() {
            const header = document.getElementById('header');
            if (this.scrollY >= 50) header?.classList.add('scroll-header');
            else header?.classList.remove('scroll-header');
        }
        window.addEventListener('scroll', scrollHeader);

        /*=============== NEW SWIPER ===============*/
        new Swiper('.new-swiper', {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            spaceBetween: 16,
        });

        /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
        const sections = document.querySelectorAll('section[id]');
        function scrollActive() {
            const scrollY = window.pageYOffset;
            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 58;
                const sectionId = current.getAttribute('id');

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active-link');
                } else {
                    document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active-link');
                }
            });
        }
        window.addEventListener('scroll', scrollActive);

        /*=============== SHOW SCROLL UP ===============*/
        function scrollUp() {
            const scrollUp = document.getElementById('scroll-up');
            if (this.scrollY >= 460) scrollUp?.classList.add('show-scroll');
            else scrollUp?.classList.remove('show-scroll');
        }
        window.addEventListener('scroll', scrollUp);

        /*=============== SCROLL REVEAL ANIMATION ===============*/
        const sr = ScrollReal({
            origin: 'top',
            distance: '60px',
            duration: 2500,
            delay: 400,
            // reset: true
        });

        sr.reveal(`.home-swiper, .new-swiper, .newsletter__container`);
        sr.reveal(`.category__data, .trick__content, .footer__content`, { interval: 100 });
        sr.reveal(`.about__data, .discount__img`, { origin: 'left' });
        sr.reveal(`.about__img, .discount__data`, { origin: 'right' });
    }, []);

    return (
        <section className="home container" id="home">
            <div className="swiper home-swiper">
                <div className="swiper-wrapper">
                    {/* HOME SLIDER 1 */}
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442569/Phufa_amcqeo.png" width="300" height="500" alt="" className="home__img" />
                                <div className="home__indicator" />
                                <div className="home__details-img">
                                    <h4 className="home__details-title">It Me!! “Phufa”</h4>
                                    <h4 className="home__details-subtitle">Leardbumrungsook</h4>
                                </div>
                            </div>
                            <div className="home__data">
                                <h4 className="home__subtitle">Hello</h4>
                                <h1 className="home__title">
                                    Web <br />
                                    developer
                                </h1>
                                <br />
                                <div className="home__title3">HTML CSS JS</div>
                                <div className="home__description1 flex flex-raw "  >
                                    <Image
                                        style={{ width: "11%" }}
                                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718363779/icon-home-html_j5kku2.png"
                                        width="500" height="500"
                                        alt="html-icon"
                                    />
                                    <Image
                                        style={{ width: "11%" }}
                                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718363780/icon-home-css3_badczu.png"
                                        width="500" height="500"
                                        alt="css-icon"
                                    />
                                    <Image
                                        style={{ width: "11%" }}
                                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718363780/icon-home-javascript_t2htbp.png"
                                        width="500" height="500"
                                        alt="javascript-icon"
                                    />
                                </div>
                                <div className="home__buttons">
                                    <a href="#" className="button">
                                        Contact Me
                                    </a>
                                    <a href="#" className="button--link button--flex">
                                        About Me
                                        <i className="bx bx-right-arrow-alt button__icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* HOME SLIDER 2 */}
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                {/* <Image src="assets/img/home2-img.png" width="500" height="500" alt="" className="home__img" /> */}
                                <div className="home__indicator" />
                                <div className="home__details-img">
                                    <h4 className="home__details-title">Adino &amp; Grahami</h4>
                                    <span className="home__details-subtitle">
                                        No words can describe them
                                    </span>
                                </div>
                            </div>
                            <div className="home__data">
                                <h3 className="home__subtitle">#2 top Best duo</h3>
                                <h1 className="home__title">
                                    BRING BACK <br />
                                    MY COTTON <br />
                                    CANDY
                                </h1>
                                <p className="home__description">
                                    Adino steals cotton candy from his brother and eats them all in
                                    one bite, a hungry beast. Grahami can no longer contain his anger
                                    towards Adino.
                                </p>
                                <div className="home__buttons">
                                    <a href="#" className="button">
                                        Book Now
                                    </a>
                                    <a href="#" className="button--link button--flex">
                                        Track Record
                                        <i className="bx bx-right-arrow-alt button__icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* HOME SLIDER 3 */}
                    <section className="swiper-slide">
                        <div className="home__content grid">
                            <div className="home__group">
                                {/* <Image src="assets/img/home3-img.png" width="500" height="500" alt="" className="home__img" /> */}
                                <div className="home__indicator" />
                                <div className="home__details-img">
                                    <h4 className="home__details-title">Captain Sem</h4>
                                    <span className="home__details-subtitle">
                                        Veteran Spooky Ghost
                                    </span>
                                </div>
                            </div>
                            <div className="home__data">
                                <h3 className="home__subtitle">#3 Top Scariest Ghost</h3>
                                <h1 className="home__title">
                                    RESPAWN <br />
                                    THE SPOOKY <br />
                                    SKULL
                                </h1>
                                <p className="home__description">
                                    In search for cute little puppy, Captain Sem has come back from
                                    his tragic death. With his hogwarts certified power he promise to
                                    be a hero for all of ghostkind.
                                </p>
                                <div className="home__buttons">
                                    <a href="#" className="button">
                                        Book Now
                                    </a>
                                    <a href="#" className="button--link button--flex">
                                        Track Record
                                        <i className="bx bx-right-arrow-alt button__icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="swiper-pagination" />
            </div>
        </section>
    );
}


