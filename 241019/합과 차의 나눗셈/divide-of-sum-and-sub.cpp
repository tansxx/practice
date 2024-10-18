#include <iostream>
using namespace std;

int main() {
    double a, b;
    cin >> a >> b;
    double add = a + b;
    double minus = a - b;
    cout <<  fixed;
    cout.precision(2);
    cout << add / minus;
    return 0;
}