---
layout: post
title: Bit Manipulation
category: tech
description: Basic Bit Manipulation and example questions
---

##Bit Manipulation

###Basic bit manipulation:

 
*Get Bit*
	
	int getBit(int num, int i) {
		return (num & (1 << i));
	}


*Set Bit*
	
	 void setBit(int num, int i) {
		num |= (1 << i);
	}


*Clear Bit*
	
	void clearBit(int num, int i) {
		int mask = ~(1 << i);
		num &= mask;	
	}
	
	
*Update Bit*
	
	void updateBit(int num, int i, int v) {
		int mask = ~(1 << i);
		num &= (mask | (v << i));	
	}

###Examples

####1. Number of 1 Bits
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3. 

#####Solution 1:

	public class Solution {
        // you need to treat n as an unsigned value
        public int hammingWeight(int n) {
            int num = 0;
            while(n != 0) {
                if((n & 1) != 0) {
                    num++;
                }
                n = n >>> 1; //(>>> is unsigned right shift)
            }
            return num;
        }
    }
Problem: Will execute 32 times no matter what the number is.

#####Solution 2:

	public class Solution {
        // you need to treat n as an unsigned value
        public int hammingWeight(int n) {
            int num = 0;
            while(n != 0) {
                num++;
                n &= (n - 1);
            }
            return num;
        }
    }
Tips: n&(n-1) will get rid of a '1' bit from right to left, thus it will only execute the numebr of the '1' bits times, which highly improve the efficiency.

####2. Reverse Bits

Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

	public class Solution {
        // you need treat n as an unsigned value
        public int reverseBits(int n) {
           int result = 0;
           for (int i = 0; i < 32; i++){
               result <<= 1;     // must left shift result first, no <<<
               result |= (n & 1);
               n >>>= 1;    
           }
           return result;
        }
    }
 
####3. Bitwise AND of Numbers Range 

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

For example, given the range [5, 7], you should return 4.

#####*Analysis* 

Numbers between 5 and 7 are: <font color="red">01</font>01, <font color="red">01</font>10, <font color="red">01</font>11, the result of bitwise And of these three numbers are 0100, which is 4;

Take another example: [27, 30], <font color="red">11</font>011， <font color="red">11</font>100，<font color="red">11</font>101，<font color="red">11</font>110, the reusult of hitwise And of these 4 numbers is 11000, we can see that the result is the consecutive bits starting from left they share in common. In this case is '11', the following will be all '0' since they don't have in common. Thus we can have the following solution:

    public class Solution {
        public int rangeBitwiseAnd(int m, int n) {
            int i = 0;
            while(m != n) {
                m >>= 1;
                n >>= 1;
                i++;
            }
            return n<<i;
        }
    } 
    

####4. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.
#####*Note*:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

#####*Solution1*:

A first thought would be using a hashmap to store the element in the array while traversing it, if the element is not in the hasmap, put it in, if already exists, remove it from the hashmap, then the one left in the hashmap would be the single number. The time efficiency is o(n), but it would use extra memory.

#####*Solution2*:

Another solution is using bit manipulation.

*Tips*: A ^ 0 = A; A ^ A = 0; A ^ B ^ C = A ^ (B ^ C);

	public class Solution {
        public int singleNumber(int[] A) {
            if (A == null || A.length == 0) {
                return 0;
            }
            int ret = A[0];
            for (int i = 1; i < A.length; i++) {
                ret ^= A[i];
            }
            return res;
        }
    }
 
####5. Single Number II 

Given an array of integers, every element appears three times except for one. Find that single one.

#####*Note*:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

#####*Analysis*:

Linear runtime complexity means we can only traverse the array once. No extra memory mean we can not use hashmap. Thus we can considre using bit manipulation. 

Each interger has 32 bits. Since every element appreas three times except for one, we know that the number of '1' on each bits will be multiple of 3 plus 0 or 1(the single number we are looking for also have '1' on this bit). Thus we can count the number of '1' on each bit and do a '%3' operation to get bit of the single number.

#####*Solution*:
    public class Solution {
        public int singleNumber(int[] A) {
            if (A == null || A.length == 0) {
                return 0;
            }
        
            int[] count = new int[32];
            int result = 0;
            
            for (int i = 0; i < 32; i++) {
                for (int j = 0; j < A.length; j++) {
                    count[i] += (A[j] >> i) & 1;
                }
                
                result |= (count[i] % 3) << i;
            }
            
            return result;
        }
    }  


