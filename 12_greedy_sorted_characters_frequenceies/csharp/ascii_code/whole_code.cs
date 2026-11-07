using System;
public class CharFreq
{
    public CharFreq() { }
    public void ASCIIMethod(string message)
    {
        Console.WriteLine("ASCIIMethod");
        int[] freq = new int[127];
        for (int i = 0; i < message.Length; i++)
        {
            int current_code = (int)message[i];
            freq[current_code]++;
        }
        for (int i = 0; i < freq.Length; i++)
        {
            if (freq[i] > 0)
            {
                char c = (char)i;
                Console.Write(c + " ");
                Console.WriteLine(freq[i]);
            }
        }
    }
}
class Program
{
    public static void Main(string[] args)
    {
        CharFreq cf = new CharFreq();

        string msg = "hello world";

        cf.ASCIIMethod(msg);
    }
}