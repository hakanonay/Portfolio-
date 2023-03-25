import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Me from '../assets/Images/hakan.jpg'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};


    z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`

const Text = styled.div`
font-size: calc(1em + .5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
font-size: calc(0.5rem + .75vw);
font-weight:300;

 h3 {
    font-size: calc(1em + 1.5vw);
    color: #fff
 }



`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h3>I'm Hakan.</h3>
                    <p >My name is Hakan, a guardian of the code, <br/>
In the world of cyber, I make my abode.<br/>
A defender of data, a protector of bytes,<br/>
I keep the hackers at bay through the night.</p>

<p>
My eyes are sharp, my mind always alert,<br/>
For cyber threats, I stay ever assert.<br/>
I analyze the code, I hunt down the flaws,<br/>
To keep our networks safe from cyber outlaws.
</p>

<p>
I am a cyber security analyst, a knight of the net,<br/>
A protector of data, I never forget.<br/>
With diligence and skill, I shield our technology,<br/>
And keep the cyberworld safe for all humanity.
</p>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
