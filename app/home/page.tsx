import Image from 'next/image';
// import logo from './logo.png';
// import expandArrow from "./expandArrow.svg";
// import arrowLeft from "./right-arrow-svgrepo.svg";
import './home.scss'
const logo = require('./logo.png');
const expandArrow = require("./expandArrow.svg");
const arrowLeft = require("./right-arrow-svgrepo.svg");






export default function Home() {
    return (
        <main>
            <div className='header'>
                <div>
                    <ul>
                        <li>Services</li>
                        <Image
                            src={expandArrow.src}
                            width={15}
                            height={15}
                            alt="question arrow"
                            className='expandArrow'
                        ></Image>
                        <li>About</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <div>
                    <Image
                        src={logo}
                        alt='logo for vine'
                        width={80}
                        height={60}
                    />
                </div>
                <div>
                    <button>Get started</button>
                </div>
            </div>

            <div className='heroPage'>
                <div className='textHeroPage'>
                    <p>Manage your <span>portfolio</span> all in one place.</p>
                    <p>Never miss the oppurtunity to invest, take advantage of our overdraft feature.</p>
                    <button>
                        Start Investing
                        <Image
                            src={arrowLeft}
                            width={40}
                            height={25}
                            alt='arrow left'
                            className='arrowLeft'
                        />
                    </button>
                </div>

                <div className='picHeroPage'>
                    <div className='heroPhoto1'></div>
                    <div className='heroPhoto2'></div>
                    <div className='heroPhoto3'></div>
                </div>
            </div>
        </main>
    );
}