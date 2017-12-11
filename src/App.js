import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.getCells = this.getCells.bind(this);
        this.onSelectedBoardChanged = this.onSelectedBoardChanged.bind(this);
        this.resetBoard = this.resetBoard.bind(this);

        this.state = {
            boards: [],
            selectedBoard: 0,
            turnPlayer: 'of-a',
            playersBoard: [[],[],[],[]]
        };

        this.state.boards.push([
            ['ד', 'ח', 'ק', 'ל', 'ה'],
            ['ת', 'ו', 'נ', 'מ', 'ג'],
            ['ג', 'ד', 'ס', 'ב', 'י'],
            ['מ', 'ב', 'ר', 'ש', 'א']
        ]);

        this.state.boards.push([
            ['ק', 'פ', 'ע', 'ז', 'א'],
            ['ד', 'צ', 'ב', 'ס', 'י'],
            ['ר', 'ש', 'ח', 'ט', 'כ'],
            ['ה', 'ג', 'מ', 'נ', 'ל']
        ]);

        this.state.boards.push([
            ['ד', 'צ', 'א', 'ח', 'ז'],
            ['י', 'ס', 'פ', 'ל', 'כ'],
            ['מ', 'נ', 'ק', 'ש', 'ט'],
            ['ה', 'ר', 'ג', 'ע', 'ב']
        ]);

        this.state.boards.push([
            ['ד', 'י', 'ל', 'ה', 'ח'],
            ['פ', 'ל', 'מ', 'ז', 'ט'],
            ['נ', 'ג', 'ב', 'ס', 'ע'],
            ['ק', 'ר', 'ש', 'א', 'צ']
        ]);

        this.state.boards.push([
            ['ע', 'ר', 'ס', 'כ', 'ד'],
            ['ב', 'פ', 'א', 'נ', 'ג'],
            ['ת', 'ש', 'ל', 'ז', 'ח'],
            ['ק', 'י', 'מ', 'ט', 'ה']
        ]);

        this.state.boards.push([
            ['ג', 'ד', 'ר', 'ל', 'ב'],
            ['ק', 'מ', 'א', 'מ', 'י'],
            ['ת', 'ש', 'ס', 'נ', 'ה'],
            ['ע', 'צ', 'פ', 'ח', 'ט']
        ]);


    }

    onCellPlayerChanged(row, col) {
        const playersBoard = this.state.playersBoard;
        playersBoard[row][col] = this.state.turnPlayer;
        this.setState({
            playersBoard: playersBoard
        })
    }

    getCells() {
        const board = this.state.boards[this.state.selectedBoard];
        return board.map((row, indexRow) => {
            const rowItems = row.map((col, indexCol) => {
                const forPlayer = this.state.playersBoard[indexRow][indexCol] || '';
                return (
                    <div className={'hex2 ' + (indexCol % 2 === 0 ? 'even ' : ' ') + forPlayer} key={indexCol} onClick={this.onCellPlayerChanged.bind(this, indexRow, indexCol)}>
                        <div className="left"/>
                        <div className="middle">
                            <span className="caption">{col}</span>
                        </div>
                        <div className="right"/>
                    </div>
                );
            });

            return (
                <div className="hex2-row" key={indexRow}>{rowItems}</div>
            )
        });
    }

    getBoardOptions() {
        return this.state.boards.map((board, index)=>{
            return (
                <option value={index} key={index}>לוח מספר {index+1}</option>
            )
        })
    }

    onSelectedBoardChanged(e) {
        this.setState({
            selectedBoard: parseInt(e.target.value)
        });
    }

    onCurrentPlayerChanged(nPlayer) {
        this.setState({
            turnPlayer: nPlayer
        });
    }

    getCurrentPlayer() {
        return (
            <div className={'hex2 current ' + (this.state.turnPlayer === 'of-a' ? 'current-a': 'current-b')} >
                <h2>כעת תור</h2>
                <div className="left"/>
                <div className="middle"/>
                <div className="right"/>
            </div>
        )
    }

    resetBoard() {
        this.setState({
            playersBoard: [[],[],[],[]]
        });
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <select className="board-selector" onChange={this.onSelectedBoardChanged}>
                        {this.getBoardOptions()}
                    </select>

                    <button className="clear-board" onClick={this.resetBoard}>נקה לוח</button>

                    <div className='current-wrapper'>
                        {this.getCurrentPlayer()}
                    </div>
                </div>

                <div className="hex2-board">
                    <div className='hex2 player-b' onClick={this.onCurrentPlayerChanged.bind(this, 'of-b')} >
                        <h2>שחקן 2</h2>
                        <div className="left"/>
                        <div className="middle"/>
                        <div className="right"/>
                    </div>

                    {this.getCells()}

                    <div className='hex2 player-a' onClick={this.onCurrentPlayerChanged.bind(this, 'of-a')}>
                        <h2>שחקן 1</h2>
                        <div className="left"/>
                        <div className="middle"/>
                        <div className="right"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
