const extension = {
    // Define a new block
    blocks: [
        {
            opcode: 'countCharacter', 
            blockType: 'reporter', 
            text: 'count how many [CHAR] in [STRING]',
            arguments: {
                CHAR: {
                    type: 'string', 
                    defaultValue: 'a'
                },
                STRING: {
                    type: 'string',
                    defaultValue: 'apple'
                }
            }
        }
    ],

    // Define the behavior of the block
    countCharacter: function(args) {
        const character = args.CHAR;
        const string = args.STRING;
        
        // Count occurrences of character in the string
        let count = 0;
        for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
                count++;
            }
        }
        return count;  // Return the result
    }
};

// Register the extension
Scratch.extensions.register(extension);
