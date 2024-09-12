const { expect } = require('chai');
const { generateSoundex } = require('../src/soundex');

describe('Soundex Algorithm', () => {
    
    it('should handle empty strings', () => {
        expect(generateSoundex("")).to.equal("0000");
    });

    it('should handle single characters', () => {
        expect(generateSoundex("A")).to.equal("A000");
    });

    it('should handle special characters', () =>{
         expect(generateSoundex("S@m!th")).to.equal("S530");
    });

    it('should handle Repeated characters' ()=>{
        expect(generateSoundex("BASS")).to.equal("B120");
    });

    it('should handle string text', ()=> {
        expect(generateSoundex('Schmidt')).to.equal('S530');
    });
    
})
