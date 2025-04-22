/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
function BBDS(){
    return (
        <div>
            
            <section className="section-5">
                <div className="container-5">
                <article className="bbds">
                    <div className="section-5-title">
                    <h2>BROWSE BY DRESS STYLE</h2>
                    </div>
                    <div className="dress-styles">
                    
                    <Link href="/categories">
                    <div className="style-casual">
                    <h3>Casual</h3>
                        <img
                        src="/assets/bbds-Casual.png"
                        alt="casual"
                        className="fit-img"
                        />    
                    </div>
                    </Link>

                    <Link href="/categories">
                    <div className="style-formal">
                        <h3>Formal</h3>
                        <img
                        src="/assets/bbds-Formal.png"
                        alt="formal"
                        className="fit-img"
                        />
                    </div>
                    </Link>
                    
                    <Link href="/categories">
                    <div className="style-party">
                        <h3>Party</h3>
                        <img
                        src="/assets/bbds-Party.png"
                        alt="party"
                        className="fit-img"
                        />
                    </div>
                    </Link>

                    <Link href="/categories">
                    <div className="style-gym">
                        <h3>Gym</h3>
                        <img src="/assets/bbds-Gym.png" alt="gym" className="fit-img" />
                    </div>
                    </Link>

                    
                    
                    </div>
                </article>
                </div>
            </section>

        </div>
    )
}

export default BBDS ;