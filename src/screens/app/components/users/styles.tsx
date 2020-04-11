import styled from 'styled-components';

export const UsersCSS = styled.div`
  width: 50%;
  min-height: 50px;
  position: absolute;
  top: 0;
  right: -190px;
  padding: 1rem;
  border: dashed 2px #d4d1d1;
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
