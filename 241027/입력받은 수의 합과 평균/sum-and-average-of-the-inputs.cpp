#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int sum = 0;
    double avg;

    for (int i = 0; i < n; i++) {
        int score;
        cin >> score;
        sum += score;
    }

    cout << fixed;
    cout.precision(1);
    avg = (double)sum / n;
    cout << sum << " " << avg;
    return 0;
}