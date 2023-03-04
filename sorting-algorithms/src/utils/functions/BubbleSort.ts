import { wait } from './AuxFunctions';

const BubbleSort = async (numbers: number[], waitValue: number, setNumbers: any) => {
    let auxArray = [...numbers];
    let lastNumber = numbers.length - 1;
    for (let i = 0; i < lastNumber; i++) {
        for (let j = 0; j < lastNumber - i; j++) {
            let aux = 0;

            let first = document.getElementById(j.toString());
            let second = document.getElementById((j + 1).toString());

            first?.classList.add('selected');
            second?.classList.add('compared');

            await wait(waitValue);

            if (auxArray[j] > auxArray[j + 1]) {

                first?.classList.remove('selected');
                second?.classList.remove('compared');

                aux = auxArray[j];
                auxArray[j] = auxArray[j + 1];
                auxArray[j + 1] = aux;
                await wait(waitValue);
                setNumbers([...auxArray]);

                first?.classList.add('compared');
                second?.classList.add('selected');
            }

            await wait(waitValue);
            first!.className = 'bar';
            second!.className = 'bar';
            await wait(waitValue);

            if (j + 1 === lastNumber - i)
                document.getElementById((j + 1).toString())?.classList.add('sorted');

        }
    }

    document.getElementById('0')?.classList.add('sorted');
};

export default BubbleSort;