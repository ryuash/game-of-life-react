import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { LoadingCSS } from './styles';

const Loading = (props: any) => {
  const { active = true } = props;
  return (
    <LoadingCSS>
      <Dimmer active={active}>
        <Loader />
      </Dimmer>
    </LoadingCSS>
  );
};

export default Loading;
