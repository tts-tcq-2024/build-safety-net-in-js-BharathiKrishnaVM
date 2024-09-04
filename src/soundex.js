function getSoundexCode(char) {
    char = char.toUpperCase();
    const soundexDict = {
        'B': '1', 'F': '1', 'P': '1', 'V': '1',
        'C': '2', 'G': '2', 'J': '2', 'K': '2', 'Q': '2', 'S': '2', 'X': '2', 'Z': '2',
        'D': '3', 'T': '3',
        'L': '4',
        'M': '5', 'N': '5',
        'R': '6',
        'A': '', 'E': '', 'I': '', 'O': '', 'U': '', 'H': '', 'W': '', 'Y': ''
    };
    return soundexDict[char];
}

function generateSoundex(name) {
    if (!name) return '';

    let soundex = name[0].toUpperCase();
    let prevCode = getSoundexCode(name[0]);

    for (let i = 1; i < name.length; i++) {
        let code = getSoundexCode(name[i]);
        if (code !== prevCode) {
            soundex+=code;
        }
        prevCode = code;
    }
    soundex = soundex.padEnd(4, '0').slice(0, 4);
    return soundex;
}

module.exports = {
    getSoundexCode,
    generateSoundex
};

