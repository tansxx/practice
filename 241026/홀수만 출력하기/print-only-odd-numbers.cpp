#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++) {
        int a;
        cin >> a;
        if (a % 2 == 1 && a % 3 == 0) {
            cout << a << endl;
        }
    }
    return 0;
}