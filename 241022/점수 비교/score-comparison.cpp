#include <iostream>
using namespace std;

int main() {
    int a_math, a_eng, b_math, b_eng;
    cin >> a_math >> a_eng >> b_math >> b_eng;

    if (a_math > b_math && a_eng > b_eng) {
        cout << 1;
    } else {
        cout << 0;
    }
    return 0;
}