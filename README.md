## Iris web predictor
### W tym repozytorium powstaje projekt w ramach przedmiotu "zespołowe przedsięwzięcie programistyczne" na Akademii Techniczno-Humanistycznej w Bielski-Białej. 

Projekt polega na stworzeniu strony internetowej, pozwalającej na wykonanie predykcji z użyciem sztucznej inteligencji.
Obiektem przewidywań jest gatunek Irysa, bazując na podanych przez użytkownika rozmiarach jego płatków i działki kielicha kwiatu.

Planowany diagram działania aplikacji w wersji MVP dostępny jest pod adresem url: 
https://drive.google.com/file/d/1P9Ov1OLkVlXA-d5net67-r-uP8J_vudY/view?usp=sharing


### Technologie:

- SciKit Learn
- FastAPI
- SwaggerUI 
- Redis
- React
- Docker
- NginX

## Uruchomienie:
### Wymagania wstępne:
- Użytkownik posiada zainstalowane środowisko Docker
- Użytkowink posiada stabilne połączenie z siecią internet

### Konfiguracja:
- Port dostępu do API ustawia się w pliku docker-compose.yml - services -> api -> ports
- W celu zmiany wystawionego portu należy zmodywikować wartość wg schematu :
```yaml
    ports:
      - [port_hosta]:8000
```

### Uruchomienie:
#### Docker (metoda porzucona):
- Instalacja wraz z uruchomieniem odbywa się przy użyciu komendy 
```
docker-compose up -d
```

#### Kubernetes:
- Aplikacja wymaga zainstalowanego rozszerzenia [ingress-nginx](https://github.com/kubernetes/ingress-nginx)
- Instalacja w Kubernetes odbywa się poprzez uruchomienie z pozycji folderu głównego komendy
```
kubectl apply -f ./k8s-configs
```
- Po zastosowaniu komendy komponenty systemu powinny zostać pobrane i uruchomione automatycznie

### Dokumentacja endpointów:
- Kubernetes wraz z Ingress blokuje dostęp do dokumentacji poprzez nginx. Aby przejrzeć dokumentację należy przekierowac port serwisu API na zewnątrz i połączyć sie z nim bezpośrednio.
```
kubectl port-forward service/api-service 8000:8000
```
- Dokumentacja powinna być dostępna pod adresem www.localhost:8000/docs#

Port może się różnić jeśli zmieniono w pliku docker-compose.yml
