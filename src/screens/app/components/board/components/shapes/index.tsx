import React from 'react';
import ShapeGenerator from './components/shapeGenerator';
import { IShape } from './interface';
import { 
  ShapesCSS,
  TitleCSS,
  ShapeContainerCSS
} from './styles';
import { 
  fetchBlinkerShape,
  fetchBeehiveShape,
  fetchBoatShape,
  fetchGliderShape,
  fetchToadShape
} from './utils';

const Shapes = (props: IShape) => {
  const {
    handleSetShape
  } = props;
  const blinkerShape = fetchBlinkerShape();
  const beehiveShape = fetchBeehiveShape();
  const boatShape = fetchBoatShape();
  const gliderShape = fetchGliderShape();
  const toadShape = fetchToadShape();
  return (
    <ShapesCSS>
      <TitleCSS>
        Shapes
      </TitleCSS>
      <ShapeContainerCSS>
        <ShapeGenerator handleSetShape={handleSetShape} shape={blinkerShape} />
        <ShapeGenerator handleSetShape={handleSetShape} shape={beehiveShape} />
        <ShapeGenerator handleSetShape={handleSetShape} shape={boatShape} />
        <ShapeGenerator handleSetShape={handleSetShape} shape={gliderShape} />
        <ShapeGenerator handleSetShape={handleSetShape} shape={toadShape} />
      </ShapeContainerCSS>
    </ShapesCSS>
  )
}

export default Shapes;
