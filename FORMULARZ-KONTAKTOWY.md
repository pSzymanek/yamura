# Formularz kontaktowy YAMURA

Formularz wysyla zapytania dotyczace realizacji przez gotowy endpoint PHP i SMTP Webd. Adresem docelowym po stronie serwera jest zawsze `meble@yamura.pl`.

## Podlaczenie endpointu

Frontend jest juz podlaczony do endpointu:

```js
window.YAMURA_CONTACT_FORM_ENDPOINT = "/api/contact.php";
```

Endpoint, PHPMailer i grafiki wiadomosci znajduja sie w `public/api/` i sa automatycznie kopiowane do paczki produkcyjnej.

## Prywatna konfiguracja SMTP

Plik `yamura-contact-secrets.php` zawierajacy haslo skrzynki musi znajdowac sie w katalogu domowym konta hostingowego, poziom wyzej niz `public_html`. Nie moze znajdowac sie w katalogu publicznym strony.

Przykladowa struktura hostingu:

```text
/home/nazwa-konta/yamura-contact-secrets.php
/home/nazwa-konta/public_html/index.html
/home/nazwa-konta/public_html/api/contact.php
```

Gotowy prywatny plik do wgrania jest dostarczany osobno obok paczki ZIP. Nie znajduje sie w repozytorium Git ani w publicznym archiwum strony.

## Automatyczne potwierdzenie

Po skutecznym wyslaniu zapytania na `meble@yamura.pl` klient otrzymuje automatyczna wiadomosc z:

- podziekowaniem i informacja o dalszym kontakcie,
- logo YAMURA,
- podgladem rodzaju realizacji, lokalizacji, telefonu i tresci zapytania,
- numerem telefonu i adresem e-mail YAMURA,
- ikonami z linkami do Instagrama, Facebooka i Pinteresta.

Nieudane wyslanie potwierdzenia nie powoduje ponownego wyslania glownego zapytania. Blad zostaje zapisany w logu serwera bez tresci wiadomosci klienta.

## Kontrakt danych

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

Endpoint zwraca `200` po przyjeciu wiadomosci. Bledy walidacji zwracaja `400` lub `422`, limit zapytan `429`, a blad wysylki `503`.

## Zabezpieczenia endpointu

- endpoint odbiera tylko metode `POST` i JSON;
- odbiorca jest ustawiony na stale jako `meble@yamura.pl`;
- wymagane pola, format e-maila i limity dlugosci sa walidowane;
- pole `website` jest pulapka antyspamowa;
- limit wynosi 5 zapytan z jednego adresu IP na 15 minut;
- akceptowane sa tylko domeny `https://yamura.pl` i `https://www.yamura.pl`;
- dane SMTP i haslo sa ladowane z prywatnego pliku poza `public_html`;
- bledy techniczne sa logowane bez tresci wiadomosci i nadmiarowych danych osobowych.

Wysylka korzysta z PHPMailer 6.10.0, SMTP `wn29.webd.pl`, portu `465` i szyfrowania SSL/TLS. Po wdrozeniu wykonaj test zapytania, potwierdzenia dla klienta, bledu walidacji oraz limitu zapytan.
