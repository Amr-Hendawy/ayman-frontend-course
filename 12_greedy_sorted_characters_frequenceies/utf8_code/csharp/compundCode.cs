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
            if (freq[message[i]] == null)
            {
                freq[message[i]] = 1;
            }
            else
            {
                freq[message[i]] = (int)freq[message[i]] + 1;
            }
        }
        foreach (char k in freq.Keys)
        {
            Console.Write(k + " ");
            Console.WriteLine(freq[k]);

        }
        SortHash(freq);
    }
    public void SortHash(Hashtable freq)
    {
        int[,] freqArray = new int[freq.Count, 2];
        int i = 0;
        foreach (char k in freq.Keys)
        {
            freqArray[i, 0] = (int)k;
            freqArray[i, 1] = (int)freq[k];
            i++;
        }
        this.Sort(freqArray, 0, freq.Count - 1);
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
        int left_length = mid - start + 1;
        int right_length = end - mid;
        int[,] left_array = new int[left_length, 2];
        int[,] right_array = new int[right_length, 2];

        for (i = 0; i < left_length; i++)
        {
            left_array[i, 0] = array[start + i, 0];
            left_array[i, 1] = array[start + i, 1];
        }

        for (j = 0; j < right_length; j++)
        {
            right_array[j, 0] = array[mid + 1 + j, 0];
            right_array[j, 1] = array[mid + 1 + j, 1];
        }
        i = 0;
        j = 0;
        k = start;
        while (i < left_length && j < right_length)
        {
            if (left_array[i, 1] >= right_array[j, 1])
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
            k++;
        }
        while (i < left_length)
        {
            array[k, 0] = left_array[i, 0];
            array[k, 1] = left_array[i, 1];
            i++;
            k++;
        }
        while (j < right_length)
        {
            array[k, 0] = right_array[j, 0];
            array[k, 1] = right_array[j, 1];
            j++;
            k++;
        }
    }
}

class Program
{
    public static void Main(string[] args)
    {
        CharFreq cf = new CharFreq();

        string msg = "Computer programming is the composition of sequences of instructions, called programs, that computers can follow to perform tasks.[1][2] It typically involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages.Today, programmers generally use high-level programming languages that are more easily intelligible to humans than machine code, which is directly executed by the central processing unit. Proficient programming usually requires expertise in several different subjects, including knowledge of the application domain, details of programming languages and generic code libraries, specialized algorithms, and formal logic.Auxiliary tasks accompanying and related to programming include analyzing requirements, testing, debugging (investigating and fixing problems), implementation of build systems, and management of derived artifacts, such as programs' machine code. While these are sometimes considered programming, often the term software development is used for this larger overall process – with the terms programming, implementation, and coding reserved for the writing and editing of code per se. Sometimes software development is known as software engineering, especially when it employs formal methods or follows an engineering design process";
        cf.AnyCodeMethod(msg);
    }
}