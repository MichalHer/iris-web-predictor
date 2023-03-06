## Dataset
Dataset obrany ze strony https://www.kaggle.com/datasets/uciml/iris

Źródłem danych jest dataset zawierający odpowiednio etykietowane dane na temat rozmiarów płatka irysa:
- "petal width" (szerokość płatka kwiatu), 
- "petal length" (długość płatka kwiatu), 
- "sepal width" (szerokość działki kielicha),
- "sepal length" (długość działki kielicha)<br>

Etykietami są łacińskie nazwy gatunków irysa. Wyróżnione zostały trzy etykiety:
- Iris-setosa
- Iris-virginica
- Iris-versicolor<br>

Zestaw danych zawiera 150 pomiarów, po 50 dla każdego gatunku.<br>

W trakcie badań istotnym wnioskiem jest istnienie silnej korelacji pomiędzy parami wymiarów: 
- "petal lenght" i "petal width"
- "sepal length" i "petal lenght"
- "sepal length" i "petal width"<br>

Oraz fakt, że największą wartość klasyfikacyjną mają rozmiary "petal length" i "petal width"<br>

## Testy modeli AI
W drodze testów modeli AI utworzonych przy użyciu biblioteki scikit-learn uzyskano następujące wyniki poprawności predykcji:

|Model name|Accuracy|
|---|---|
|Decision Tree|0.966667|
|Gaussian Naive Bayes|0.966667|
|K Neightbors Classifier|1.000000|
|C-Support Vector Classification|0.966667|

Na podstawie uzyskanych wniosków przyjęto, że najskuteczniejszą predykcję uzyskac można przy uzyciu modelu "n najbliższych sąsiadów"<br>(K Neightbors Classifier)<br>


