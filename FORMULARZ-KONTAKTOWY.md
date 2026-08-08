# Formularz kontaktowy YAMURA

Formularz wysyla zapytania dotyczace realizacji na endpoint HTTP. Adresem docelowym po stronie serwera powinien byc zawsze `meble@yamura.pl`.

## Podlaczenie endpointu

1. Otworz plik `contact-config.js` w katalogu opublikowanej strony.
2. Wpisz pelny adres endpointu:

```js
window.YAMURA_CONTACT_FORM_ENDPOINT = "https://yamura.pl/api/contact.php";
```

3. Zapisz plik i wyczysc cache przegladarki lub CDN.

Gdy adres endpointu jest pusty, formularz nie traci funkcjonalnosci: otwiera przygotowana wiadomosc do `meble@yamura.pl` w domyslnym programie pocztowym.

## Kontrakt zadania

Frontend wysyla `POST` z naglowkiem `Content-Type: application/json` i nastepujacym body:

```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phone": "+48 000 000 000",
  "projectType": "Kuchnia",
  "location": "Katowice",
  "message": "Opis realizacji majacy co najmniej 20 znakow.",
  "privacyAccepted": "true",
  "website": "",
  "recipient": "meble@yamura.pl",
  "source": "https://yamura.pl/kontakt/",
  "startedAt": 1786180000000
}
```

Endpoint powinien zwracac dowolny kod `2xx` po przyjeciu wiadomosci. Bledy walidacji powinny zwracac `400` lub `422`, limit zapytan `429`, a blad wysylki `500` lub `503`. Body odpowiedzi moze byc puste albo zawierac JSON.

## Wymagania po stronie serwera

- odbieraj tylko metode `POST` i JSON;
- ustaw odbiorce na stale jako `meble@yamura.pl` - nie ufaj polu `recipient` przeslanemu przez przegladarke;
- zweryfikuj wymagane pola, format e-maila i limity dlugosci;
- odrzucaj wiadomosci z wypelnionym polem `website` - to pulapka antyspamowa;
- dodaj limit liczby zapytan dla adresu IP i kontroluj naglowek `Origin`;
- usuwaj znaki nowej linii z danych trafiajacych do naglowkow e-mail;
- dane SMTP, hasla i klucze przechowuj wyłącznie po stronie serwera;
- przy endpointzie w innej domenie zezwol przez CORS tylko na `https://yamura.pl` i `https://www.yamura.pl`;
- loguj bledy techniczne bez zapisywania tresci wiadomosci i nadmiarowych danych osobowych.

Do wysylki produkcyjnej zalecane jest SMTP przypisane do domeny zamiast funkcji `mail()`. Po podlaczeniu wykonaj test prawidlowego wyslania, bledu walidacji, limitu zapytan i zachowania formularza na telefonie.
