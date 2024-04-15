import React, { useEffect, useState } from 'react'
import './style.css'


const Square = ({ value, onClick }) => (
    <button className={'actionButton'} onClick={onClick}>{value}</button>
)


const TicTacToe = () => {
    const [squares, setSquares] = useState(Array(9).fill(''));
    const [turnX, setTurnX] = useState(true)
    const [stats, setStats] = useState('');
    const [theIndex, settheIndex] = useState(null);
    const [showRestart, setShowRestart] = useState(false)
    const [winer, setWiner] = useState(null);

    const handleRestart = () => {
        setSquares(Array(9).fill(''))
        setTurnX(true)
        setStats(`turn is X`)
        setShowRestart(false)
        setWiner(null)
    }
    const theWinner = (index) => {
        if (squares[index] && squares[index] === squares[index + 3] && squares[index] === squares[index + 6]) {
            return squares[index]
        } else if (squares[index] && squares[index] === squares[index - 3] && squares[index] === squares[index - 6]) {
            return squares[index]

        } else if (squares[index] && squares[index] === squares[index - 3] && squares[index] === squares[index + 3]) {
            return squares[index]


        } else if (squares[index] && squares[index] === squares[index + 2] && squares[index] === squares[index + 4]) {
            return squares[index]
        } else if (squares[index] && squares[index] === squares[index - 2] && squares[index] === squares[index - 4]) {
            return squares[index]

        } else if (squares[index] && squares[index] === squares[index - 2] && squares[index] === squares[index + 2]) {
            return squares[index]


        }


        else if (squares[index] && squares[index] === squares[index + 4] && squares[index] === squares[index + 8]) {
            return squares[index]
        } else if (squares[index] && squares[index] === squares[index - 4] && squares[index] === squares[index - 8]) {
            return squares[index]

        } else if (squares[index] && squares[index] === squares[index - 4] && squares[index] === squares[index + 4]) {
            return squares[index]
        }



        else if ([0, 3, 6].includes(index) && squares[index] && squares[index] === squares[index + 1] && squares[index] === squares[index + 2]) {
            return squares[index]
        } else if ([1, 4, 7].includes(index) && squares[index] && squares[index] === squares[index - 1] && squares[index] === squares[index + 1]) {
            return squares[index]
        }
        else if ([2, 5, 8].includes(index) && squares[index] && squares[index] === squares[index - 1] && squares[index] === squares[index - 2]) {
            return squares[index]
        }

        return null
    }
    const getWinner = (squares) => {
        const possipilities = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [8, 4, 0],
            [6, 4, 2]
        ]

        for (let i = 0; i < possipilities.length; i++) {
            const [x, y, z] = possipilities[i]
            if (squares[x] && squares[x] === squares[z] && squares[x] === squares[y]) {
                return squares[x]
            }
        }
        return null
    }
    const handleClick = (index) => {
        settheIndex(index)
        let cpySquares = [...squares]
        /*        if (getWinner(squares) || cpySquares[index]) return */
        if (winer || cpySquares[index]) return
        cpySquares[index] = turnX ? 'X' : 'O'
        setStats(`turn is  : ${turnX ? 'O' : 'X'}`)
        setTurnX(!turnX)
        setSquares([...cpySquares])


    }
    useEffect(() => {
        if (theWinner(theIndex)) setWiner(theWinner(theIndex))
        if (theWinner(theIndex)) {
            setShowRestart(true)
            setStats(`the winner is ${theWinner(theIndex)}`)

        }
        if (!theWinner(theIndex) && squares.every((el) => el !== '')) {
            setShowRestart(true)
            setStats(`game is draw`)
        }
        /*        console.log(theWinner(theIndex))
               if (getWinner(squares)) {
                   setShowRestart(true)
                   setStats(`the winner is ${getWinner(squares)}`)
               }
               if (!getWinner(squares) && squares.every((el) => el !== '')) {
                   setShowRestart(true)
                   setStats(`game is draw`)
               } */
    }, [turnX, squares, theIndex]);
    return (

        <>

            <div className='tictactoe_container'>

                <div className='tictactoe_row'>
                    {squares.map((_, index) => (
                        <Square value={squares[index]} onClick={() => handleClick(index)} />

                    ))}

                </div>

                <h1> {stats}</h1>
                {showRestart && <button onClick={handleRestart}>restart the game</button>}
            </div>
        </>

    )
}

export default TicTacToe