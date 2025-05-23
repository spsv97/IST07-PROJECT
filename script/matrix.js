function calculateMatrix(date) {    
    /*The birthDate will be passed from the form.*/
    const birthDate = new Date(date)

    /*We got the instructions to calculate the destiny matrix from https://www.youtube.com/watch?v=ZpHDV2_7tCs*/

    function reduceNumber(number) {
        /*Every number must be checked. If it is greater the 22, the digits must be added together*/
        let num = number;
    if (number > 22) {
        /*The Math.floor() method rounds a number DOWN to the nearest integer*/
        num = (number % 10) + Math.floor(number / 10);
    }
    return num;
    };

    function reduceYear(year) {
        /*Method to reduce year to a number under 22*/
        let y = 0;
        while (year > 0) {
            y += year % 10;
            year = Math.floor(year / 10);
        }
        y = reduceNumber(y);
        return y;
    };

    /*STEP 1 - FIRST LEVEL OF DIAGONAL SQUARE*/
    /*The top corner, write the birth number, which in this case is 5. The Arcana 5 represents personal qualities at birth*/
    const L1 = reduceNumber(birthDate.getDate()) + 1;
    console.log(L1);

    /*The upper corner, write the month of birth, which is 10. This represents creativity.*/
    const T1 = reduceNumber(birthDate.getMonth()) + 1;
    //console.log(T1);

    /*The right corner, write the year of birth*/
    const R1 = reduceYear(birthDate.getFullYear());
    //console.log(R1);

    /*In the bottom corner, write the sum of the previous three Arcana*/
    const B1 = reduceNumber(L1 + T1 + R1);
    //console.log(B1);

    /*STEP 2 - FIRST LEVEL OF STRATGHT SQUARE*/
    /*The top-left corner, write the sum of the left and upper corners of the diagonal square*/
    const LT1 = reduceNumber(L1 + T1);
    //console.log(LT1);

    /*The top-right corner, write the sum of the upper and right corners of the diagonal square*/
    const TR1 = reduceNumber(T1 + R1);
    //console.log(TR1);

    /*The bottom-right corner, write the sum of the right and lower corners of the diagonal square*/
    const RB1 = reduceNumber(R1 + B1);
    //console.log(RB1);

    /*The bottom-left corner, write the sum of the lower and left corners of the diagonal square*/
    const BL1 = reduceNumber(B1 + L1);
    //console.log(BL1);

    /*STEP 3 - CENTER NUMBER*/
    /*The center number is the core. It's the sum of the for corner from the diagonal square*/
    const C = reduceNumber(L1 + T1 + R1 + B1);
    //console.log(C);

    /*STEP 4 - THIRD LAYER - NUMBERS BETEWEEN THE CORNERS AND THE CENTER NUMBER*/
    /*The next step is calculate the numbers between the corners and the center. Each corner is added to center, 
    resulting in LT3, T3, TR3, R3, RB3, B3, BL3 and L3*/

    const LT3 = reduceNumber(LT1 + C);
    const T3 = reduceNumber(T1 + C);
    const TR3 = reduceNumber(TR1 + C);
    const R3 = reduceNumber(R1 + C);
    const RB3 = reduceNumber(RB1 + C);
    const B3 = reduceNumber(B1 + C);
    const BL3 = reduceNumber(BL1 + C);
    const L3 = reduceNumber(L1 + C);


    /*STEP 5 - SECOND LAYER - NUMBERS BETEWEEN THE CORNERS AND THIRD LAYER*/
    /*The next step is calculate the numbers between the corners and the third layer (LT3, T3, TR3, R3, RB3, B3, BL3 and L3). 
    Each corner corner is added to each third layer, resulting in LT2, T2, TR2, R2, RB2, B2, BL2 and L2*/

    const LT2 = reduceNumber(LT1 + LT3);
    const T2 = reduceNumber(T1 + T3);
    const TR2 = reduceNumber(TR1 + TR3);
    const R2 = reduceNumber(R1 + R3);
    const RB2 = reduceNumber(RB1 + RB3);
    const B2 = reduceNumber(B1 + B3);
    const BL2 = reduceNumber(BL1 + BL3);
    const L2 = reduceNumber(L1 + L3);


    /*STEP 6 - FOURTH LAYER - L4, T4, RB4, BRB and RRB*/
    /*Step 6 does the sum of the last four position. The sum is made by the opposite nearest numbers in the same line.*/

    const L4 = reduceNumber(L3 + C);
    const T4 = reduceNumber(T3 + C);
    const RB4 = reduceNumber(R3 + B3);
    const BRB = reduceNumber(B3 + RB4);
    const RRB = reduceNumber(R3 + RB4);

    /*ADDING VALUES TO THE MATRIX*/
    const image = document.getElementById("imageMatrix");
    const container = image.parentElement;

    //Finding the coordinates to the circles
    /*image.addEventListener('click', (event) => {
        const rect = image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log(`X: ${x}, Y: ${y}`);
        alert(`Circle Center: X: ${Math.round(x)}, Y: ${Math.round(y)}`);
    });*/

    // Define coordinates of the circles
    const circles = [
        { x: 45, y: 325, value: L1},
        { x: 315, y: 55, value: T1},
        { x: 590, y: 325, value: R1},
        { x: 315, y: 595, value: B1},
        { x: 120, y: 135, value: LT1},
        { x: 500, y: 135, value: TR1},
        { x: 500, y: 520, value: RB1},
        { x: 120, y: 520, value: BL1},
        { x: 315, y: 325, value: C},
        { x: 190, y: 205, value: LT3},
        { x: 435, y: 205, value: TR3},
        { x: 190, y: 445, value: RB3},
        { x: 435, y: 445, value: BL3},
        { x: 150, y: 325, value: L3},
        { x: 315, y: 155, value: T3},
        { x: 485, y: 325, value: R3},
        { x: 315, y: 495, value: B3},
        { x: 100, y: 325, value: L2},
        { x: 315, y: 110, value: T2},
        { x: 525, y: 325, value: R2},
        { x: 315, y: 540, value: B2},
        { x: 160, y: 175, value: LT2},
        { x: 460, y: 175, value: TR2},
        { x: 465, y: 475, value: RB2},
        { x: 160, y: 475, value: BL2},
        { x: 215, y: 325, value: L4},
        { x: 315, y: 235, value: T4},
        { x: 400, y: 410, value: RB4},
        { x: 355, y: 450, value: BRB},
        { x: 440, y: 370, value: RRB}
    ];

    /*Remove values if exists before inserting new ones*/
    document.querySelectorAll('.value').forEach(e => e.remove());

    /*Insert values */
    for (let i = 0; i < circles.length; i++) {
        let valueDiv = document.createElement('div');
        valueDiv.className = 'value';
        valueDiv.textContent = circles[i].value;
        valueDiv.style.left = `${circles[i].x}px`;
        valueDiv.style.top = `${circles[i].y}px`;
        container.appendChild(valueDiv);
    }

    const cExplanation = [
        "Represents independence, initiative, and confidently starting new journeys.",
        "Symbolizes maintaining harmonious and balanced relationships.",
        "Encourages expressing your creativity and unique talents.",
        "Emphasizes building strong and stable foundations.",
        "Urges embracing change and personal evolution.",
        "Focuses on nurturing interpersonal connections.",
        "Explores spiritual understanding and deeper metaphysical insights.",
        "Symbolizes prosperity, success, and achieving goals.",
        "Encourages introspection and deep self-awareness.",
        "Represents completion of life cycles and readiness for new phases.",
        "Symbolizes deep spiritual growth and enlightenment.",
        "Encourages achieving balance and harmony in life.",
        "Signifies transformative growth and personal evolution.",
        "Highlights the importance of adapting smoothly to life's changes.",
        "Encourages embracing adventure and exploring new possibilities.",
        "Stresses the importance of self-care and inner tranquility.",
        "Encourages the continuous pursuit of wisdom and knowledge.",
        "Highlights building strong community connections and support systems.",
        "Encourages following your authentic self and unique life path.",
        "Represents the ongoing attainment of higher knowledge and personal growth.",
        "Symbolizes achieving ultimate fulfillment and success in life.",
        "Represents balancing spiritual insight with practical material life."
    ];

    /*Insert the arcana explanation*/
    const explanation = document.getElementById("cExplanation");
    explanation.textContent = "Your Core Arcana is " + C + ". It means: " + cExplanation[C-1];
    explanation.classList.add("mystyle");
};

document.getElementById("starForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form refresh
    let birthDate = document.getElementById("birthdate").value;

    if  (birthDate) {
        calculateMatrix(birthDate);
        document.getElementById('matrixContainer').scrollIntoView({behavior: 'smooth'});
    };
});
