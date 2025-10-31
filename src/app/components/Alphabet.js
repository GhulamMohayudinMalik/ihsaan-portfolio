import React from 'react'

const Alphabet = (props) => {
    return (
        <div className="inline relative group">
            {props.letter}
            <img
                src="https://i.ytimg.com/vi/vH8kYVahdrU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDupXZrUT00Q1ru06NV2vi3rMfp0w"
                alt="Preview"
                className="absolute top-0 left-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 ease-out z-50 pointer-events-none"
            />
        </div>
    )
}

export default Alphabet
