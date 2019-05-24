#include<iostream>
using namespace std;

char sp[]="    ";

int x[10], n, nrsol=0;

void Afisare()
{ int i;
  cout<<sp;
  for(i=1;i<=n;i++)
    cout<<x[i]<<" ";
  cout<<endl;
  nrsol++;
  if (nrsol%23==0) cin.get();
}

int Valid(int k)
{ int i;
  for(i=1;i<=k-1;i++)
     if (x[k]==x[i]) return 0;
  return 1;
}

void BackRec(int k)
{  int i;
   for(i=1;i<=n;i++)
      { x[k]=i;
    if (Valid(k))
       if (k==n) Afisare();
       else BackRec(k+1);
     }
}


int main()
{ cout<<endl<<endl<<sp<<"Permutarile primelor n numere naturale (n<10)"<<endl;
  cout<<endl<<sp<<" Dati valoarea lui n: "; cin>>n;
  cout<<endl;
  BackRec(1);
  cout<<endl<<sp<<"Numar solutii: "<<nrsol;
  return 0;
}

