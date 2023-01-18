function analyzeArray(array)  {

    let object = {};
    
    const average = (array) =>   {
        let total = 0;
        for(let i = 0; i < array.length; i++)   {
            total += array[i]
        }
        return total / array.length
    }

    const min = (array) =>   {
        let sortedArray = array.sort((a, b) => a - b);
        return sortedArray[0];
    }

    const max = (array) =>   {
        let sortedArray = array.sort((a, b) => a - b);
        return sortedArray[array.length - 1];
    }

    const length = (array) =>   {
        return array.length;
    }

    
    object.average = average(array);
    object.min = min(array);
    object.max = max(array);
    object.length = length(array);

    return object;

}

export { analyzeArray };