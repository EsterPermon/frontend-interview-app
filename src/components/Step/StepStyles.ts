import styled from 'styled-components'

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .error-message {
    color: red;
    font-weight: 500;
    margin-top: 15px;
  }

  button {
    margin-top: 20px;
    padding: 5px;
    min-width: 60px;
    font-weight: bold;

    &:hover:enabled {
        cursor: pointer;
    }
  }
`

export default StepContainer
