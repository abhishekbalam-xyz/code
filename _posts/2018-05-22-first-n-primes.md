---
layout: post
title: "First N Primes"
subtitle: "A Sieve Of Eratosthenes approach."

---

Based on the algorithm called the [Sieve Of Eratosthenes](/algo/sieve-of-eratosthenes).

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