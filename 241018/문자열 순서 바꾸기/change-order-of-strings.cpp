#include <iostream>
#include <string>
using namespace std;

int main() {
    string a, b, temp;
    cin >> a >> b;
    temp = a;
    a = b;
    b = temp;
    cout << a << endl << b;
    return 0;
}