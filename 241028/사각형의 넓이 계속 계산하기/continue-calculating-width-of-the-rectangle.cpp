#include <iostream>
using namespace std;

int main() {
    int height, width;
    char str;

    while (true) {
        cin >> height >> width >> str;

        cout << height * width << endl;
        if (str == 'C') {
            break;
        }
    }
    return 0;
}