#include <iostream>
using namespace std;

int main() {
    int n;
    int sum = 0, cnt = 0;
    double avg;

    for (int i = 1; i <= 10; i++) {
        cin >> n;

        if (0 <= n && n <= 200) {
            cnt++;
            sum += n;
        }
    }
    
    cout << fixed;
    cout.precision(1);
    avg = double(sum) / cnt;
    cout << sum << " " << avg;
    return 0;
}