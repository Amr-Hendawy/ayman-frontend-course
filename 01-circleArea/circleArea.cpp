#include <iostream>
using namespace std;

double CircleArea(double r) {
    double PI = 3.14;
    double area = PI *r * r;

    return area;
}

int main() {
    double r;
    cout << "Enter Readius: ";
    cin >> r;
    double result = CircleArea(r);

    cout << "Circle Area = " << result << endl;

    return 0;
}