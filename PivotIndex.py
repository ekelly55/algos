def PivotIndex(nums):
    
    LeftSum = 0
    TotalSum = 0
    for int in nums:
        TotalSum += int
    RightSum = TotalSum - nums[0]
    i = 0
    print(f'LeftSum is {LeftSum}')
    print(f'RightSum is {RightSum}')
    while i < len(nums):
        print('running')
        if(not LeftSum == RightSum):
            print(f'i = {i} checking nums[i]. its {nums[i]}')
            print(f'left sum is unequal to right sum. increase left sum by {nums[i]}, decrease right sum by {nums[i+1]}, increment i')
            LeftSum += nums[i]
            RightSum -= nums[i+1]
            i += 1
            print(f'LeftSum is {LeftSum}')
            print(f'RightSum is {RightSum}')  
            print(f'i is {i}')              
        elif(LeftSum == RightSum):
            print(f'LeftSum is {LeftSum}')

            print(f'RightSum is {RightSum}')            
            print(f'pivot index is {i}')            
            return i    
    print('no pivot index')            
    return -1

# print(PivotIndex([-1, -1, 0, 1, 1, 0]))
print(PivotIndex([1,7,3,6,5,6]))