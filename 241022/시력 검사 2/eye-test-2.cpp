#include <iostream>
using namespace std;

int main() {
    double eyesight;
    cin >> eyesight;

    if (eyesight >= 1.0) {
        cout << "High";
    } else if (eyesight >= 0.5) {
        cout << "Middle";
    } else {
        cout << "Low";
    }
    return 0;
}