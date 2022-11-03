
def twoSum(nums, target):
    List = []
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            print(i, j)
            
            if nums[i]+ nums[j]==target:
                List.append(i)
                List.append(j)

    return List

print(twoSum([3, 3], 6))