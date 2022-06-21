import React from "react";

const Home = () => {
    const sOFLink = "https://stackoverflow.com/users/2865052/matthew";
    const lLink = "https://www.linkedin.com/in/matthewethornton/";
    const gHLink = "https://github.com/MatthewThornton";

    return (
        <div className="App">
            <header className="App-header">
                <div className="home-text">
                    <p>Welcome Visitor.</p>
                    <p>
                        I use this page to showcase myself using my favorite technologies. The menu above hosts a few small projects. Please take a look.
                        {" "}Full source code available on my 
                        {" "}<a 
                            href={gHLink}
                            target="_blank"
                        >
                            Github page
                        </a>.
                    </p>
                    <p><b>A little about me.</b></p>
                    <p>I am a full stack software developer. My favorite technologies are Typescript, React/Redux, GraphQL, AWS Services. I have developed and released apps for both Android and Apple. As I learn I like to give back the community as evidenced by being in the top 25% on
                        {" "}<a 
                            href={sOFLink}
                            target="_blank"
                        >
                            Stack Overflow
                        </a>.
                    </p>
                    <p>I am a former teacher with many years of teaching secondary math, science and technology. I know how to communicate complex ideas. I enjoy teaching new things as much as I enjoy learning them. </p>
                    <p>
                        I have a diverse background and excel at learning new things. I have a Master of Business Administration with a specialization in International Business. I studied abroad in Saudi Arabia, U.A.E, and China. I have Graduate teaching certifications in Mathematics and General Sciences. For my undergraduate work I double majored in Education and Music.
                        {" "} See my 
                        {" "}<a 
                            href={lLink}
                            target="_blank"
                        >
                            LinkedIn profile
                        </a>.
                    </p> 
                    <p>I love making things. I am firmly a product person. I am most happy when I get to be part of the entire product process. From ideation to the nuts and bolts of software design. I understand how to setup and leverage Google Analytics,  Tag Manager, and Data Studio to help guide product development. I believe data is the best way to evaluate product features and design decisions. I can manage teams of diverse professionals. Call me strange, but I actually enjoy using products like Figma and Asana. </p>
                </div>
            </header>
        </div>
    );
}
export default Home;