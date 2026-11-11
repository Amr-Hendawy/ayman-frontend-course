class CharFreq:
    def __init__(self, message):
        self.message = message

    def ascii_method(self):
        print("ASCIIMethod")

        freq = [0] * 128

        for i in range(len(self.message)):
            current_code = ord(self.message[i])
            freq[current_code] += 1

        for i in range(len(freq)):
            if freq[i] > 0:
                c = chr(i)
                print(f"{c} {freq[i]}")


if __name__ == "__main__":
    cf = CharFreq("hello world")
    cf.ascii_method()
