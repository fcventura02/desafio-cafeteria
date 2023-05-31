import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  width: 92%;
  margin: 0 auto;
  padding: 2rem 0;
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 0.75rem;
`

export const ButtonLocation = styled.span`
  background: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 4px;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.8rem;
  line-height: 1.5rem;

  @media (min-width: 500px) {
    font-size: 1rem;
    line-height: 1.625rem;
  }
`
