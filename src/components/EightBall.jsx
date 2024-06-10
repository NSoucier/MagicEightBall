import React, { useState } from 'react'

const EightBall = () => {
    const [msg, setMsg] = useState('Think of a question');
    const [color, setColor] = useState('black');
    const response = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ];

    const giveResponse = () => {
        let index = Math.floor(Math.random() * response.length);
        setMsg(response[index].msg);
        setColor(response[index].color)
    }

    return (
        <>
            <h1>Magic Eight Ball</h1>
            <b> Click me!! </b>

            <div className='eightBall' style={{backgroundColor: color}} onClick={() => {
                giveResponse()
            }}>
                <p className='msg-box'>{msg}</p>
            </div>

            <div className="button">
            <button onClick={() => {
                setColor('black')
                setMsg('Think of a question')}}>
                Reset
            </button>
            </div>
            <p className="footer">
                Ask, if you dare!
            </p>
        </>
    )
};

export default EightBall;