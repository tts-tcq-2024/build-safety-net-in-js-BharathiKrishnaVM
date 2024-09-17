const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
     describe('generateSoundex', () => {
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
        expect(generateSoundex('S')).to.equal('S000');
        expect(generateSoundex('T')).to.equal('T000');
    });

    it('should handle special characters', () =>{
         expect(generateSoundex("S@m!th")).to.equal("S530");
    });

    it('should handle Repeated characters' ()=>{
        expect(generateSoundex("BASS")).to.equal("B120");
    });

    it('should return correct soundex codes for the given string', ()=> {
        expect(generateSoundex('Schmidt')).to.equal('S530');
        expect(generateSoundex('Rupert')).to.equal('R163');
        expect(generateSoundex('Rubin')).to.equal('R150');
    });

   it('should handle names with varying case', () => {
        expect(generateSoundex('robert')).to.equal('R163');
        expect(generateSoundex('Rupert')).to.equal('R163');
   });
})
})
