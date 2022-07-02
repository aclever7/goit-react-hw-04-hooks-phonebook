import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

function Section({ title, children }) {
  return (
    <>
      <SectionStyled>{title}</SectionStyled>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
