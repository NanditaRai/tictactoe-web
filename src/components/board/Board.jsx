/** @jsx jsx */
import { jsx } from '@emotion/core';
import Square from '../square/Square';
import { BoardStyle } from './styles';

const Board = ({squares, onClick}) => (
  <BoardStyle>
  {
    squares.map((item, index) => <Square key={index} value={item} onClick={() => onClick(index)}></Square>)
  }
  </BoardStyle>
)

export default Board;