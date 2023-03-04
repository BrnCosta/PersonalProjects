import { wait } from './AuxFunctions';

const QuickSort = async (array: number[], left: number = 0, right: number = array.length - 1) => {
    if (left < right) {
        let pivot = partition(array, left, right);

        QuickSort(array, left, pivot - 1);
        QuickSort(array, pivot + 1, right);
    }

    return array;
}

const partition = (array: number[], left: number, right: number): number => {
    let range = right - left - 1;
    let random_pivot = Math.floor(Math.random() * range) + left;

    let aux = array[random_pivot];
    array[random_pivot] = array[left];
    array[left] = aux;

    let first = array[left];
    let next = left;

    for (let i = left + 1; i <= right; i++) {
        if (array[i] < first) {
            next++;
            let aux = array[i];
            array[i] = array[next];
            array[next] = aux;
        }
    }

    aux = array[next];
    array[next] = array[left];
    array[left] = aux;

    return next;
}

export default QuickSort;