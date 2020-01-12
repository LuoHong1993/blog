---
title: python学习笔记 一
author: LuoHong
date: 2018-07-26 00:47:08
categories: python
tags: 
      - python 
      - 学习笔记
---

![bg](/images/python-learning-1.jpg)

## 数据类型

整数、浮点数、字符串

单引号、双引号、三引号

转义字符，转义字符\，比如\n表示换行，\t表示制表符，字符\本身也要转义

<!--more-->

## 编码

``` python
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
```
第一行注释是为了告诉Linux/OS X系统，这是一个Python可执行程序，Windows系统会忽略这个注释；

第二行注释是为了告诉Python解释器，按照UTF-8编码读取源代码。

## 格式化方法

format()

执行代码

``` python
age = 18
name = "LuoHong"
print("My name is {0},I'm {1} ".format(name,age))
# 使用下划线填充文本，并保持文字处于中间位置
# 使用 (^) 定义 '___hello___'字符串长度为 11
print('{0:_^11}'.format('Hello'))
print('{0:_^12}'.format('Hello'))
# 对于浮点数 '0.333' 保留小数点(.)后三位
print('{0:.3f}'.format(1.0/3))
print("{name} like {action} ".format(name="Jack",action="code"))
```
输出结果
```
My name is LuoHong,I'm 18 
___Hello___
___Hello____
0.333
Jack love code 
```

本例源码  [lesson_1_1](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_1.py)

## 运算优先级

从最低优先级（最少绑定）到最高优先级（最多绑定）的优先

* lambda：Lambda 表达式
* if - else ：条件表达式
* or：布尔“或”
* and：布尔“与”
* not x：布尔“非”
* in, not in, is, is not, <, <=, >, >=, !=, ==：比较，包括成员资格测试（Membership Tests）和身份测试（Identity Tests）。
* |：按位或
* ^：按位异或
* &：按位与
* <<, >>：移动
* +, -：加与减
* *, /, //, %：乘、除、整除、取余
* +x, -x, ~x：正、负、按位取反
* **：求幂
* x[index], x[index:index], x(arguments...), x.attribute：下标、切片、调用、属性引用
(expressions...), [expressions...], {key: value...}, {expressions...}：表示绑定或元组、表示列表、表示字典、表示集合

注意：相同优先级的运算符将从左至右的方式依次进行求值

## 控制流

### if 语句

```python
print("--- 2018年海南理工类批次查询 ---")
scores = int(input("请输入您的分数:"))
A = 539
B = 488
if scores < B:
    print("分数太少，再接再厉！")
elif B <= scores < A:
    print("本科B批")
else:
    print("本科A批")
```
输出结果
```
--- 2018年海南理工类批次查询 ---
请输入您的分数:613
本科A批
```
本例源码  [lesson_1_2](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_2.py)

注意：缩进

### while 语句

while 语句能让条件为真的前提下重复执行某块语句

``` python
#正确答案
key = "yes"
#当前状态
status = 0
#当条件为真，循环执行下面语句
while status == 0:
    yourInput = input("LuoHong is a handsome boy? yes or no \n")
    if key == yourInput:
        print("Congratulations! you're right.")
        #改变当前状态
        status = 1
    elif yourInput == "no":
        print("You are an idiot!")
    else:
        print("please input yes or no")
#当条件为假，结束
else:
    print("Done!")
```
输出结果
```
LuoHong is a handsome boy? yes or no 
帅
please input yes or no
LuoHong is a handsome boy? yes or no 
no
You are an idiot!
LuoHong is a handsome boy? yes or no 
yes
Congratulations! you're right.
Done!
```
本例源码  [lesson_1_3](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_3.py)

### for 语句
for...in 语句是另一种循环语句，其特点是会在一系列对象上进行迭代（Iterates），意即它会遍历序列中的每一个项目。
```python
# 输出1～9数字
print("输出1～9数字")
# rang(1,10),获取从1开始，长度为10的序列
for i in range(1,10):
    # 注意输出必须保持类型一致，str(i)转成自字符串
    print("第"+str(i)+"名")
else:
    print("=== 结束 === \n")

# 分别输出个位数是奇数和偶数
print("分别输出个位数是奇数和偶数")
oddNums = "奇数："
evenNums = "偶数："
for i in range(1,10,2):
    oddNums += str(i)+"、"
oddNums = oddNums[0:len(oddNums)-1]
print(oddNums)
for i in range(2,10,2):
    evenNums += str(i)+"、"
evenNums = evenNums[0:len(evenNums)-1]
print(evenNums)
```
输出结果
```
输出1～4数字
第1名
第2名
第3名
=== 结束 === 

分别输出个位数是奇数和偶数
奇数：1、3、5、7、9
偶数：2、4、6、8
```
本例源码  [lesson_1_4](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_4.py)

