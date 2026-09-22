def merge_sort(array, start, end):
    if end <= start:
        return

    mid = (start + end) // 2

    merge_sort(array, start, mid)
    merge_sort(array, mid + 1, end)
    merge(array, start, mid, end)


def merge(array, start, mid, end):
    left_length = mid - start + 1
    right_length = end - mid
    left_array = [0] * left_length
    right_array = [0] * right_length

    for i in range(left_length):
        left_array[i] = array[start + i]

    for j in range(right_length):
        right_array[j] = array[mid + 1 + j]

    i = 0
    j = 0
    k = start

    while i < left_length and j < right_length:
        if left_array[i] <= right_array[j]:
            array[k] = left_array[i]
            i += 1
        else:
            array[k] = right_array[j]
            j += 1
        k += 1

    while i < left_length:
        array[k] = left_array[i]
        i += 1
        k += 1

    while j < right_length:
        array[k] = right_array[j]
        j += 1
        k += 1


array = [5, 3, 4, 2, 10, 1, 12]
merge_sort(array, 0, len(array) - 1)
print(array)