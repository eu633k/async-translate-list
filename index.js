import fs from 'node:fs'
import translate from 'translate'

const args = process.argv.slice(2);
const params = {}
let i = 0
while (i < args.length) {
    const key = args[i].replace('--', '')
    const value = args[i + 1]
    params[key] = value
    i += 2
}

const {from, to, engine} = params

const filePath = './files';

async function translateWord(word) {
    const translatedWord = await translate(word, { from, to, engine });
    return translatedWord
}

async function modifyLine(line, i) {
    try {
        const word = line.trim();
        const translatedWord = await translateWord(word);
        return `${word}-${translatedWord}`
    } catch (error) {
        console.log(`Error on ${i} word (${line}): ${error}`)
    }
}

fs.readdir(filePath, (err, files) => {
    const readPromises = files.map(file => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath + `/${file}`, 'utf8', async (err, data) => {
                if (err) {
                    reject(err)
                }
            
                const lines = data.split('\n');
                const modifiedLines = await Promise.all(lines.map(modifyLine));
            
                const modifiedData = modifiedLines.join('\n');
            
                fs.writeFile(`./translated/${file}`, modifiedData, 'utf8', (err) => {
                    if (err) {
                        reject(err)
                    return;
                    }
                    resolve(`${file} is ready! 🚀`)
                })
            })
        })
    })
    Promise.all(readPromises)         
})



  
  
  
  
  


