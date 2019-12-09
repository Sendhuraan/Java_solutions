import utilities.Start;
import utilities.Math;
import utilities.End;

public class index {
    public static void main(String[] args) {
        Start start = new Start();
        start.startProgram();

        Math math = new Math();
        System.out.println(math.square(5));

        End end = new End();
        end.endProgram();
    }
}


