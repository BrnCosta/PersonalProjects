import { wait } from './AuxFunctions';

const MergeSort = async (array: number[], waitValue: number, setNumbers: any, start = 0, end = array.length - 1) => {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        await MergeSort(array, waitValue, setNumbers, start, mid);
        await MergeSort(array, waitValue, setNumbers, mid + 1, end);

        let leftIndex = start;
        let rightIndex = mid + 1;
        let auxArray = [];

        while (leftIndex <= mid && rightIndex <= end) {
            const left = document.getElementById(leftIndex.toString());
            const right = document.getElementById(rightIndex.toString());

            left?.classList.add('selected');
            right?.classList.add('compared');

            await wait(waitValue);

            if (array[leftIndex] < array[rightIndex]) {
                auxArray.push(array[leftIndex]);
                left?.classList.remove('selected');
                leftIndex++;
            } else {
                auxArray.push(array[rightIndex]);
                right?.classList.remove('compared');
                rightIndex++;
            }

            setNumbers([...array]);

            await wait(waitValue);
            left!.className = 'bar';
            right!.className = 'bar';
            await wait(0.1);
        }

        while (leftIndex <= mid) {
            const left = document.getElementById(leftIndex.toString());
            left?.classList.add('selected');
            auxArray.push(array[leftIndex]);
            leftIndex++;
            setNumbers([...array]);
            await wait(waitValue);
            left!.className = 'bar';
            await wait(waitValue);
        }

        while (rightIndex <= end) {
            const right = document.getElementById(rightIndex.toString());
            right?.classList.add('selected');
            auxArray.push(array[rightIndex]);
            rightIndex++;
            setNumbers([...array]);
            await wait(waitValue);
            right!.className = 'bar';
            await wait(waitValue);
        }

        for (let i = start; i <= end; i++) {
            array[i] = auxArray[i - start];
            const bar = document.getElementById(i.toString());
            bar?.classList.add('sorted');
            setNumbers([...array]);
            await wait(waitValue);
        }
    }
};

export default MergeSort;