import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";

const Paragraph = styled.p`
  margin-bottom: 0;
  font-size: 21px !important;
  font-weight: 300;
  letter-spacing: -0.66px;
  line-height: 28px;
  font-family: 'Montserrat';
  color: black;
  -webkit-font-smoothing: antialiased;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const ParagraphSmall = styled(Paragraph)`
  font-size: 16px;
  letter-spacing: -0.5px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Text = ({ variant, ...props }) => {
  let TextRender;

  switch (variant) {
    case "small":
      TextRender = ParagraphSmall;
      break;
    default:
      TextRender = Paragraph;
  }

  return <TextRender color="text" {...props} />;
};

export default Text;