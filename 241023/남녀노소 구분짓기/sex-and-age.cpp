#include <iostream>
using namespace std;

int main() {
    int gender, age;
    cin >> gender;
    cin >> age;

    if (gender == 0) {
        if (age >= 19) {
            cout << "MAN";
        } else {
            cout << "BOY";
        }
    } else if (gender == 1) {
        if (age >= 19) {
            cout << "WOMAN";
        } else {
            cout << "GIRL";
        }
    }
    return 0;
}