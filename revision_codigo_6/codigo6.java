package org.generation.exercises;

import java.util.Scanner;

public class codigo6 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        int[] n = new int[20];

        for (int i = 0; i < 20; i++) {
            n[i] = (int) (Math.random() * 381) + 20;
            System.out.print(n[i] + " ");
        }

        System.out.println("\n¿Qué números quiere resaltar? ");
        int opcion = scan.nextInt();
        System.out.print("(1 – los múltiplos de 5, 2 – los múltiplos de 7): ");

        int multiplo = (opcion == 1) ? 5 : 7; // Operador ternario

        for (int e : n) {
            if (e % multiplo == 0) {
                System.out.print("[" + e + "] ");
            } else {
                System.out.print(e + " ");
            }
        }
    }
}