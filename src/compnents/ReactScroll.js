import React from 'react';
import { Parallax, Background } from 'react-parallax'

class ReactScroll extends React.Component {
  render() {
    const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
    return (
      <div style={{height: '3000px', border: '1px solid red'}}>
        <div style={{height: '500px', border: '1px solid green'}}></div>
        <Parallax 
          bgImage={image1}
          strength={200}
          style={{height: '500px'}}
          renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(255, 125, 0, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "50%",
                  transform: "translate(-50%,-50%)",
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}
        >
        </Parallax>
        <div style={{height: '500px', border: '1px solid green'}}></div>
      </div>
    )
  }
}

export default ReactScroll