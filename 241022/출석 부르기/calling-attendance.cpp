#include <iostream>
using namespace std;

int main() {
    int number;
    cin >> number;

    if (number == 1) {
        cout << "John";
    } else if (number == 2) {
        cout << "Tom";
    } else if (number == 3) {
        cout << "Paul";
    } else {
        cout << "Vacancy";
    }
    return 0;
}