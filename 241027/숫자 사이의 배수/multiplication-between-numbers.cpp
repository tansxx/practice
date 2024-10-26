#include <iostream>
using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    int sum_val = 0, count = 0;
    double avg;

    for (int i = a; i <= b; i++) {
        if (i % 5 == 0 || i % 7 == 0) {
            count++;
            sum_val += i;
        }
    }

    avg = (sum_val / count); 
    cout << sum_val << " " << avg;
    return 0;
}