#include <iostream>
using namespace std;

int main() {
    int n, width;
    cin >> n;
    width = n * n;
    cout << width << endl;
    if (n < 5) {
        cout << "tiny";
    }
    return 0;
}