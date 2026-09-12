// MergeSort Function
// 7-	Print x


using System;
using System.Security.Cryptography.X509Certificates;
class Program
{

    // 1-	Read the array(x), start and end index of the portion (part) that we need to sort
    static public void MergeSort(int[] array, int start, int end)
    {
        // 2-	Don’t continue if end equal of greater than start
        if (end <= start) return;

        // 3-	Calculate the midpoint = (start + end) / 2
        // 4-	Getting midpoint result with floor 
        int midpoint = (start + end) / 2;


        // 5-	Divide the portion of the array into new two arrays
        MergeSort(array, start, midpoint);
        MergeSort(array, midpoint + 1, end);
        // 6-	Call yourself twice, one for the left portion ,the other for the right portion
        Merge(array, start, midpoint, end);

        // - Merge Function
        // 2-	Create two new arrays for each side
        // 3-	Compare all items in the array and sort them in the original array
        // 4-	Move remain items in each array to the original array as is

        // 1-	Read the array(x), start, midpoint and end index
    }
    public static void Merge(int[] array, int start, int midpoint, int end)
    {
        int i, j, k;

        // create the length of two arrays
        int left_length = midpoint - start + 1;
        int right_length = end - midpoint;

        // create two arrays and link their length to them
        int[] left_array = new int[left_length];
        int[] right_array = new int[right_length];

        // make for loop o add data to left and right
        for (i = 0; i < left_length; i++)
        {
            left_array[i] = array[start + i];
        }

        for (j = 0; j < right_length; j++)
        {
            right_array[j] = array[midpoint + 1 + j];
        }

        i = j = 0;
        k = start;
        while (i < left_length && j < right_length)
        {
            if (left_array[i] <= right_array[j])
            {
                array[k] = left_array[i];
                i++;
            }
            else
            {
                array[k] = right_array[j];
                j++;
            }
            k++;
        }

        while (i < left_length)
        {
            array[k] = left_array[i];
            i++;
            k++;
        }
        while (j < right_length)
        {
            array[k] = right_array[j];
            j++;
            k++;
        }
    }

    public static void Main(string[] args)
    {
        int[] array = { 9, 5, 1, 4 };
        Console.WriteLine(String.Join(", ", array));
        MergeSort(array, 0, array.Length - 1);
        Console.WriteLine(String.Join(", ", array));
    }

}


