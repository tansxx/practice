#include <iostream>
using namespace std;

int main() {
    int age;
    int cnt = 0, sum = 0;

    while (true) {
        cin >> age;

        if (20 <= age && age <= 29) {
            cnt++;
            sum += age;
            continue;
        }

        else {
            break;
        }


    }

    cout << fixed;
    cout.precision(2);
    cout << double(sum) / cnt;
    return 0;
}