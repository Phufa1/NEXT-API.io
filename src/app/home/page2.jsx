
import Image from "next/image"
export default function Page2() {
    return (
        <div><section className="section category">
            <h2 className="section__title">My skill</h2>
            <div className="category__container container grid">
                <div className="category__data">
                    <Image
                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442562/icons-Myskill-html-5_ltqzuu.png"
                        alt=""
                        className="category__img"
                        width="600" height="600"
                    />
                    <h3 className="category__title">HTML</h3>
                    <p className="category__description">
                        Website as much as we can imagine.
                    </p>
                </div>
                <div className="category__data" style={{ height: "85%" }}>
                    <Image
                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442563/icon-Myskill-css-3_ngtdvn.png"
                        alt=""
                        className="category__img"
                        width="600" height="600"
                    />
                    <h3 className="category__title">Css</h3>
                    <p className="category__description">
                        Decorate everything to make it more beautiful and convenient.
                    </p>
                </div>
                <div className="category__data" style={{ height: "140px width 140px" }}>
                    <Image
                        src="https://res.cloudinary.com/dstmjurm9/image/upload/v1718442563/icon-Myskill-javascript_kfha6j.png"
                        alt=""
                        className="category__img"
                        width="600" height="600"
                    />
                    <h3 className="category__title">Javascript</h3>
                    <p className="category__description">
                        Create a simple technique Includes various effects and APIs for sending
                        and receiving or calculating data.
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}
