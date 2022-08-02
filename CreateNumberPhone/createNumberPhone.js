function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join().replace(/,/g, '')}) ${numbers.slice(3, 6).join().replace(/,/g, '')}-${numbers.slice(6, 10).join().replace(/,/g, '')}`    
}

