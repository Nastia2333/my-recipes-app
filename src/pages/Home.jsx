import React from "react";
import '../styles/Home.scss';
import croissants from '../assets/images/croissants.JPG';
import pastry9 from '../assets/images/pastry9.JPG';
import pastry2 from '../assets/images/pastry2.JPG';
import pastry3 from '../assets/images/pastry3.JPG';
import pastry6 from '../assets/images/pastry6.JPG';
import newpastry2 from '../assets/images/new_pastry2.JPG';
import { ButtonHome, Form, RecipeCarousel } from "../components";

export function Home() {
    return (
        <main className="home">
            <section className="home-first">
                <h1>HROOM</h1>
                <div className="subtitle">Feel the crunch. Love the taste.</div>
            </section>
            <section className="home-second">
                <RecipeCarousel />
            </section>
            <section className="home-third">
                <img src={croissants} alt="Croissants"></img>
                <div className="welcome-banner">
                    <div className="banner-text">
                        This blog is a place where simple ingredients turn into thoughtful recipes.
                        Here you’ll find layered cakes, pastries, bread, and desserts created with attention to detail, balance of flavors, and love for the process. We focus on recipes that feel approachable but still special — suitable for quiet evenings, celebrations, or moments when you simply want to bake something meaningful.
                    </div>
                    < ButtonHome />
                </div>
            </section>
            <section className="home-fourth">
                <div className="form">
                    < Form />
                </div>
                <img src={newpastry2} alt="Pastry"></img>
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
            <section className="home-fifth">
                <img src={pastry9} alt="Pastry"></img>
                <img src={pastry2} alt="Pastry"></img>
                <img src={pastry3} alt="Pastry"></img>
                <img src={pastry6} alt="Pastry"></img>
            </section>
        </main>
    );
}

