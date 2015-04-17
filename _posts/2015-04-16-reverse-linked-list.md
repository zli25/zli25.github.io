---
layout: post
title: Reverse Linked List
category: tech
tag: Leetcode, Linked List
description: "[LeetCode] Reverse Linked List"
---

	/**
     * Definition for ListNode.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int val) {
     *         this.val = val;
     *         this.next = null;
     *     }
     * }
     */ 



###1. Reverse a linked list.

####*Example*
For linked list 1->2->3, the reversed linked list is 3->2->1

####*Challenge*
Reverse it in-place and in one-pass

####*Solution*

    public class Solution {
        /**
         * @param head: The head of linked list.
         * @return: The new head of reversed linked list.
         */
        public ListNode reverse(ListNode head) {
    
            ListNode prev = null;
            ListNode next = null;
            
            while (head != null) {
               next = head.next;
               head.next = prev;
               prev = head;
               head = next;
            }
            return prev;
        }
    }
    
###2. Reverse a linked list II

Reverse a linked list from position m to n.

####*Example*
Given 1->2->3->4->5->NULL, m = 2 and n = 4, return 1->4->3->2->5->NULL.

####*Note*
Given m, n satisfy the following condition: 1 ≤ m ≤ n ≤ length of list.

####*Challenge*
Reverse it in-place and in one-pass

	public class Solution {
        public ListNode reverseBetween(ListNode head, int m, int n) {
            if (head == null || m > n) {
                return head;
            }
            
            ListNode dummy = new ListNode(0); // create a dummy node when the head of the list might change
            dummy.next = head;
            ListNode prev = dummy;                
            ListNode start = head;            
            int steps = m;
            while (steps > 1) {              // get the start node, and save the previous node
                prev = start;
                start = start.next;
                steps--;
            }
            
            ListNode nextNode = start.next;
            steps = n - m;
            while (steps > 0) {             // reverse the list between m and n
                ListNode temp = nextNode.next;      // 1->2->3->4->5, (2,4); start is 2, nextNode is 3, temp is 4;
                nextNode.next = start;
                start = nextNode;
                nextNode = temp;
                steps--;
            }
            
            prev.next.next = nextNode;     // re-link the list
            prev.next = start;
            
            return dummy.next;
        }
    }

