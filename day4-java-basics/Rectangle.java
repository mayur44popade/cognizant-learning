public class Rectangle{
  int height;
  int width;

  public Rectangle(int height, int width){
    this.height = height;
    this.width = width;
  }

  public int calculateArea(int height, int width){
    return height * width;
  }

  public static void main(String[] args){
    Rectangle r = new Rectangle(2, 5);
    System.out.println(r.calculateArea(2, 5));
  }
}
