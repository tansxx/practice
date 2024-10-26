#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;
    int sum_val = 0;

    for (int i = 1; i <= n; i++) {
        if (i % 2 == 1 && i % 3 == 0) {
            sum_val += i;
        }
    }

    cout << sum_val;
    return 0;
}