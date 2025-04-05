const fs = require ('fs');

fs.writeFile('message.txt', 'Node.js is awesome', (err) => {
    if (err) 
        return console.log("Error writing to file", err);
    console.log("File written successfully");

fs.readFile('message.txt', 'utf8', (err, data) =>{
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);

        fs.unlink('message.txt', (err) => {
            if (err) {
                console.log("Error deleting sample.txt", err);
            } else {
                console.log("File deleted successfully");
            }
        });
    }
    );
}
);



