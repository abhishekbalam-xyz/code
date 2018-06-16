---
layout: post
title: "Temperature"
subtitle: "A program to convert to and from temprature scales."

---

A program to convert to and from temprature scales.
- From <sup>o</sup>C to <sup>o</sup>F
	- F = 9*C/5+32
- From <sup>o</sup>F to <sup>o</sup>C
	- C = 5/9(F-32)

# Java

{% highlight java %}

import java.io.*;
import java.util.Scanner;

class Main{
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        float num;
        int conversion;
        System.out.println("Enter Temperature in C:");
        num=sc.nextFloat();
        System.out.println("Enter type of conversion.\n0) C to F\n1) F to C");
        conversion=sc.nextInt();
        float soln;
        if(conversion==0){
            soln=(9*num/5)+32;
            System.out.println(soln+"F");
        }
        else{
            soln=(num-32)*5/9;
            System.out.println(soln+"C");
        }
    }
}
{% endhighlight %}


# Python

{% highlight python %}

num=input("Enter the number:")
conversion=input("Enter type of conversion.\n0) C to F\n1) F to C\n")

if int(conversion)==0:
    soln=(9*num/5)+32;
    print(str(soln)+"F")
else:
    soln=(num-32)*5/9;
    print(str(soln)+"C")

{% endhighlight %}