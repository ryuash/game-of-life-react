import styled from 'styled-components';
import mixins from '@styles/mixins';

export const ShapeGeneratorCSS = styled.table`
  ${mixins.shapes}

  td {
    &.dead {
      background: transparent;
    }
  }
`
