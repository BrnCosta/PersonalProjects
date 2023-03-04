export const wait = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

export const resetNumbers = (size: number): number[] => {
    let aux: number[] = [];
    for (let i = 0; i < size; i++) {
        aux.push(Math.floor((Math.random() * 49) + 1));

        let item = document.getElementById(i.toString());

        if (item !== null) {
            item.className = 'bar';
        }
    }

    return aux;
}

