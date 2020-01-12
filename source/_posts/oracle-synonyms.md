---
title: Oracle 同义词
author: LuoHong
date: 2018-07-23 13:14:15
categories: 数据库
tags: 
      - oracle 
      - 同义词
      - 数据同步
---
![bg](/images/oracle-synonyms.jpg)

## 同义词介绍

&emsp;&emsp;Oracle的同义词（synonyms）从字面上理解就是别名的意思，和视图的功能类似，就是一种映射关系。
<!--more-->

* 它可以节省大量的数据库空间，对不同用户的操作同一张表没有多少差别;

* 它扩展了数据库的使用范围，能够在不同的数据库用户之间实现无缝交互;

* 同义词是数据库对象的一个别名，经常用于简化对象访问和提高对象访问的安全性。

## 同义词分类

1. Oracle公用同义词:由一个特殊的用户组Public所拥有。数据库中所有的用户都可以使用公用同义词。

2. Oracle私有同义词:与公用同义词所对应，由创建他的用户所有。这个同义词的创建者，可以通过授权控制其他用户是否有权使用属于自己的私有同义词。

## 创建同义词

##### 给用户user_temp创建同义词的权限(私有同义词需执行本步骤)

```sql
GRANT CREATE SYNONYM TO user_temp;
```

#### 用户user_temp创建用户user_res的同义词（私有）

```sql
-- Create the synonym 
create or replace synonym fieid for user_res.fieid;
```
#### 用户user_temp创建用户user_res的同义词（公有）

```sql
-- Create the synonym 
create or replace public synonym tableA for user_res.tableA;
```

_注：在不同的数据库之间创建，需要创建link。_

## 查询当前用户下的所有同义词

```sql
select * from user_synonyms;
```

## 删除同义词

```sql
drop synonym tableA;
```

## 修改同义词

```sql
alter synonym tableA ...;
```