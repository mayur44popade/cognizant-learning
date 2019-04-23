package com.cognizant;
import org.checkerframework.checker.units.qual.A;
import org.junit.Before;
import org.junit.Test;
import org.junit.Assert;
import org.junit.runners.Parameterized;

import java.util.Collection;
import java.util.HashMap;
import java.util.*;

public class CartTest {

    Cart c;

    @Before
    public void setup(){
        c = new Cart();
    }

    @Test
    public void emptyCart(){
        int expected = 0;
        int actual = c.getCartSize();
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void itemAddedToCart(){
        int expected = 1;
        Item i = new Item("Pen", 2.0f, true);
        c.addItem(i, 1);
        int actual = c.getCartSize();
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void multipleItemsOfSameTypeAddedToCart(){
        int expected = 1;
        Item i = new Item("Pen", 2.0f, true);
        c.addItem(i, 1);
        c.addItem(i, 1);
        int actual = c.getCartSize();
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void totalPriceEmpty(){
        //SetUp CUT
        double actual = c.getTotalPrice();
        //Expected
        double expected = 0;
        //Assertion
        Assert.assertEquals(expected, actual, 0.1);
    }

    @Test
    public void totalPriceAddedItem(){
        double expected = 10.0;
        Item item1 = new Item("Pen", 2.0, true);
        c.addItem(item1, 5);
        double actual = c.getTotalPrice();
        Assert.assertEquals(expected, actual, 0.1);
    }

    @Test
    public void totalItemsAdded(){
        int expected = 2;
        Item item = new Item("Pen", 2.0,false);
        c.addItem(item, 1);
        c.addItem(item, 1);
        int actual = c.itemQuantities(item);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void listOfAllItems(){
        Map<Item, Integer> expected = new HashMap<>();
        Item item1 = new Item("Pen", 2.0,true);
        Item item2 = new Item("Handbag", 10.0,true);
        expected.put(item1, 5);
        expected.put(item2, 1);

        c.addItem(item1, 5);
        c.addItem(item2, 1);
        Map<Item, Integer> actual = c.itemizedList();
        
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void totalPriceWithTwoItems(){
        double expected = 20.0;
        Item item1 = new Item("Pen", 2.0,true);
        Item item2 = new Item("Handbag", 10.0,true);

        c.addItem(item1, 5);
        c.addItem(item2, 1);
        double actual = c.getTotalPrice();

        Assert.assertEquals(expected, actual, 0.1);
    }

    @Test
    public void isItemOnSale(){
        Item item1 = new Item("Pen", 2.0,true);
        Item item2 = new Item("Paper", 2.0,false);
        c.onSaleItems(item1, 1);
        c.onSaleItems(item2, 1);
        int expected = 1;
        int actual = c.getCartSize();
        Assert.assertEquals(expected, actual);
    }
}
