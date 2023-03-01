# Given an array of integers, determine whether the array is monotonic or not.
#what is monotonic: either constant, constantly increasing or constantly decreasing. in other words, outputs have a constantly +, - or 0 delta.

#play with all() method first. it's all or nothing...all true or it's false. research more uses of all()

nums = [1, 1, 1, 1, 1]
# nums.reverse()
# print(nums)


# print(all(nums[i] <= nums[i+1] for i in range(len(nums) -1)))



def MonotonicArray(arr):
    return (all(nums[i] <= nums[i+1] for i in range(len(nums)-1)) or all(nums[i] >= nums[i+1] for i in  range(len(nums)-1)))



print(MonotonicArray(nums))