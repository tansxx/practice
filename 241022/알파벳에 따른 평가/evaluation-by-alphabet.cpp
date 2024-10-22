#include <iostream>
using namespace std;

int main() {
    char letter;
    cin >> letter;

    if (letter == 'S') {
        cout << "Superior";
    } else if (letter == 'A') {
        cout << "Excellent";
    } else if (letter == 'B') {
        cout << "Good";
    } else if (letter == 'C') {
        cout << "Usually";
    } else if (letter == 'D') {
        cout << "Effort";
    } else {
        cout << "Failure";
    }
    return 0;
}