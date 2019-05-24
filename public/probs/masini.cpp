#include <fstream>//include libraria corespunzatoare pentru lucrul cu fisiere

using namespace std;

ifstream fin("masini.in");//declaram fisierul de intrare
ofstream fout("masini.out");//declaram fisierul de iesire

int main()
{
    int n, T_max;//declaram variabila , care va retine numarul de masini si T_max ca va retine timpul total
//in care se va lucra

    fin>>n>>T_max;//citim numarul de masini si timpul maxim in care se va lucra

    int x[n];//declaram vectorul x de n elemente care va reprezanta timpii necesari pentru repararea fiecarei
//masini

    for(int i=0; i<n; i++)//plecam cu un for de la 0 pana la n
        fin>>x[i];//si citim timpii necesari pentru repararea fiecarei masini

    int aux;//declaram aux, avand rolul unei variabile auxiliare
    for(int i=0; i<n-1; i++)//plecam cu forul de la 0 pana la n-1
        for(int j=i+1; j<n; j++)//plecam cu un alt for de la i+1 pana la n
            if(x[i]>x[j])//si verificam daca timpul de pe pozitia i este mai mare decat cel de pe pozitia j
//daca conditia este adevarata
            {
                aux=x[i];//pastram in variabila auxiliara timpul din vectorul x de pe pozitia i
                x[i]=x[j];//in continuare, punem in vectorul x de pe pozitia i timpul din vectorul x de pe
//pozitia j
                x[j]=aux;//punem in vectorul x de pe pozitia j timpul din variabila auxiliara
            }

    int k=0;//declaram variabila k, reprezentand numarul de masini la care s-a lucrat
    for(int i=0; i<n; i++)//plecam cu un for de la 0 pana la n
        if(T_max-x[i]>=0)//verificam daca timpul maxim - timpul de pe pozitia i este mai mare sau egal ca 0
        {
            k++;//in acest caz, crestem variabila k cu 1
            T_max-=x[i];//si scadem din timpul maxim timpul de pe pozitia i
        }

    fout<<k;//si in final, afisam numarul de masini la care s-a putut lucra
return 0;// returnam valoarea 0
}
