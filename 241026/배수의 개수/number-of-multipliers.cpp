#include <iostream>
using namespace std;

int main() {
    int cntA = 0, cntB = 0;
    int a;

    for (int i = 1; i <= 10; i++) {
        cin >> a;

        if (a % 3 == 0) {
            cntA++;
        }

        if (a % 5 == 0) {
            cntB++;
        }
    }

    cout << cntA << " " << cntB;
    return 0;
}