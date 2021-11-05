export const LEFT_SIDE_WINS = 'Left side wins!';
export const RIGHT_SIDE_WINS = 'Left side wins!';
export const PARCHIES_SIDE_WINS = 'Parchies side wins!';
export const LETS_FIGHT_AGAIN = 'Let\'s fight again!';

// Left Team Values
const W_VALUE = 4;
const P_VALUE = 3;
const B_VALUE = 2;
const S_VALUE = 1;

// Right Team Values
const M_VALUE = 4;
const Q_VALUE = 3;
const D_VALUE = 2;
const Z_VALUE = 1;

// Parchies Team Values
const A_VALUE = 4;
const R_VALUE = 3;
const C_VALUE = 2;
const H_VALUE = 1;


export const alphabetWar = (warString) => {
    if(typeof warString !== 'string') {
        throw new Error('Invalid argument type. Argument must be a string.');
    }
    if(warString.length === 0) {
        throw new Error('Invalid argument. Argument must contain at least one valid character.');
    }
    if(!warString.match(/[wpmqarchbsdz]+/)) {
        throw new Error('Invalid argument. Argument must only contain a combination of the characters "b", "s", "d", and "z"');
    }

    let teamScores = {
        left: 0,
        right: 0,
        parchies: 0
    };
    [...warString].forEach(character => {
        switch(character) {
            case 'w':
                teamScores.left += W_VALUE;
                break;
            case 'p':
                teamScores.left += P_VALUE;
                break;
            case 'b':
                teamScores.left += B_VALUE;
                break;
            case 's':
                teamScores.left += S_VALUE;
                break;
            case 'm':
                teamScores.right += M_VALUE;
                break;
            case 'q':
                teamScores.right += Q_VALUE;
                break;
            case 'd':
                teamScores.right += D_VALUE;
                break;
            case 'z':
                teamScores.right += Z_VALUE;
                break;
            case 'a':
                teamScores.parchies += A_VALUE;
                break;
            case 'r':
                teamScores.parchies += R_VALUE;
                break;
            case 'c':
                teamScores.parchies += C_VALUE;
                break;
            case 'h':
                teamScores.parchies += H_VALUE;
                break;
            default:
                break;
        }
    });
    if(teamScores.left > teamScores.right) {
        if(teamScores.left > teamScores.parchies) {
            return LEFT_SIDE_WINS;
        } else if(teamScores.left === teamScores.parchies) {
            return LETS_FIGHT_AGAIN;
        } else {
            return PARCHIES_SIDE_WINS;
        }
    } else {
        if(teamScores.right > teamScores.parchies) {
            return RIGHT_SIDE_WINS;
        } else if(teamScores.right === teamScores.parchies) {
            return LETS_FIGHT_AGAIN;
        } else {
            return PARCHIES_SIDE_WINS;
        }
    }
}