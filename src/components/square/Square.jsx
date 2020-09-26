/** @jsx jsx */
import { jsx } from "@emotion/core";
import { squares } from './styles';

const Square = ({ value, onClick }) => {
  return <button css={squares} onClick={onClick}>{value}</button>;
};

export default Square;
