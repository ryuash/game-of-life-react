import React from 'react';
import { 
  ShapesCSS,
  TitleCSS,
  ShapeContainerCSS
} from './styles';
import { useShapesHook } from './hooks';
import { fetchBlinkerShaper } from './utils';
import ShapeGenerator from './components/shapeGenerator';
import { IShape } from './interface';

const Shapes = (props: IShape) => {
  const {
    user
  } = props;

  const {
    handleSetShape
  } = useShapesHook(user);
  const blinkerShape = fetchBlinkerShaper();
  return (
    <ShapesCSS>
      <TitleCSS>
        Shapes
      </TitleCSS>
      <ShapeContainerCSS>
        <ShapeGenerator handleSetShape={handleSetShape} shape={blinkerShape} />
      </ShapeContainerCSS>
    </ShapesCSS>
  )
}

export default Shapes;
