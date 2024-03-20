export const questionMark = (str)=>{
    if(str.length> 5){
        const newStr = str.replace(/[^0-9?]/g,'')
        let newStrArr = newStr.split('')
        let sums =[]
        let sum = 0
        let iterator = 0
        newStrArr.forEach(e => {
            if(e !== '?'){
                sum = parseInt(e) + parseInt(newStrArr[iterator+4])
                sums.push(sum)
            }

            iterator+=1
        });
        console.log(sums);
    }
}

export const LetterChanges= (str)=>{
    let newStr = str.toLowerCase().replace(/[a-z]/g, char => {
        if(char ==='z'){
            return 'a'
        }else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
    })
    let capitalized = newStr.replace(/[a|e|u|i|o]/gi, char => {
        return char.toUpperCase()
    })
    console.log(capitalized);

}

export const simpleAdding = (str)=>{
    let sum = 0;
    for(let i =0; i<=str; i++){
        sum +=i
    }
    console.log(sum);
}

export const letterCapitalize = (str) => {
    let newArr = str.split(' ')
    let letter;
    let word;
    let result = '';
    for(let i =0; i<newArr.length; i++){
        letter = newArr[i].charAt(0).toUpperCase()
        word = newArr[i].slice(1, newArr[i].length)
        result += letter + word + ' '
    }
    console.log(result);
}
 
export const simpleSymbols = (str)=>{
    let newName;
    for(let i = 0; i< str.length; i++){
        newName = str.replace(/[^a-zA-Z+=]/, '')
    }
    console.log(newName);
}