import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";

const P5a = () => {
  let a = 10;
  let b = 20;
  let speed = 6;
  let setup = (p5: p5Types, canvasParentRef: Element) => {
    let xyz = p5.createCanvas(1200, 200).parent(canvasParentRef);
    let x = (p5.windowWidth - p5.width) / 2;
    let y = p5.windowHeight - p5.height;
    xyz.position(x, y);
  };
  let draw = (p5: p5Types) => {
    p5.background(150);
    p5.stroke(0);
    p5.strokeWeight(3);
    p5.noFill();
    p5.textSize(28);

    p5.text("T h a n k   Y o u !", a, b, 245, 65);
    if (a >= p5.width - 175) {
      speed = -5;
    }
    if (a <= 0) {
      speed = 8;
    }

    a = a + speed;
  };

  return (
    <div className="P5a">
      <Sketch setup={setup} draw={draw} className="P5a" />
    </div>
  );
};

export default P5a;
