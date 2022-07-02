import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styled';

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
