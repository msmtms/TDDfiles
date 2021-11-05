import { alphabetWar, LEFT_SIDE_WINS, LETS_FIGHT_AGAIN, PARCHIES_SIDE_WINS, RIGHT_SIDE_WINS } from './index';

/*
  REQUIREMENTS
    Accept a string argument
    Accept only string argument, otherwise throw exception
    Not accept an empty string, throw exception
    Accept only the letters b, s, d, and z?
    Add up values for each side and test win condition based on which is greater
        LEFT SIDE
          b = 2, s = 1
        RIGHT SIDE
          d = 2, z = 1

        Left total > Right total => return "Left side wins!"
        Left total < Right total => return "Right side wins!"
    In the case of a tie or Left total = Right total, return "Let's fight again!"
    Accept any combination of valid characters, including duplicates

    IMPLEMENT NEW FEATURE
    Add third team

    AVOID
    Building "all-knowing oracles".
        An oracle that inspects more than necessary is more expensive and brittle over time.
        This very common error is dangerous because it causes a subtle but pervasive time sink across the
        complex project.
    Testing implementation details.
 */

describe('alphabetWar()', ()=> {
    it('should accept a string argument', () => {
        alphabetWar('b');
    });
    it('should accept only a string', function () {
        expect(() => {
            alphabetWar(1);
        }).toThrowError();
        expect(() => {
            alphabetWar(true);
        }).toThrowError();
        expect(() => {
            alphabetWar(()=>undefined);
        }).toThrowError();
        expect(() => {
            alphabetWar({});
        }).toThrowError();
        expect(() => {
            alphabetWar([]);
        }).toThrowError();
        expect(() => {
            alphabetWar(undefined);
        }).toThrowError();
        expect(() => {
            alphabetWar(null);
        }).toThrowError();
    });
    it('should not accept an empty string', function () {
        expect(() => {
            alphabetWar('');
        }).toThrowError();
    });
    it('should accept only the letters w, p, b, s, m, q, d, z, a, r, c, and h', function () {
        expect(() => {
            alphabetWar('j');
        }).toThrowError();
    });
    it('should add up values for each side and test win condition based on which is greater', function () {
        // Single character
        expect(alphabetWar('b')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('s')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('d')).toBe(RIGHT_SIDE_WINS);
        expect(alphabetWar('z')).toBe(RIGHT_SIDE_WINS);

        // Two characters
        expect(alphabetWar('bs')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('dz')).toBe(RIGHT_SIDE_WINS);

        // LEFT win combinations
        expect(alphabetWar('bsd')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('bsz')).toBe(LEFT_SIDE_WINS);

        // RIGHT win combinations
        expect(alphabetWar('bdz')).toBe(RIGHT_SIDE_WINS);
        expect(alphabetWar('sdz')).toBe(RIGHT_SIDE_WINS);

        // Parchies win combinations
        expect(alphabetWar('bdzar')).toBe(PARCHIES_SIDE_WINS);
        expect(alphabetWar('bsdar')).toBe(PARCHIES_SIDE_WINS);
    });
    it('should, in the case of a tie or Left total = Right total = parchies total, return "Let\'s fight again!"', function () {
        expect(alphabetWar('bsdzch')).toBe(LETS_FIGHT_AGAIN);
    });
    it('should accept any combination of valid characters, including duplicates', function () {
        // Duplicates
        expect(alphabetWar('bbdz')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('bsdd')).toBe(RIGHT_SIDE_WINS);

        // Mixed Order
        expect(alphabetWar('zbdb')).toBe(LEFT_SIDE_WINS);
        expect(alphabetWar('dbds')).toBe(RIGHT_SIDE_WINS);
    });
});