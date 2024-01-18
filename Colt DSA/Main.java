
public class Main {
    public static void main(String[] args) {

       System.out.println( run(3));
    }
    public static int run(int num){
        if(num ==1) return  1;
        return num +run(num-1) ;
    }   
 

}