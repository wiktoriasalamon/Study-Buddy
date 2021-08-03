import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0;
  font-weight: 400;
`;

export const NameWrapper = styled.div`
  margin: 20px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
