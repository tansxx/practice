#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int cntA = 0, cntB = 0, cntC = 0;

    for(int i = 1; i <= n; i++) {
        if (i % 12 == 0) {
            cntC++;
        } else if (i % 3 == 0) {
            cntB++;
        } else if (i % 2 == 0) {
            cntA++;
        }
    }

    cout << cntA << " " << cntB << " " << cntC;
    return 0;
}