import React from "react";
import { Form, ButtonHome } from '../../components/index.js'
import { allImages } from "../../assets/images.js";
import '../AboutUs/AboutUs.scss';

export function AboutUs() {
    return(
        <main>
            <section className="our-story">
                <div className="about-us-text">
                    <h1>Our story</h1>
                    <p>This blog was born from a love for baking and a desire to share recipes that truly work. What started as personal notes, handwritten recipes, and small experiments in the kitchen slowly grew into a carefully curated collection of cakes, pastries, and bread.
                    Over time, the focus became clear: well-balanced flavors, understandable steps, and reliable results. Each recipe is tested, adjusted, and written with care, so you can enjoy the process as much as the outcome. This blog is not about perfection, but about learning, improving, and finding joy in baking at your own pace.
                    </p>
                </div>
                <img src={allImages[8]} alt="Bakery" loading="lazy"></img>
            </section>

            <section className="photos-section">
                <div className="photos">
                    {allImages.map((image, index)=> (
                        <img 
                        key={index}
                        src={image}
                        alt="Pastry"
                        loading="lazy"></img>
                    ))}
                </div>
            </section>
            <section className="recipes-info">
                <div className="recipes-info__text">
                    <h2>Our recipes</h2>
                    <p>Our recipes are created to be clear, reliable, and enjoyable to follow.
                        We focus on balanced sweetness, well-tested steps, and textures that matter — soft layers, crisp crusts, and rich fillings. Whether it’s a classic honey cake, an elegant éclair, or homemade bread, every recipe is designed to help you achieve great results and enjoy the baking process.</p>
                </div>
                <ButtonHome />
            </section>
            <section className="contact-us">
                <div className="contact-image">Contact Us</div>
                <div className="form">
                    <Form />
                </div>
            </section>
            <section className="section-light">
                <div className="marquee">
                    <div className="track">
                    <div className="content">
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span> 
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span> 
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span>   
                    </div>

                    <div className="content" aria-hidden="true">
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span>
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span>   
                        <span>Feel the crunch • <span className="hroom">HROOM</span> • Love the taste</span>   
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}