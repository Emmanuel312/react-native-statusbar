import React from "react";
import { Container, CustomStatusBar } from "./styles";
import { Props } from "./IProps";

const StatusBarWrapper: React.FC<Props> = ({
  backgroundColor,
  translucent = true,
  barStyle,
  ...rest
}) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <CustomStatusBar
        backgroundColor={backgroundColor}
        translucent={translucent}
        barStyle={barStyle}
        {...rest}
      />
    </Container>
  );
};

export default StatusBarWrapper;
