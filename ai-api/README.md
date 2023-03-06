## Iris Web Predictor API

### Wymagania i dokumentacja:
- Do działania API wymagana jest baza danych redis
- Konfiguracja odbywa się w pliku app/config.py

### Uruchomienie:
- utworzyć środowisko wirtualne lub zainstalować paczki globalnie ```pip install -r requirements.txt```
- z poziomu folderu ai-api uruchomić serwer ```uvicorn app.main:app```

Domyślnie api dostępne jest pod www.localhost:8000.<br>
Dokumentacja dostępna jest pod www.localhost:8000/docs#



