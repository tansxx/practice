#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    if (a >= b) {
        if (a >= c) {
            cout << a;
        } else {
            cout << c;
        }
    } else if (b >= c) {
        if (b >= a) {
            cout << b;
        } else {
            cout << a;
        }
    }
    return 0;
}