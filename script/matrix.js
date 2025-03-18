/*The birthdate will be passed from the form.*/
const birthdate = new Date(1987,03,15)
console.log(birthdate)

/*We got the instructions to calculate the destiny matrix from https://www.youtube.com/watch?v=ZpHDV2_7tCs*/

function reduce_number(number) {
    /*Every number must be checked. If it is greater the 22, the digits must be added together*/
    let num = number;
  if (number > 22) {
    /*The Math.floor() method rounds a number DOWN to the nearest integer*/
    num = (number % 10) + Math.floor(number / 10);
  }
  return num;
};

function reduce_year(year) {
    /*Method to reduce year to a number under 22*/
    let y = 0;
    while (year > 0) {
        y += year % 10;
        year = Math.floor(year / 10);
    }
    y = reduce_number(y);
    return y;
};

/*STEP 1 - FIRST LEVEL OF DIAGONAL SQUARE
/*The top corner, write the birth number, which in this case is 5. The Arcana 5 represents personal qualities at birth*/
const L1 = reduce_number(birthdate.getDate());
console.log(L1);

/*The upper corner, write the month of birth, which is 10. This represents creativity.*/
const T1 = reduce_number(birthdate.getMonth()) + 1;
console.log(T1);

/*The right corner, write the year of birth*/
const R1 = reduce_year(birthdate.getFullYear());
console.log(R1);

/*In the bottom corner, write the sum of the previous three Arcana*/
const B1 = reduce_number(L1 + T1 + R1);
console.log(B1);

/*STEP 2 - FIRST LEVEL OF STRATGHT SQUARE*/
/*The top-left corner, write the sum of the left and upper corners of the diagonal square*/
const LT1 = reduce_number(L1 + T1);
console.log(LT1);

/*The top-right corner, write the sum of the upper and right corners of the diagonal square*/
const TR1 = reduce_number(T1 + R1);
console.log(TR1);

/*The bottom-right corner, write the sum of the right and lower corners of the diagonal square*/
const RB1 = reduce_number(R1 + B1);
console.log(RB1);

/*The bottom-left corner, write the sum of the lower and left corners of the diagonal square*/
const BL1 = reduce_number(B1 + L1);
console.log(BL1);

/*STEP 3 - CENTER NUMBER*/
/*The center number is the core. It's the sum of the for corner from the diagonal square*/
const C = reduce_number(L1 + T1 + R1 + B1);
console.log(C);

/*STEP 4 - THIRD LAYER - NUMBERS BETEWEEN THE CORNERS AND THE CENTER NUMBER*/
/*The next step is calculate the numbers between the corners and the center. Each corner corner is added to center, 
resulting in LT3, T3, TR3, R3, RB3, B3, BL3 and L3*/

const LT3 = reduce_number(LT1 + C);
const T3 = reduce_number(T1 + C);
const TR3 = reduce_number(TR1 + C);
const R3 = reduce_number(R1 + C);
const RB3 = reduce_number(RB1 + C);
const B3 = reduce_number(B1 + C);
const BL3 = reduce_number(BL1 + C);
const L3 = reduce_number(L1 + C);


/*STEP 5 - SECOND LAYER - NUMBERS BETEWEEN THE CORNERS AND THIRD LAYER*/
/*The next step is calculate the numbers between the corners and the third layer (LT3, T3, TR3, R3, RB3, B3, BL3 and L3). 
Each corner corner is added to each third layer, resulting in LT2, T2, TR2, R2, RB2, B2, BL2 and L2*/

const LT2 = reduce_number(LT1 + LT3);
const T2 = reduce_number(T1 + T3);
const TR2 = reduce_number(TR1 + TR3);
const R2 = reduce_number(R1 + R3);
const RB2 = reduce_number(RB1 + RB3);
const B2 = reduce_number(B1 + B3);
const BL2 = reduce_number(BL1 + BL3);
const L2 = reduce_number(L1 + L3);


/*STEP 6 - FOURTH LAYER - L4, T4, RB4, BRB and RRB*/
/*Step 6 does the sum of the last four position. The sum is made by the opposite nearest numbers in the same line.*/

const L4 = reduce_number(L3 + C);
const T4 = reduce_number(T3 + C);
const RB4 = reduce_number(R3 + B3);
const BRB = reduce_number(B3 + RB4);
const RRB = reduce_number(R3 + RB4);
