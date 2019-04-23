package com.cognizant;

import java.util.Objects;

public class Item {

    String name;
    double price;
    boolean onSale;

    public Item(String name, double price, boolean onSale){
        this.name = name;
        this.price = price;
        this.onSale = onSale;
    }

    //Getters
    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public boolean isOnSale() {
        return onSale;
    }

    //Setters
    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setOnSale(boolean onSale) {
        this.onSale = onSale;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Item)) return false;
        Item item = (Item) o;
        return getName().equals(item.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName());
    }
}
