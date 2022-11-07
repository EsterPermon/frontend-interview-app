import styled from 'styled-components'

const SummaryStepStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .infos {
    text-align: left;
  }

  .field {
    font-weight: 600;
    margin: 5px;
  }

  .confirm {
    margin: 20px;
    font-weight: bold;

    a {
      text-decoration: none;
    }
  }
`

export default SummaryStepStyles
