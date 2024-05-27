def merge_sorted(list1, list2):
    sorted =[]
    for l1, l2 in zip(list1, list2):
        if l1 == l2 :
            sorted.append(l1)
            sorted.append(l2)
        elif l1 <l2:
            sorted.append(l1)
            sorted.append(l2)

    print(sorted)

list1 = [1,2,4]
list2 = [1,3,4]
merge_sorted(list1, list2)

