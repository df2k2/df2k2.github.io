---
youtube_id: cM_9RkWFqqM
duration: "7:36"
group: "Fundamentals of Adobe Commerce Development"
title: "How to Add a New Product Attribute"
thumbnail: "fundamentals/thumbs/add-attribute.png"
menu_order: 1
github_link:
---

Adding a product attribute is one of the most popular operations in both Adobe Commerce 1 and Commerce 2.
Attributes are a powerful way to solve many practical tasks related to a product.

This is quite a broad topic, but in this video we will discuss the simple process of adding a dropdown-type attribute to a product.

For this exercise, assume that the sample data set is installed.

* We will add an attribute called clothing_material with the possible values: Cotton, Leather, Silk, Denim, Fur, and Wool.
* We will make this attribute visible on the product view page, in bold text.
* We will assign it to the Default attribute set and add a restriction that any “bottom” clothing, like slacks, cannot be the material Fur.

We will need to take the following steps to add the new attribute:

1. Create a new module.
2. Add an InstallData script.
3. Add a source model.
4. Add a backend model.
5. Add a frontend model.
6. Execute the InstallData script and verify that it works.

Let’s go through each step.

## Step 1: Create a new module

As Adobe Commerce is modular based, we start the process by creating a new module called `Learning_ClothingMaterial`.

```
$ cd <magento2_root>/app/code
$ mkdir Learning
$ mkdir Learning/ClothingMaterial
```

