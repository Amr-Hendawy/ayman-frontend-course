using System;
using System.Collections;

public class CharFreq
{
    public void AnyCodeMethod(string message)
    {
        Console.WriteLine("==== Any Code Method ====");
        Hashtable freq = new Hashtable();

        for (int i = 0; i < message.Length; i++)
        {
            if (freq[message[i] == null])
            {
                freq[message[i]] = 1;
            }
            else
            {
                freq[message[i]] = (int)freq[message[i]] + 1;
            }
        }
        foreach (Char k in freq.Keys)
        {
            Console.Write(k + " ");
            Console.WriteLine(freq[k]);

        }
    }
    public void SortHash(Hashtable freq)
    {
        int[,] freqArray = new int[freq.Count, 2];
        int i = 0;
        foreach (Char k in freq.keys)
        {
            freqArray[i, 0] = (int)k;
            freqArray[i, 1] = freq[k];
            i++;
        }
        // this.Sort()
        Console.WriteLine("=== Print Sorted Data ====");

        for (i = 0; i < freq.Count; i++)
        {
            Console.Write((char)freqArray[i, 0] + " ");
            Console.WriteLine(freqArray[i, 1]);
        }

    }

    public void Sort(int[,] array, int start, int end)
    {
        if (end <= start) return;
        int midpoint = (end + start) / 2;
        Sort(array, start, midpoint);
        Sort(array, midpoint + 1, end);
        Merge(array, start, midpoint, end);
    }
    public void Merge(int[,] array, int start, int mid, int end)
    {
        int i, j, k;
        left_length = mid - start + 1;
        right_length = end - start;
        int[,] left_array = new int[left_array, 2];
        int[,] right_array = new int[right_length, 2];

        for (i = 0; i < left_length; i++)
        {
            left_array[i, 0] = array[start + i, 0];
            left_array[i, 1] = array[start + i, 1];
        }

        for (j = 0; j < right_length; j++)
        {
            right_array[i, 0] = array[mid + 1 + j, 0];
            right_array[i, 1] = array[mid + i + j, 1];
        }
        i = 0;
        j = 0;
        k = start;
        while (i < left_length && j < right_length)
        {
            if (left_array[i, 1] <= right_array[j, 1])
            {
                array[k, 0] = left_array[i, 0];
                array[k, 1] = left_array[i, 1];
                i++;
            }
            else
            {
                array[k, 0] = right_array[j, 0];
                array[k, 1] = right_array[j, 1];
                j++;
            }
        }
        while (i < left_array)
        {
            array[k, 0] = left_array[i, 0];
            array[k, 1] = left_array[i, 1];
            i++;
            k++;
        }
        while (j < right_array)
        {
            array[k, 0] = right_array[j, 0];
            array[k, 1] = right_array[j, 1];
            j++;
            k++;
        }
    }
}
