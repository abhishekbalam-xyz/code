---
layout: note
title: "Sieve Of Eratosthenes"

---

As the name suggests the greek Mathematician Eratosthenes developed an algorithm to find a list of prime numbers lesser than a number.

> A Prime number is one which has just itself and 1 as factors.
> Smallest Prime number is 2

# How it works

There are a small concepts involved. 
- The Algorithm: Once a number is found to be a prime, which is lesser then the chosen number, we can cancel out multiples of the number itself , coz they all will be consonants. Once you go through the loop, you eliminate those cancelled numbers and what you have left is a list of prime numbers.

- An Optimisation: Every non prime number (consonant) has factors which always appear in a set of atleast 2. And atleast one of them has a value less than square root of the number. Hence while checking for prime, we dont need to check for factors right till the number itself, just till its square root.

The Pseudocode is given below:
```
Input: an integer n > 1.
 
Let A be an array of Boolean values, indexed by integers 2 to n,
initially all set to true.
 
for i = 2, 3, 4, ..., not exceeding √n:
  if A[i] is true:
    for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
      A[j] := false.
 
Output: all i such that A[i] is true.
```

# Code

## Java

{% highlight java %}
import java.util.*;
import java.lang.*;
import java.io.*;

class Main
{
    private static void primelist(int num){
        boolean primes[] = new boolean[(num+1)];
        
        for(int i=0; i<=num; i++ ){
            primes[i]=true;
        }
        
        for(int i=2; i<=Math.sqrt(num); i++){
            if(primes[i]==true){
                for(int j=2*i;j<=num;j+=i){
                    primes[j]=false;
                }
            }
        }
        
        System.out.print("The Primes Are: ");
        
        for(int k=2; k<=num; k++){
            if(primes[k]==true){
                System.out.print(" "+k);
            }
        }
        
    }
	public static void main (String[] args)
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number:");
		int num=sc.nextInt();
		primelist(num);
	}
}
{% endhighlight%}


## Python

{% highlight python %}
def primelist(n):
    prime = [True for i in range(n+1)]
    p = 2
    while (p * p <= n):
        if (prime[p] == True):
            for i in range(p * 2, n+1, p):
                prime[i] = False
        p += 1
     
    for p in range(2, n):
        if prime[p]:
            print p,
 
def main():
    num=int(input("Enter the number:"));
    primelist(num)
    
main()
{% endhighlight%}