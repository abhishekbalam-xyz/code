---
layout: post
title: "Armstrong Number"
subtitle: "A program to check if a number is Armstrong."

---

An Armstrong Number is a one in which the sum of individual numbers is equal to them raised to power of the number of digits.

For example for `153`:
- 153=1<sup>3</sup>+5<sup>3</sup>+3<sup>3</sup>

Other Armstrong Numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748 ...

# Java

{% highlight java %}
import java.util.*;
import java.lang.*;
import java.io.*;

class Main
{
    
    public static int power(int num, int pow){
        int result=1;
        
        for(int i=1;i<=pow;i++){
            result=result*num;
        }
        return result;
        
    }
    
    public static void check_armstrong(int num){
        int sum,digit;
        int n=sum=0;
        int temp=num;
        
        while(temp!=0){
            temp=(temp/10);
            n=n+1;
        }
        
        System.out.println("Number: "+n);
        
        temp=num;
        
        while(temp!=0){
            digit=temp%10;
            sum=sum+power(digit, n);
            temp=temp/10;
        }
        
        System.out.println("Sum: "+sum);
        
        if(num==sum){
            System.out.println("The number is an Armstrong Number.");
        }
        else{
            System.out.println("The number is not an Armstrong Number.");
        }
    }
	public static void main (String[] args)
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number");
        int num = sc.nextInt();
        System.out.println("Power: "+ power(num, 2));
        check_armstrong(num);
	}
}
{% endhighlight %}

# Python

{% highlight python %}
def check_armstrong(num):
    sum=0
    n=0
    digit=0
    temp=num
    
    while(temp!=0):
        temp=temp/10
        n=n+1
    
    temp=num
    
    while(temp!=0):
        digit=temp%10;
        sum=sum+pow(digit,n)
        temp=temp/10
    
    if(num==sum):
        print "\nThe number is Armstrong Number"
    else:
        print "\nThe number is not an Armstrong Number"
    
def main():
    num=int(input("Enter the number:"))
    check_armstrong(num);

main()
{% endhighlight %}