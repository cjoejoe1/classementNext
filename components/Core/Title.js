import React from "react";
import styled from "styled-components";
import { color, space, typography, shadow } from "styled-system";
import { device } from "../../utils";

const SectionTitle = styled.h1`
  font-weight: 800;
  letter-spacing: -2.5px;
  font-size: 40px;
  line-height: 44px;
  margin-bottom: 46px;
  text-align: center;
  margin-top: 40px;
  @media ${device.sm} {
    font-size: 66px;
    line-height: 62px;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 60px;
  }
  @media ${device.lg} {
    font-size: 86px;
    line-height: 90px;
    text-align: center;
    margin-top: 0px;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 60px;
  }
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const HeroTitle = styled(SectionTitle)`
  letter-spacing: -2.81px;
  font-size: 46px;
  line-height: 56px;
  margin-bottom: 30px;
  color: #1D2D35;
  text-align: left;
  @media ${device.sm} {
    font-size: 76px;
    font-weight: 800;
    line-height: 70px;
    text-align: left;
  }
  @media ${device.lg} {
    font-size: 76px;
    font-weight: 800;
    line-height: 84px;
    text-align: left;
  }
  @media ${device.xl} {
    font-size: 76px;
    font-weight: 800;
    line-height: 84px;
    text-align: left;
  }
`;

const CardTitle = styled.h4`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.66px;
  line-height: 28px;
  ${color};
  ${space};
  ${typography};
  ${shadow};
`;

const Title = ({ variant, ...rest }) => {
  let TitleStyled = SectionTitle;

  switch (variant) {
    case "card":
      TitleStyled = CardTitle;
      break;
    case "hero":
      TitleStyled = HeroTitle;
      break;
    default:
      TitleStyled = SectionTitle;
  }

  return <TitleStyled color="heading" {...rest} />;
};

export default Title;