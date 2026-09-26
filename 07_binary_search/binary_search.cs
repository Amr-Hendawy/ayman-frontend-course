using System;
class Program
{
    static int BinarySearch(int[] arr, int key)
    {
        int low = 0;
        int high = arr.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;

            if (arr[mid] == key)
            {
                return mid;
            }
            if (arr[mid] > key)
            {
                high = mid - 1;
            }
            else
            {
                low = mid + 1;
            }
        }
        return -1;
    }

    static void Main()
    {
        int[] x = { 1, 2, 5, 7, 10, 13 };

        Console.WriteLine(BinarySearch(x, 7));
    }
}