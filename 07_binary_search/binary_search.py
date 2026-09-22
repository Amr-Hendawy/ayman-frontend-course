def binary_search(x, key):
    low = 0
    high = len(x) - 1

    while low <= high:
        mid = (high + low) // 2
        # print(mid)
        if key == x[mid]: 
            return mid
        else:
            if key > x[mid]:
                low = mid + 1
            else:
                high = mid - 1
    return -1;
test_array =[1,5,6,7,10,15]
print(binary_search(test_array, 7))