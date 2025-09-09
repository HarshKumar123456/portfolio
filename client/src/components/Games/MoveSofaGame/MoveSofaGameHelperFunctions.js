const canMoveVerticallyUpward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {

    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Vertically Upward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        if (
            (sofaEndRow - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow - 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        if (
            (sofaStartRow - 1 >= 0)                                                  // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow - 1][sofaStartCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canMoveVerticallyDownward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {

    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Vertically Downward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        if (
            (sofaStartRow + 1 < rows)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow + 1][sofaStartCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        if (
            (sofaEndRow + 1 < rows)                                              // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow + 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

// ReCheck it
const canMoveVerticallyForward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Vertically Forward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        if (
            (sofaStartCol + 1 < cols && sofaEndCol + 1 < cols)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol + 1] === '0' && houseThingsArrangementMatrix[sofaEndRow][sofaEndCol + 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        if (
            (sofaStartCol + 1 < cols && sofaEndCol + 1 < cols)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol + 1] === '0' && houseThingsArrangementMatrix[sofaEndRow][sofaEndCol + 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

// Recheck it
const canMoveVerticallyBackward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Vertically Backward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        if (
            (sofaStartCol - 1 >= 0 && sofaEndCol - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol - 1] === '0' && houseThingsArrangementMatrix[sofaEndRow][sofaEndCol - 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        if (
            (sofaStartCol - 1 >= 0 && sofaEndCol - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol - 1] === '0' && houseThingsArrangementMatrix[sofaEndRow][sofaEndCol - 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canVerticallyRotateUpwardLeft = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Vertically Upward Left will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        const row = sofaEndRow;
        const col = sofaEndCol - 1;

        if (
            (sofaEndCol - 1 >= 0 && sofaStartCol - 1 >= 0)                                                                            // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol - 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        const row = sofaStartRow;
        const col = sofaStartCol - 1;

        if (
            (sofaEndCol - 1 >= 0 && sofaStartCol - 1 >= 0)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol - 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canVerticallyRotateUpwardRight = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Vertically Upward Right will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        const row = sofaEndRow;
        const col = sofaEndCol + 1;

        if (
            (sofaEndCol + 1 < cols && sofaStartCol + 1 < cols)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol + 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        const row = sofaStartRow;
        const col = sofaStartCol + 1;

        if (
            (sofaEndCol + 1 < cols && sofaStartCol + 1 < cols)                                                                    // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol + 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canVerticallyRotateDownwardLeft = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Vertically Downward Left will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        const row = sofaStartRow;
        const col = sofaStartCol - 1;

        if (
            (sofaEndCol - 1 >= 0 && sofaStartCol - 1 >= 0)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol - 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        const row = sofaEndRow;
        const col = sofaEndCol - 1;

        if (
            (sofaEndCol - 1 >= 0 && sofaStartCol - 1 >= 0)                                                                            // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol - 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canVerticallyRotateDownwardRight = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Vertically Downward Right will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End Is Up
    if (sofaPosition.endingCoordinate.row < sofaPosition.startingCoordinate.row) {
        const row = sofaStartRow;
        const col = sofaStartCol + 1;

        if (
            (sofaEndCol + 1 < cols && sofaStartCol + 1 < cols)                                                                    // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol + 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start Is Up
    else {
        const row = sofaEndRow;
        const col = sofaEndCol + 1;

        if (
            (sofaEndCol + 1 < cols && sofaStartCol + 1 < cols)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol + 1] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

// Recheck it
const canMoveHorizontallyUpward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Horizontally Forward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        if (
            (sofaStartRow - 1 >= 0 && sofaEndRow - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow - 1][sofaStartCol] === '0' && houseThingsArrangementMatrix[sofaEndRow - 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // Else Sofa Start is Left
    else {
        if (
            (sofaStartRow - 1 >= 0 && sofaEndRow - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow - 1][sofaStartCol] === '0' && houseThingsArrangementMatrix[sofaEndRow - 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

// Recheck it
const canMoveHorizontallyDownward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Horizontally Forward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        if (
            (sofaStartRow + 1 < rows && sofaEndRow + 1 < rows)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow + 1][sofaStartCol] === '0' && houseThingsArrangementMatrix[sofaEndRow + 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // Else Sofa Start is Left
    else {
        if (
            (sofaStartRow + 1 < rows && sofaEndRow + 1 < rows)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow + 1][sofaStartCol] === '0' && houseThingsArrangementMatrix[sofaEndRow + 1][sofaEndCol] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canMoveHorizontallyForward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Horizontally Forward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        if (
            (sofaStartCol + 1 < cols)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol + 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // Else Sofa Start is Left
    else {
        if (
            (sofaEndCol + 1 < cols)                                              // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol + 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canMoveHorizontallyBackward = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Horizontally Forward will require Empty Place && Unvisited Place && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        if (
            (sofaEndCol - 1 >= 0)                                                // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow][sofaEndCol - 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // Else Sofa Start is Left
    else {
        if (
            (sofaStartCol - 1 >= 0)                                                  // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow][sofaStartCol - 1] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canHorizontallyRotateUpwardLeft = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Horizontally Upward Left will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        const row = sofaEndRow - 1;
        const col = sofaEndCol;

        if (
            (sofaEndRow - 1 >= 0 && sofaStartRow - 1 >= 0)                                                                            // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow - 1][sofaStartCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start is Left
    else {
        const row = sofaStartRow - 1;
        const col = sofaStartCol;

        if (
            (sofaEndRow - 1 >= 0 && sofaStartRow - 1 >= 0)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow - 1][sofaEndCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canHorizontallyRotateUpwardRight = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Horizontally Upward Right will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        const row = sofaStartRow - 1;
        const col = sofaStartCol;

        if (
            (sofaEndRow - 1 >= 0 && sofaStartRow - 1 >= 0)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow - 1][sofaEndCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start is Left
    else {
        const row = sofaEndRow - 1;
        const col = sofaEndCol;

        if (
            (sofaEndRow - 1 >= 0 && sofaStartRow - 1 >= 0)                                                                            // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow - 1][sofaStartCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canHorizontallyRotateDownwardLeft = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Horizontally Downward Left will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        const row = sofaEndRow + 1;
        const col = sofaEndCol;

        if (
            (sofaEndRow + 1 < rows && sofaStartRow + 1 < rows)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow + 1][sofaStartCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start is Left
    else {
        const row = sofaStartRow + 1;
        const col = sofaStartCol;

        if (
            (sofaEndRow + 1 < rows && sofaStartRow + 1 < rows)                                                                    // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow + 1][sofaEndCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}

const canHorizontallyRotateDownwardRight = (houseThingsArrangementMatrix, rows, cols, sofaPosition) => {
    const sofaStartRow = sofaPosition.startingCoordinate.row;
    const sofaStartCol = sofaPosition.startingCoordinate.col;

    const sofaEndRow = sofaPosition.endingCoordinate.row;
    const sofaEndCol = sofaPosition.endingCoordinate.col;

    // Rotate Horizontally Downward Right will require (2*2 Empty && Unvisited Place Including Sofa) && In Matrix Range Place

    // If Sofa End is Left
    if (sofaPosition.endingCoordinate.col < sofaPosition.startingCoordinate.col) {
        const row = sofaStartRow + 1;
        const col = sofaStartCol;

        if (
            (sofaEndRow + 1 < rows && sofaStartRow + 1 < rows)                                                                    // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaEndRow + 1][sofaEndCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }
    // If Sofa Start is Left
    else {
        const row = sofaEndRow + 1;
        const col = sofaEndCol;

        if (
            (sofaEndRow + 1 < rows && sofaStartRow + 1 < rows)                                                                        // Inside Matrix or Not Condition
            && (houseThingsArrangementMatrix[sofaStartRow + 1][sofaStartCol] != 'H' && houseThingsArrangementMatrix[row][col] === '0') // Empty && Unvisited Place
        ) {
            return true;
        }
    }

    return false;
}


const allOrientationMoves = [
    {
        orientation: 'hes',
        allMoves: [
            {
                type: "forward",
                startRowStep: 0,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 1,
                isPossible: canMoveHorizontallyForward,
                afterMoveOrientation: 'hes',
            },
            {
                type: "backward",
                startRowStep: 0,
                startColStep: -1,
                endRowStep: 0,
                endColStep: -1,
                isPossible: canMoveHorizontallyBackward,
                afterMoveOrientation: 'hes',
            },
            {
                type: "up",
                startRowStep: -1,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 0,
                isPossible: canMoveHorizontallyUpward,
                afterMoveOrientation: 'hes',
            },
            {
                type: "down",
                startRowStep: 1,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 0,
                isPossible: canMoveHorizontallyDownward,
                afterMoveOrientation: 'hes',
            },
            {
                type: "rdl",
                startRowStep: 1,
                startColStep: -1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canHorizontallyRotateDownwardLeft,
                afterMoveOrientation: 'ves',
            },
            {
                type: "rdr",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 1,
                isPossible: canHorizontallyRotateDownwardRight,
                afterMoveOrientation: 'vse',
            },
            {
                type: "rul",
                startRowStep: -1,
                startColStep: -1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canHorizontallyRotateUpwardLeft,
                afterMoveOrientation: 'vse',
            },
            {
                type: "rur",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 1,
                isPossible: canHorizontallyRotateUpwardRight,
                afterMoveOrientation: 'ves',
            },
        ],
    },
    {
        orientation: 'hse',
        allMoves: [
            {
                type: "forward",
                startRowStep: 0,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 1,
                isPossible: canMoveHorizontallyForward,
                afterMoveOrientation: 'hse',
            },
            {
                type: "backward",
                startRowStep: 0,
                startColStep: -1,
                endRowStep: 0,
                endColStep: -1,
                isPossible: canMoveHorizontallyBackward,
                afterMoveOrientation: 'hse',
            },
            {
                type: "up",
                startRowStep: -1,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 0,
                isPossible: canMoveHorizontallyUpward,
                afterMoveOrientation: 'hse',
            },
            {
                type: "down",
                startRowStep: 1,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 0,
                isPossible: canMoveHorizontallyDownward,
                afterMoveOrientation: 'hse',
            },
            {
                type: "rdl",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: 1,
                endColStep: -1,
                isPossible: canHorizontallyRotateDownwardLeft,
                afterMoveOrientation: 'vse',
            },
            {
                type: "rdr",
                startRowStep: 1,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canHorizontallyRotateDownwardRight,
                afterMoveOrientation: 'ves',
            },
            {
                type: "rul",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: -1,
                endColStep: -1,
                isPossible: canHorizontallyRotateUpwardLeft,
                afterMoveOrientation: 'ves',
            },
            {
                type: "rur",
                startRowStep: -1,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canHorizontallyRotateUpwardRight,
                afterMoveOrientation: 'vse',
            },
        ],
    },

    {
        orientation: 'ves',
        allMoves: [
            {
                type: "forward",
                startRowStep: 0,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 1,
                isPossible: canMoveVerticallyForward,
                afterMoveOrientation: 'ves',
            },
            {
                type: "backward",
                startRowStep: 0,
                startColStep: -1,
                endRowStep: 0,
                endColStep: -1,
                isPossible: canMoveVerticallyBackward,
                afterMoveOrientation: 'ves',
            },
            {
                type: "up",
                startRowStep: -1,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 0,
                isPossible: canMoveVerticallyUpward,
                afterMoveOrientation: 'ves',
            },
            {
                type: "down",
                startRowStep: 1,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 0,
                isPossible: canMoveVerticallyDownward,
                afterMoveOrientation: 'ves',
            },
            {
                type: "rdl",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: 1,
                endColStep: -1,
                isPossible: canVerticallyRotateDownwardLeft,
                afterMoveOrientation: 'hes',
            },
            {
                type: "rdr",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 1,
                isPossible: canVerticallyRotateDownwardRight,
                afterMoveOrientation: 'hse',
            },
            {
                type: "rul",
                startRowStep: -1,
                startColStep: -1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canVerticallyRotateUpwardLeft,
                afterMoveOrientation: 'hse',
            },
            {
                type: "rur",
                startRowStep: -1,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canVerticallyRotateUpwardRight,
                afterMoveOrientation: 'hes',
            },
        ],
    },
    {
        orientation: 'vse',
        allMoves: [
            {
                type: "forward",
                startRowStep: 0,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 1,
                isPossible: canMoveVerticallyForward,
                afterMoveOrientation: 'vse',
            },
            {
                type: "backward",
                startRowStep: 0,
                startColStep: -1,
                endRowStep: 0,
                endColStep: -1,
                isPossible: canMoveVerticallyBackward,
                afterMoveOrientation: 'vse',
            },
            {
                type: "up",
                startRowStep: -1,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 0,
                isPossible: canMoveVerticallyUpward,
                afterMoveOrientation: 'vse',
            },
            {
                type: "down",
                startRowStep: 1,
                startColStep: 0,
                endRowStep: 1,
                endColStep: 0,
                isPossible: canMoveVerticallyDownward,
                afterMoveOrientation: 'vse',
            },
            {
                type: "rdl",
                startRowStep: 1,
                startColStep: -1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canVerticallyRotateDownwardLeft,
                afterMoveOrientation: 'hse',
            },
            {
                type: "rdr",
                startRowStep: 1,
                startColStep: 1,
                endRowStep: 0,
                endColStep: 0,
                isPossible: canVerticallyRotateDownwardRight,
                afterMoveOrientation: 'hes',
            },
            {
                type: "rul",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: -1,
                endColStep: -1,
                isPossible: canVerticallyRotateUpwardLeft,
                afterMoveOrientation: 'hes',
            },
            {
                type: "rur",
                startRowStep: 0,
                startColStep: 0,
                endRowStep: -1,
                endColStep: 1,
                isPossible: canVerticallyRotateUpwardRight,
                afterMoveOrientation: 'hse',
            },
        ],
    },
];


const moveTypeAndDisplayText = {
    "forward": 'F',
    "backward": 'B',
    "up": 'U',
    "down": 'D',
    "rdl": 'RDL',
    "rdr": 'RDR',
    "rul": 'RUL',
    "rur": 'RUR',
};


const getPossibleMoves = async (houseThingsArrangementMatrix, rows, cols, sofa) => {

    console.log("In getPossibleMoves(): ", houseThingsArrangementMatrix);
    console.log("In getPossibleMoves() rows: ", rows, " and cols: ", cols);
    console.log("In getPossibleMoves() sofa: ", sofa);
    
    
    const allMovesForSofaOrientation = allOrientationMoves.find((orientationMoves) => orientationMoves.orientation === sofa.orientation);
    console.log("In getPossibleMoves() allMovesForSofaOrientation: ", allMovesForSofaOrientation);
    console.log("In getPossibleMoves() allMovesForSofaOrientation's length: ", allMovesForSofaOrientation.allMoves.length);


    let possibleMoves = [];
    /*
{
        type: 'forward',
        displayText: 'F', 
        isPossible: true,
        afterMoveSofaPosition: {
            startingCoordinate: {
                row: 0,
                col: 1,
            },
            endCoordinate: {
                row: 0,
                col: 3,
            },
            orientation: 'hse',
        },
    },
*/

    for (let index = 0; index < allMovesForSofaOrientation.allMoves.length; index++) {
        const move = allMovesForSofaOrientation.allMoves[index];
        console.log("Running for move: ", move);
        
        const movePossible = await move.isPossible(houseThingsArrangementMatrix, rows, cols, sofa)

        possibleMoves.push({
            type: move.type,
            displayText: moveTypeAndDisplayText[move.type],
            isPossible: movePossible,
            afterMoveSofaPosition: {
                startCoordinate: {
                    row: sofa.startingCoordinate.row + move.startRowStep,
                    col: sofa.startingCoordinate.col + move.startColStep,
                },
                endCoordinate: {
                    row: sofa.endingCoordinate.row + move.endRowStep,
                    col: sofa.endingCoordinate.col + move.endColStep,
                },
                orientation: move.afterMoveOrientation,
            },
        });

    }


    return possibleMoves;
};



const findSofaCurrentPositionCoordinates = async (houseThingsArrangementMatrix, rows, cols) => {

    let sofa = {
        startingCoordinate: {
            row: 0,
            col: 0,
        },
        endingCoordinate: {
            row: 0,
            col: 0,
        },
    };
    let startingCoordinate = {
        row: -1,
        col: -1,
    };
    let endingCoordinate = {
        row: -1,
        col: -1,
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (houseThingsArrangementMatrix[row][col] === 's') {
                // Either Sofa will be s then s means ss
                // Or Sofa will be s down s means s
                //                                s

                
                startingCoordinate.row = row;
                startingCoordinate.col = col;

                console.log("Found starting of Sofa at ----------------------------->", startingCoordinate);
                
                if (houseThingsArrangementMatrix[row][col + 1] === 's') {
                    endingCoordinate.row = row;
                    endingCoordinate.col = col + 1;
                }
                else if (houseThingsArrangementMatrix[row + 1][col] === 's') {
                    endingCoordinate.row = row + 1;
                    endingCoordinate.col = col;
                }
                else {
                    // Depicting Invalid Input Test Case For ss type sofa
                    endingCoordinate.row = -1;
                    endingCoordinate.col = -1;
                }
                console.log("Found starting of Sofa at ----------------------------->", endingCoordinate);
                
                sofa.startingCoordinate = startingCoordinate;
                sofa.endingCoordinate = endingCoordinate;

                console.log("Now Sofa Current Position is: ", sofa);
                

                return sofa;
            }
        }
    }

    console.log("Returning sofa from here +++++++++++++++++++++++++++++++++++++++++++++++++++++");
    
    return sofa;
}

const findSofaDestinationPositionCoordinates = async (houseThingsArrangementMatrix, rows, cols) => {

    let sofa = {
        startingCoordinate: {
            row: 0,
            col: 0,
        },
        endingCoordinate: {
            row: 0,
            col: 0,
        },
    };
    let startingCoordinate = {
        row: 0,
        col: 0,
    };
    let endingCoordinate = {
        row: 0,
        col: 0,
    };

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (houseThingsArrangementMatrix[row][col] === 'S') {
                // Either Sofa will be s then s means ss
                // Or Sofa will be s down s means s
                //                                s

                startingCoordinate.row = row;
                startingCoordinate.col = col;

                if (houseThingsArrangementMatrix[row][col + 1] === 'S') {
                    endingCoordinate.row = row;
                    endingCoordinate.col = col + 1;
                }
                else if (houseThingsArrangementMatrix[row + 1][col] === 'S') {
                    endingCoordinate.row = row + 1;
                    endingCoordinate.col = col;
                }
                else {
                    // Depicting Invalid Input Test Case For ss type sofa
                    endingCoordinate.row = -1;
                    endingCoordinate.col = -1;
                }

                sofa.startingCoordinate = startingCoordinate;
                sofa.endingCoordinate = endingCoordinate;

                return sofa;
            }
        }
    }

    return sofa;
}


const findPossibleMovesForSofa = async (gameGrid, gameSofa) => {
    let houseThingsArrangementMatrix = [
        ['s', 's', '0', '0', '0'],
        ['0', 'H', '0', '0', 'H'],
        ['0', 'H', '0', 'H', 'H'],
        ['0', 'H', '0', '0', 'H'],
        ['0', '0', '0', 'S', 'S'],
    ];

    houseThingsArrangementMatrix = gameGrid;

    let rows = houseThingsArrangementMatrix.length;
    let cols = houseThingsArrangementMatrix[0].length;

    let sofa = {
        startingCoordinate: gameSofa.startCoordinate,
        endingCoordinate:  gameSofa.endCoordinate,
        orientation: gameSofa.orientation,
    };

    let sofaStartingPosition = {
        startingCoordinate: {
            row: 0,
            col: 0,
        },
        endingCoordinate: {
            row: 0,
            col: 0,
        },
    };

    let sofaEndingPosition = {
        startingCoordinate: {
            row: 0,
            col: 0,
        },
        endingCoordinate: {
            row: 0,
            col: 0,
        },
    };
    console.log("In The Find Possible Moves Intial: ", houseThingsArrangementMatrix);

    sofaStartingPosition = await findSofaCurrentPositionCoordinates(houseThingsArrangementMatrix, rows, cols);
    sofaEndingPosition = await findSofaDestinationPositionCoordinates(houseThingsArrangementMatrix, rows, cols);

    console.log("SOfa Start: ", sofaStartingPosition);
    console.log("SOfa End: ", sofaEndingPosition);

    // Mark Starting Position and Ending Position as Empty cell as it is possible to move there
    let sofaStartRow;
    let sofaStartCol;
    let sofaEndRow;
    let sofaEndCol;


    sofaStartRow = sofaStartingPosition.startingCoordinate.row;
    sofaStartCol= sofaStartingPosition.startingCoordinate.col;
    sofaEndRow = sofaStartingPosition.endingCoordinate.row;
    sofaEndCol= sofaStartingPosition.endingCoordinate.col;

    console.log("Updating Matrix for: ", sofaStartRow, ", ", sofaStartCol, " | ", sofaEndRow, ", ", sofaEndCol );
    houseThingsArrangementMatrix[sofaStartRow][sofaStartCol] = '0';
    houseThingsArrangementMatrix[sofaEndRow][sofaEndCol] = '0';



    sofaStartRow = sofaEndingPosition.startingCoordinate.row;
    sofaStartCol= sofaEndingPosition.startingCoordinate.col;
    sofaEndRow = sofaEndingPosition.endingCoordinate.row;
    sofaEndCol= sofaEndingPosition.endingCoordinate.col;
    
    
    console.log("Updating Matrix for: ", sofaStartRow, ", ", sofaStartCol, " | ", sofaEndRow, ", ", sofaEndCol );
    houseThingsArrangementMatrix[sofaStartRow][sofaStartCol] = '0';
    houseThingsArrangementMatrix[sofaEndRow][sofaEndCol] = '0';


    console.log("In The Find Possible Moves After Updating: ", houseThingsArrangementMatrix);


    const possibleMoves = await getPossibleMoves(houseThingsArrangementMatrix, rows, cols, sofa);

    // Reverse Changes In House Arrangement
    houseThingsArrangementMatrix[sofaStartingPosition.startingCoordinate.row][sofaStartingPosition.startingCoordinate.col] = 's';
    houseThingsArrangementMatrix[sofaStartingPosition.endingCoordinate.row][sofaStartingPosition.endingCoordinate.col] = 's';

    houseThingsArrangementMatrix[sofaEndingPosition.startingCoordinate.row][sofaEndingPosition.startingCoordinate.col] = 'S';
    houseThingsArrangementMatrix[sofaEndingPosition.endingCoordinate.row][sofaEndingPosition.endingCoordinate.col] = 'S';

    console.log("In The Find Possible Moves After Reversing: ", houseThingsArrangementMatrix);

    console.log("Returning possible Moves from findPossibleMoves(): ", possibleMoves);


    return possibleMoves;
};


export { findPossibleMovesForSofa };
