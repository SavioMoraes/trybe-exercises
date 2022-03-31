def most_frequent(nums):
    if len(nums) == 0:
        return None

    most_frequent_num = nums[0]
    frequency = {}

    for num in nums:
        if num not in frequency:
            frequency[num] = 1
        else:
            frequency[num] += 1

        if frequency[num] > frequency[most_frequent_num]:
            most_frequent_num = num
    return most_frequent_num


if __name__ == "__main__":
    test1 = [0, 0, -1, 3, 5, 1, 5, 1, 2, 0, 8, 1, -2, 0, 1]
    test2 = []
    test3 = [1, 2, 3]
    test4 = [5, 5, 5, 2, 2, 3, 3, 3, 3, 10, 10, 10, 10, 10, 10]
    print(most_frequent(test1))
    print(most_frequent(test2))
    print(most_frequent(test3))
    print(most_frequent(test4))
