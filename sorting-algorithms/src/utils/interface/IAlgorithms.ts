
export interface Algorithm {
    name: string;
    icon: string;
    class: string;
    p1: string;
    p2: string;
    p3: string;
    space_complexity: string;
    best_complexity: string;
    average_complexity: string;
    worst_complexity: string;
}

export const AlgorithmArray: Algorithm[] = [
    {
        name: 'Bubble sort',

        icon: 'bubble_chart',

        class: 'algo-title active',

        p1: 'Bubble sort works by repeatedly swapping adjacent elements in a list until the list is sorted.\
        The algorithm works by starting at the beginning of the list and comparing each pair of adjacent elements.\
        If the two elements are in the wrong order (i.e. the first is greater than the second), they are swapped.\
        This process is repeated until the end of the list is reached.',

        p2: 'After the first pass through the list, the largest element will have "bubbled up" to the end of the list.\
        The algorithm then repeats the process, but this time only iterates through the unsorted part of the list (i.e. everything before the last element).\
        This process is repeated until the entire list is sorted.',

        p3: 'Bubble sort has a time complexity of O(n*n), where n is the number of elements in the list.\
        This means that as the size of the list grows, the time it takes to sort the list grows exponentially.\
        As a result, bubble sort is not efficient for sorting large arrays and is generally only used for educational\
        purposes or for small datasets where simplicity is more important than efficiency.',

        space_complexity: 'O(1)',

        best_complexity: 'O(n)',

        average_complexity: 'O(n*n)',

        worst_complexity: 'O(n*n)',
    },

    {
        name: 'Merge sort',

        icon: 'cell_merge',

        class: 'algo-title',

        p1: 'Merge sort is a divide-and-conquer sorting algorithm that works by repeatedly dividing the input list in half, \
        sorting each half recursively using merge sort, and then merging the two sorted halves back together. \
        The key to the algorithm is the merging step, which combines two sorted sublists into a single sorted list.',

        p2: 'The merging process works by comparing the first element of each sublist, and adding the smaller of the two elements to the merged list. \
        The process is repeated until one of the sublists is empty, at which point the remaining elements from the other sublist are added to the merged list. \
        The resulting merged list is then returned as the sorted sublist.',

        p3: 'Merge sort has a time complexity of O(n log n) in the worst case, making it a very efficient sorting algorithm. \
        It is also a stable sorting algorithm, meaning that the relative order of equal elements is preserved.',

        space_complexity: 'O(n), but O(1) if an in-place merge sort',

        best_complexity: 'O(n log n)',

        average_complexity: 'O(n log n)',

        worst_complexity: 'O(n log n)',
    },

    {
        name: 'Quick sort',

        icon: 'offline_bolt',

        class: 'algo-title',

        p1: 'Quick sort is a divide-and-conquer sorting algorithm that works by partitioning the input list into two sublists, \
        one containing elements smaller than a chosen pivot element, and the other containing elements larger than the pivot. \
        The algorithm then recursively sorts the two sublists. The key to the algorithm is the partitioning step, which can be implemented in different ways, \
        but usually involves choosing a pivot element and rearranging the list so that all elements smaller than the pivot come before it, \
        and all elements larger than the pivot come after it.',

        p2: 'The partitioning process works by selecting a pivot element (e.g. the first element in the list), and then partitioning the list into two sublists,\
        one containing elements smaller than the pivot and the other containing elements larger than the pivot. \
        The pivot element is then placed between the two sublists, and the process is repeated recursively on each sublist until the entire list is sorted.',

        p3: 'Quick sort has a time complexity of O(n log n) on average, making it an efficient sorting algorithm. \
        However, it can degrade to O(n^2) in the worst case if the pivot is poorly chosen (e.g. if it is the largest or smallest element in the list). \
        Quick sort is not a stable sorting algorithm, meaning that the relative order of equal elements may not be preserved. \
        Despite its worst-case complexity, quick sort is widely used due to its efficiency and versatility.',

        space_complexity: 'O(log n) on average, O(n) worst case (when the recursive tree is unbalanced)',

        best_complexity: 'O(n log n)',

        average_complexity: 'O(n log n)',

        worst_complexity: 'O(n*n)',
    },

    {
        name: 'Heap sort',

        icon: 'horizontal_split',

        class: 'algo-title',

        p1: 'Heap sort is a comparison-based sorting algorithm that works by first building a binary heap from the input list, \
        and then repeatedly extracting the maximum element and restoring the heap property. The key to the algorithm is the heap data structure, \
        which is a complete binary tree where each node satisfies the heap property \
        (i.e. the parent node is always greater than or equal to its child nodes).',

        p2: 'The heap construction process works by repeatedly inserting each element into the heap and restoring the heap property \
        by swapping the element with its parent until the heap property is satisfied. Once the heap is constructed, the maximum element \
        (which is the root of the heap) is extracted and swapped with the last element in the heap, and the heap property is restored by \
        sifting down the new root element until it satisfies the heap property. This process is repeated until all elements have been extracted and sorted.',

        p3: 'Heap sort has a time complexity of O(n log n) in the worst case, making it an efficient sorting algorithm. \
        However, it is not a stable sorting algorithm, meaning that the relative order of equal elements may not be preserved.',

        space_complexity: 'O(1) in-place sorting',

        best_complexity: 'O(n log n)',

        average_complexity: 'O(n log n)',

        worst_complexity: 'O(n log n)',
    }
]; 