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
- Port uruchomienia API ustawia się w pliku docker-compose.yml - services -> api -> ports
- W celu zmiany wystawionego portu należy zmodywikować wartość wg schematu :
```yaml
    ports:
      - [port_hosta]:8000
```

### Uruchomienie:
- Instalacja wraz z uruchomieniem odbywa się przy użyciu komendy ```docker-compose up -d```

### Dostępność oraz dokumentacja endpointów:
- Domyślnie api dostępne jest pod www.localhost:8000 chyba, że zmieniono konfigurację pliku docker-compose.yml<br>
- Dokumentacja dostępna jest pod www.localhost:8000/docs#