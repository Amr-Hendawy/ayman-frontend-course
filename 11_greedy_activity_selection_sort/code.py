def activity_selection_sort_algorithm(start, end):
    result = [0]
    j = 0
    for i in range(1, len(start)):
        if start[i] >= end[j]:
            result.append(i)
            j = i
    print(result)

s = [9, 10, 11, 12, 13, 15]
e = [11, 11, 12, 14, 15, 16]
activity_selection_sort_algorithm(s, e)