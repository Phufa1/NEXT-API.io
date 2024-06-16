
import React from 'react'
import Image from 'next/image'
export default function page3() {
    return (
        <div>
            <section className="section about" id="about">
                <div className="about__container container grid">
                    <div className="about__data">
                        <h2 className="section__title about__title">About Me</h2>
                        <p className="about__description">
                            Hello again. I was born on June 30, 2000. I graduated from Suan Sunandha
                            Rajabhat University, Faculty of Science and Technology Major:
                            Information Technology, GPA 2.87
                        </p>
                        <a href="#" className="button">
                            Know more
                        </a>
                    </div>
                    <Image src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442569/graduation_hat_mlau28.png" width="600" height="600" alt="" className="about__img" />
                </div>
            </section>



        </div>
    )
}
