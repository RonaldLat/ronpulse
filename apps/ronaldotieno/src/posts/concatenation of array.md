---
title: Leetcode 1929 Python, Concatenation of Array
author: Ronald Otieno
date: 2023-10-1
layout: blog
published: true
excerpt: Solving array concatenation with Python
categories:
  - leetcode
---

## Problem

Given an integer array `nums` of length `n`, you want to create an array `ans` of length `2n` where`ans[i]==nums[i]` and `ans[i + n] ==nums[i]` for `0 <= i < n` (0 indexed).
Specifically, `ans` is the **concatenation** of two `nums` arrays.
Return the array `ans`.

## Solution 1

```python
def arrayConcatenation(nums):
    nums = [1,2,3]
    ans = nums + nums
    return ans
```

### Solution 2

- Take an array and append it to itself

```python
class Solution:
    def arrayConcatenation(self, nums):
        ans =[]
        for i in range(2):
            for n in nums:
                ans.append(n)
        return ans
```