### break 语句

用以中断循环语句，也就是中止循环语句的执行，即使循环条件没有变更为false，或队列中的项目尚未完全迭代依旧如此。
```python
# 循环1～4，当等于3时跳出循环
for i in range(1,5):
    if i == 3:
        print("=== end ===")
        break
    else:
        print(i)
```
输出结果
```
1
2
=== end ===
```
本例源码  [lesson_1_4](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_4.py)

### continue 语句
跳过当前循环块中的剩余语句，并继续该循环的下一次迭代

## 函数
指可重复使用的程序片段。
函数可以通过关键字 def 来定义。这一关键字后跟一个函数的标识符名称，再跟一对圆括号，其中可以包括一些变量的名称，再以冒号结尾，结束这一行。随后而来的语句块是函数的一部分。

### 函数参数
函数可以获取参数，这个参数的值由你所提供。在定义函数时给定的名称称作“形参”（Parameters），在调用函数时你所提供给函数的值称作“实参”（Arguments）。
```python
# 定义名为compare函数，需传x,y参数
def compare(x,y):
    if x > y:
        print(x,"is max num")
    elif x == y:
        print("equal")
    else:
        print(y,"is max num")
a = 100
b = 10
# 调用compare函数，传人参数
compare(a,b)
```
输出结果
```
100 is max num
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### 局部变量和全局变量

局部变量：声明变量时，它们不会以任何方式与身处函数之外但具有相同名称的变量产生关系，这些变量名只存在于函数这一局部（Local）。这被称为变量的作用域（Scope）。所有变量的作用域是它们被定义的块，从定义它们的名字的定义点开始。

可通过global语句来使用全局变量。
```python
global_str = "haha"
global_str2 = "haha"
# 局部使用方法
def localFun(global_str):
    print("global_str="+global_str)
    global_str = "keke"
    print('Changed local global_str to', global_str)

# 使用global语句改变global_str2值
def localFun2():
    global global_str2
    print("global_str2=" + global_str2)
    global_str2 = "xixi"
    print('Changed global global_str2 to', global_str2)

localFun(global_str)
print(global_str)
localFun("lala")
print(global_str)
localFun2()
print(global_str2)
```
输出结果
```
global_str=haha
Changed local global_str to keke
haha
global_str=lala
Changed local global_str to keke
haha
global_str2=haha
Changed global global_str2 to xixi
xixi
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### 默认参数值

```python
def defultParam(msg,time=1):
    print(msg*time)

defultParam("hello")
defultParam("hello",3)
```
输出结果
```
hello
hellohellohello
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### 关键字参数
用命名（关键字）而非位置，来指定函数中的参数，不再需要考虑参数的顺序，只对希望赋予的参数以赋值，只要其它的参数都具有默认参数值
```python
def keyParam(a,b=24,c=25):
    print("======")
    print("a=",a,"\nb=",b,"\nc=",c)

keyParam(1,c=0)
keyParam(b=3,a=2)
```
输出结果
```
======
a= 1 
b= 24 
c= 0
======
a= 2 
b= 3 
c= 25
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### 可变参数
参数数量是可变的，可以通过使用星号来实现。

声明一个诸如 *param 的星号参数时，从此处开始直到结束的所有位置参数（Positional Arguments）都将被收集并汇集成一个称为“param”的元组（Tuple）。

声明一个诸如 **param 的双星号参数时，从此处开始直至结束的所有关键字参数都将被收集并汇集成一个名为 param 的字典（Dictionary）。

```python
def complexFun(name="luo",*years,**about):
    print("name = ",name)
    for i in years:
        print("years = ",i)
    for first,second in about.items():
        print("about = ",first,second)

complexFun("luohong",2018,2017,age=25,birthday="1993-03-19")
```
输出结果
```
name =  luohong
years =  2018
years =  2017
about =  age 25
about =  birthday 1993-03-19
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### return、pass语句
return 语句用于从函数中返回，也就是中断函数

pass 语句用于指示一个没有内容的语句块

``` python
def rebackData(age):
    if age < 18:
        return "children"
    elif 18 <= age < 100:
        return "adult"
    else:
        pass
print(rebackData(16))
print(rebackData(25))
print(rebackData(200))
```
输出结果
```
children
adult
None
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)

### DocStrings
文档字符串（Documentation Strings）
```python
def testDoc():
    '''
    测试文档
    :return:
    '''
    print("hehe")

testDoc()
print(testDoc.__doc__)
```
输出结果
```
hehe

    测试文档
    :return:
```
本例源码  [lesson_1_5](https://gitee.com/hong1993/python-lesson/blob/master/lesson_1_5.py)
