---
layout: post
title: Merged Sorted Arrays
category: tech
description: Given two sorted integer arrays A and B, merge B into A as one sorted array. 
---

##Merge Sorted Array

Given two sorted integer arrays A and B, merge B into A as one sorted array.

Note:
You may assume that A has enough space (size that is greater or equal to m + n) to hold additional elements from B. The number of elements initialized in A and B are m and nrespectively.
    
    public class Solution {
        public void merge(int A[], int m, int B[], int n) {
            int curr = m + n - 1;    // note: cannot use A.length - 1
            int i = m - 1;
            int j = n - 1;
            while (i >= 0 && j >= 0) {
                if (A[i] > B[j]) {
                    A[curr--] = A[i--];
                } else {
                    A[curr--] = B[j--];
                }
            }
            
            while(i >= 0) {
                A[curr--] = A[i--];
            }
            
            while (j >= 0) {
                A[curr--] = B[j--];
            }
            
        }
    }    

Analysis: time complexity: o(m + n), space complexity o(1);