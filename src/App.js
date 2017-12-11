import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.getCells = this.getCells.bind(this);

        this.state = {
            boards: [],
            selectedBoard: 0
        };

        this.state.boards.push([
            ['ד','ח','ק','ל','ה'],
            ['ת','ו','נ','מ','ג'],
            ['ג','ד','ס','ב','י'],
            ['מ','ב','ר','ש','א']
        ]);

        this.state.boards.push([
            ['ק','פ','ע','ז','א'],
            ['ד','צ','ב','ס','י'],
            ['ר','ש','ח','ט','כ'],
            ['ה','ג','מ','נ','ל']
        ]);

        this.state.boards.push([
            ['ד','צ','א','ח','ז'],
            ['י','ס','פ','ל','כ'],
            ['מ','נ','ק','ש','ט'],
            ['ה','ר','ג','ע','ב']
        ]);

        this.state.boards.push([
            ['ד','י','ל','ה','ח'],
            ['פ','ל','מ','ז','ט'],
            ['נ','ג','ב','ס','ע'],
            ['ק','ר','ש','א','צ']
        ]);

        this.state.boards.push([
            ['ע','ר','ס','כ','ד'],
            ['ב','פ','א','נ','ג'],
            ['ת','ש','ל','ז','ח'],
            ['ק','י','מ','ט','ה']
        ]);

        this.state.boards.push([
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ]);


    }

    getCells() {
        var board = this.state.boards[this.state.selectedBoard];
        return board.map((row, index)=>{
            console.info(row);
            var rowItems = row.map((col, index)=>{

                return (
                    <div className={'hex2 ' + (index % 2 === 0 ? 'even' : '')} key={index}>
                        <div className="left"/>
                        <div className="middle">
                            <span className="caption">{col}</span>
                        </div>
                        <div className="right"/>
                    </div>
                );
            });

            return (
                <div className="hex2-row" key={index}>{rowItems}</div>
            )
        });
    }

    render() {
        this.getCells();
        return (
            <div className="App">
                <div style={{float: 'left', width: '600px'}}>
                    {this.getCells()}
{/*
                    <div className="hex2-row">
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                    <div className="hex2-row">
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle">
                                <span className="caption"></span>
                            </div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                    <div className="hex2-row">
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                    </div>
                    <div className="hex2-row">
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2 even">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                        <div className="hex2">
                            <div className="left"></div>
                            <div className="middle"></div>
                            <div className="right"></div>
                        </div>
                    </div>
*/}
                </div>
            </div>
        );
    }
}

export default App;
