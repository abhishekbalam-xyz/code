---
layout: post
title: "Factorial"
subtitle: "A program to get factorial of a number."

---

# Java

{% highlight java %}
import java.util.*;
import java.io.*;

class Main
{
    private static int factorial(int num){
        int factorial=1;
        for(int i=1; i<=num; i++){
            factorial=i*factorial;            
        }
        return factorial;
    }
	public static void main (String[] args)
	{
        Scanner sc =  new Scanner(System.in);
        System.out.println("Enter the number:");
        int num=sc.nextInt();
        System.out.println("The Factorial of "+num+" is: "+factorial(num));
	}
}
{% endhighlight %}

# Python

{% highlight python %}
def factorial(num):
    factorial=1;
    for i in range(1,(num+1)):
        factorial=i*factorial
    return str(factorial)
    
def main():
    num=int(input("Enter the number:\n"))
    print("The factorial of "+str(num)+" is: "+factorial(num))
    
main()
{% endhighlight %}