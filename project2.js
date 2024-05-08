// Function to create a 3x3 transformation matrix based on given parameters
function GetTransform(positionX, positionY, rotation, scale) {
    // Convert rotation to radians
    let angle = rotation * Math.PI / 180;
    
    // Calculate the transformation matrix components
    let a = scale * Math.cos(angle);
    let b = -scale * Math.sin(angle);
    let c = scale * Math.sin(angle);
    let d = scale * Math.cos(angle);
    let e = positionX;
    let f = positionY;
  
    // Create the 3x3 transformation matrix in column-major format
    let matrix = [
      a, c, 0,
      b, d, 0,
      e, f, 1
    ];
  
    return matrix;
  }
  
  // Function to combine two 3x3 transformation matrices into one
  function ApplyTransform(trans1, trans2) {
    // Extract components from trans1
    let a1 = trans1[0];
    let b1 = trans1[1];
    let c1 = trans1[2];
    let d1 = trans1[3];
    let e1 = trans1[4];
    let f1 = trans1[5];
    let g1 = trans1[6];
    let h1 = trans1[7];
    let i1 = trans1[8];

    // Extract components from trans2
    let a2 = trans2[0];
    let b2 = trans2[1];
    let c2 = trans2[2];
    let d2 = trans2[3];
    let e2 = trans2[4];
    let f2 = trans2[5];
    let g2 = trans2[6];
    let h2 = trans2[7];
    let i2 = trans2[8];

    // Calculate the combined transformation matrix
    let a = a1*a2 + b1*d2 + c1*g2;
    let b = a1*b2 + b1*e2 + c1*h2;
    let c = a1*c2 + b1*f2 + c1*i2;
    let d = d1*a2 + e1*d2 + f1*g2;
    let e = d1 * b2 + e1 * e2 + f1 * h2;
    let f = d1 * c2 + e1 * f2 + f1 * i2;
    let g = g1 * a2 + h1 * d2 + i1 * g2;
    let h = g1 * b2 + h1 * e2 + i1 * h2;
    let i = g1 * c2 + h1 * f2 + i1 * i2;

    // Create the combined 3x3 transformation matrix in column-major format
    let matrix = [a, b,c,d,e,f,g,h,i];

    return matrix;
}
  


  
 

