import React from 'react';
import classNames from 'classnames'
import { ShapeGeneratorCSS } from './styles';

const ShapeGenerator = (props:any) => {
  const { 
    handleSetShape,
    shape
  } = props;

  const setShape = () => {
    handleSetShape(shape);
  }

  return (
    <ShapeGeneratorCSS onClick={setShape}>
      <tbody>
        {shape.map((col: number[], colIndex:number) => {
          return (
            <tr key={colIndex}>
              {
                col.map((row:number, rowIndex:number) => {
                  return (
                    <td 
                      key={rowIndex}
                      className={classNames({
                        'alive': row,
                        'dead': !row
                      })}
                    />
                  )
                })
              }
            </tr>
          )
        })}
      </tbody>
    </ShapeGeneratorCSS>
  );
};

export default ShapeGenerator;
