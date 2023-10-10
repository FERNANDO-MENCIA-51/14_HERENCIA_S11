/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
public class Persona {
    // Atributos
    private String nombre;
    private int edad;
    private double altura;
    
    // Constructor
    public Persona(String nombre, int edad, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
    }
    
    // Métodos
    public void saludar() {
        System.out.println("Hola, soy " + nombre);
    }
    
    public void cumplirAnios() {
        edad++;
    }
    
    // Sobrecarga de métodos
    public void cumplirAnios(int anios) {
        edad += anios;
    }
    
    // Métodos con valores de retorno
    public int obtenerEdad() {
        return edad;
    }
    
    public double obtenerAltura() {
        return altura;
    }
    
    // Métodos con parámetros y argumentos
    public void cambiarNombre(String nuevoNombre) {
        nombre = nuevoNombre;
    }
    
    public void crecer(double crecimiento) {
        altura += crecimiento;
    }
    
    public static void main(String[] args) {
        // Creación de objetos
        Persona persona1 = new Persona("Juan", 30, 1.75);
        Persona persona2 = new Persona("Maria", 25, 1.60);
        
        // Uso de métodos
        persona1.saludar();
        persona1.cumplirAnios();
        System.out.println("Edad de " + persona1.nombre + ": " + persona1.obtenerEdad() + " años");
        
        persona2.saludar();
        persona2.crecer(0.05);
        System.out.println("Altura de " + persona2.nombre + ": " + persona2.obtenerAltura() + " metros");
    }
}


