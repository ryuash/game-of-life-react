import styled from 'styled-components';
import mixins from '@styles/mixins';

export const UsersCSS = styled.div`
  ${mixins.infoContainer}
  top: 0;
  right: -190px;
  position: absolute;
`

export const UserTitleCSS = styled.h3`
  margin-bottom: 0;
  text-align: center;
`;

export const UserContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 0;
  }
`

export const UserColorCSS:any = styled.div`
  width: 25px;
  height: 25px;
  background: ${(props:any) => {
    const { user } = props;
    const { colorR, colorB, colorG } = user;
    return `rgb(${colorR}, ${colorB}, ${colorG});`
  }}
`
