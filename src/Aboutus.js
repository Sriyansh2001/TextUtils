import React from 'react';
import './About_us.css';

export default function Aboutus(p) {

    var style = {
        container:{
            color:p.mode==="Dark"?"White":"Black",
            padding:"30px"
        }
    }

    return (
        <>
        <div style={style.container}>
            <div className="header">
            <h2>Sriyansh Srivastava</h2>
            <h3>Software Engineer || Competetive Programmer</h3>
            </div>
            <about>
                <h3>About</h3>
                <p>I am a student of PSIT kanpur. <br></br> I am a hosteller. <br></br> My hobbies are : playing Badminton and listening songs. </p>
            </about>
            <main className="main">
                <box1>
                    <achievement>
                        <h3>Achievement</h3>
                        <ol>
                            <li>
                                4 star at codechef <br></br> <i>rank 78 in starters 156</i>
                            </li>
                            <li>
                                hackerrank
                            </li>
                            <li>
                                leetcode
                            </li>
                        </ol>
                    </achievement>
                    <project>
                        <h3>Project</h3>
                        <ol>
                            <li>Music recommendation using image erecognition<br></br>
                                <ul>
                                    <li><i>Using Python</i></li>
                                    <li><i>Web + application</i></li>
                                </ul>
                            </li>
                            <li>Tik Tak Toe</li>
                            <ul>
                                <li><i>Using Python</i></li>
                                <li><i>Tkinter module is used</i></li>
                            </ul>
                        </ol>
                    </project>
                </box1>
                <box2>
                    <skill>
                        <h3>Skill</h3>
                            <span className="skill">CPP</span>
                            <span className="skill">Python</span>
                            <span className="skill">OS</span>
                            <span className="skill">DSA</span>
                            <br></br><br></br>
                            <span className="skill">Machine learning</span>
                            <span className="skill">Java</span>
                            <span className="skill">Html</span>
                    </skill>
                    <certification>
                        <h3>Certification</h3>
                        <ol>
                            <li>Python with DSA from infitq <a className="link" href="https://infytq.onwingspan.com/web/">Link</a></li>
                            <li>Python with OOPS from infitq <a className="link" href="https://infytq.onwingspan.com/web/">Link</a></li>
                        </ol>
                    </certification>
                </box2>
            </main>
            {/* <!-- <work_exp> */}
                {/* <h3>No work exp.</h3> */}
            {/* </work_exp> --> */}

            <lang>
                <h3>Language known</h3>
                <ol> 
                    <li> English</li>
                    <li>Hindi</li>
                </ol>
            </lang>
        </div>
        </>
    )
}