import './App.css'
import Solution from './Solution'

function HeapSort() {

    return (

    <Solution

    name="heap sort 🥞"
    question={<></>}
    code=
{`public class HeapSort {
        
    public static void heapSort(int[] A, int heapSize) {
        //I start heapSort by turning the array into a max heap.
        buildMaxHeap(A, heapSize);

        while (heapSize > 1) { //While the heap size is greater than 1,
            swap(A, 0, heapSize-1); //I swap the root and the bottom node.
            maxHeapify(A, 0, heapSize-1); //I then run maxHeapify starting from the root. 

            //I decrement the heapSize, 
            // as the bottom node now is in proper sorted order and I wish to ignore it on the next loop iterations.
            heapSize--;
        }
            
    }

    private static void buildMaxHeap(int[] A, int n) {
        for (int i = (n/2)-1; i >= 0; i--) { 
            //Start from the last node with children, going backwards in the heap, continually calling maxHeapify.
            maxHeapify(A, i, n);
        }
    }

    /**
     * A procedure to fix a Binary Max Heap.
     * @param A The Heap.
     * @param root Represents a potentially problematic root in the heap. This root may have children which are greater than it, which would be a violation of the Max Heap property.
     * @param n The size of the heap. 
     */
    private static void maxHeapify(int[] A, int root, int n) {
        int left = 2*root+1; 
        int right = 2*root+2;

        int biggest = root;

        //If the left is inbounds and the left child is bigger than the root, I need to set the biggest to the left child.
        if (left < n && A[root] < A[left]) 
            biggest = left;
        
        //If the right is inbounds and the "biggest" [biggest at this point is either the root or the left child] 
        //I need to set the biggest to the right child.
        if (right < n && A[biggest] <A[right])
            biggest = right;

        if (root == biggest) return; //If no swapping occurred, I exit this procedure.

        //Otherwise, I swap the biggest child with the root, 
        swap(A, biggest, root);

        //recursively call maxheapify starting from where biggest incorrectly was.
        maxHeapify(A, biggest, n);
    }

    /**
     * A simple helper function to swap two indices in the array. 
     * @param arr
     * @param i
     * @param j
     */
    public static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
  
}`}

    />
              
    )
}

export default HeapSort