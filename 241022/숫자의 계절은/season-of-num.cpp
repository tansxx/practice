#include <iostream>
using namespace std;

int main() {
    int month;
    cin >> month;

    if (month >= 12 || month <= 2) {
        cout << "Winter";
    } else if (month <= 5) {
        cout << "Spring";
    } else if (month <= 8) {
        cout << "Summer";
    } else {
        cout << "Fall";
    }
    return 0;
}