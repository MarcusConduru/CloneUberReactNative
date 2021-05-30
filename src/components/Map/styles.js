/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native'; 

export const LocationBox = styled.View `
  background: #fff;
  shadow-color: #fff;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;

  ${Platform.select({
    ios: css `
      margin-top: 20px;
    `,
    android: css `
      margin-top: 20px;
      margin-left: 10px;
    `,
  })}

`

export const LocationText = styled.View `
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
`

export const LocationTimeBox = styled.View `
  background: #222;
  padding: 3px 8px;
`;

export const LocationTimeText = styled.View `
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall = styled.View `
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const back = styled.TouchableOpacity `
  position: absolute;
  top: ${Platform.select({
    ios: 60,
    android: 40,
  })};
  left: 20px;
`;