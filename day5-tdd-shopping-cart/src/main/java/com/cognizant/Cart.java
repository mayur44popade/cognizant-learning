package com.cognizant;

import java.util.HashMap;
import java.util.Map;

public class Cart {

    Map<Item, Integer> shoppingList;

    public Cart(){
        shoppingList = new HashMap<Item, Integer>();
    }

    public int getCartSize(){
        return shoppingList.size();
    }

    public void addItem(Item item, int quantity){
        if(shoppingList.containsKey(item)){
            shoppingList.put(item, shoppingList.get(item)+quantity);
        }else{
            shoppingList.put(item, quantity);
        }
    }

    public double getTotalPrice(){
        double totalPrice = 0.0;

        for(Item key : shoppingList.keySet()){
            totalPrice += key.getPrice() * shoppingList.get(key);
        }
        return totalPrice;
    }

    public int itemQuantities(Item item){
        if(shoppingList.containsKey(item)){
            return shoppingList.get(item);
        }else{
            return 0;
        }
    }

    public Map<Item, Integer> itemizedList(){
        System.out.println(shoppingList);
        return shoppingList;
    }


    public void  onSaleItems(Item item, int q){
        if(item.onSale == true){
            addItem(item, q);
        }
    }
}
