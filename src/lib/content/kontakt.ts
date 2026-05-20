import type { SiteKey } from "@/lib/sites/types";

export type KontaktContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroIntro: string;
  introEyebrow: string;
  introTitle: string;
  introParagraphs: string[];
  closingHtml: string;
  hoursNote: string;
};

const katowice: KontaktContent = {
  metaTitle: "Umów się na wizytę: +48 720 729 729 - Detoks Katowice",
  metaDescription:
    "Skontaktuj się z nami - oferujemy profesjonalny detoks alkoholowy w Katowicach. Infolinia w godzinach pracy gabinetu, e-rejestracja online 24/7. Gwarantujemy pełną dyskrecję.",
  heroTitle: "Kontakt",
  heroIntro:
    "Zadzwoń lub napisz - odpowiemy na wszystkie pytania o detoks alkoholowy i leczenie uzależnień w Katowicach.",
  introEyebrow: "Skontaktuj się z nami",
  introTitle: "Jesteśmy ogólnopolską siecią placówek leczenia alkoholizmu",
  introParagraphs: [
    "Jesteś zainteresowany detoksem alkoholowym w naszej katowickiej przychodni? Posiadamy nowoczesne gabinety w największych miastach Polski, w tym także w Katowicach. Istniejemy na rynku nieprzerwanie od niemal 20 lat.",
    "W tym czasie pomogliśmy wielu pacjentom w ich walce z uzależnieniem alkoholowym, a także stale rozwijaliśmy się - oferując coraz wyższy standard i jakość naszego detoksu alkoholowego oraz innych terapii.",
  ],
  closingHtml:
    "Pacjenci ufają naszemu doświadczeniu i profesjonalizmowi, o czym świadczy wciąż rosnąca liczba osób zgłaszających się do naszej placówki w Katowicach. <strong>O terapii detoksem alkoholowym wiemy wszystko</strong> - przekonaj się.",
  hoursNote: "Infolinia w godzinach pracy gabinetu. E-rejestracja online dostępna 24/7, również w niedziele i święta.",
};

const szczecin: KontaktContent = {
  metaTitle: "Detoks Szczecin - telefon +48 720 729 729, dojazd lekarza 24/7",
  metaDescription:
    "Zadzwoń w godzinach pracy gabinetu lub umów wizytę online (24/7) - detoks alkoholowy w Szczecinie i okolicach. Dyskretny dojazd lekarza, kroplówki detoksykacyjne.",
  heroTitle: "Skontaktuj się z nami w Szczecinie",
  heroIntro:
    "Najszybciej połączysz się z koordynatorem dzwoniąc na numer powyżej w godzinach pracy gabinetu. Poza godzinami skorzystaj z e-rejestracji online - działa całą dobę, bez kolejek.",
  introEyebrow: "Bezpośrednia linia do koordynatora",
  introTitle: "Pomoc w detoksie - Szczecin, Police, Stargard, Goleniów",
  introParagraphs: [
    "Telefon odbiera nasz koordynator, który zna procedurę i pomoże Ci ocenić, jaki rodzaj detoksu będzie odpowiedni: krótki zabieg w gabinecie czy dłuższa kroplówka w domu pacjenta. Rozmawiamy bez oceniania, bez moralizatorstwa - interesuje nas stan zdrowia osoby, której pomoc dotyczy.",
    "Obsługujemy Szczecin i całą aglomerację: Police, Stargard, Goleniów, Świnoujście, Gryfino, Pyrzyce, a także mniejsze miejscowości na terenie zachodniopomorskiego. Dojazd lekarza zawsze ustalamy indywidualnie - czas zależy od godziny i lokalizacji, ale zwykle reagujemy w ciągu 1-2 godzin od telefonu.",
    "Jeżeli nie jesteś pewien, czy potrzebny jest detoks medyczny, czy wystarczy doraźna kroplówka - opisz nam objawy. Częstym sygnałem ostrzegawczym są: drżenie rąk, silne pocenie, kołatanie serca, lęk, bezsenność po odstawieniu. To są objawy zespołu odstawiennego, w którym farmakoterapia daje natychmiastową ulgę.",
  ],
  closingHtml:
    "Wszystkie rozmowy są poufne. Nie sporządzamy dokumentacji, która trafia do NFZ ani do dokumentów pracowniczych - pacjent decyduje, czy chce mieć ślad medyczny zabiegu. <strong>Działamy w pełnej dyskrecji od pierwszego telefonu.</strong>",
  hoursNote: "Infolinia: w godzinach pracy gabinetu • E-rejestracja online: 24/7 • Dojazd lekarza: również w nocy i w święta.",
};

const bydgoszcz: KontaktContent = {
  metaTitle: "Detoks Bydgoszcz - telefon +48 720 729 729, dojazd lekarza 24/7",
  metaDescription:
    "Zadzwoń w godzinach pracy gabinetu lub umów wizytę online (24/7) - detoks alkoholowy w Bydgoszczy i regionie kujawsko-pomorskim. Dyskretny dojazd lekarza, kroplówki detoksykacyjne.",
  heroTitle: "Skontaktuj się z nami w Bydgoszczy",
  heroIntro:
    "Najszybciej połączysz się z koordynatorem dzwoniąc na numer powyżej w godzinach pracy gabinetu. Poza godzinami skorzystaj z e-rejestracji online - działa całą dobę, bez kolejek.",
  introEyebrow: "Bezpośrednia linia do koordynatora",
  introTitle: "Pomoc w detoksie - Bydgoszcz, Toruń, Inowrocław, Solec Kujawski",
  introParagraphs: [
    "Telefon odbiera koordynator, który zna procedurę i pomoże ocenić, jaki rodzaj detoksu będzie odpowiedni: krótka kroplówka w gabinecie czy dłuższy zabieg w domu pacjenta. Rozmawiamy rzeczowo i bez oceniania - interesuje nas stan zdrowia osoby, której dotyczy pomoc.",
    "Obsługujemy Bydgoszcz i całe województwo kujawsko-pomorskie: Toruń, Inowrocław, Solec Kujawski, Koronowo, Nakło nad Notecią, Świecie, Chełmno, Brodnicę i mniejsze miejscowości w okolicy. Dojazd lekarza ustalamy indywidualnie - czas zależy od godziny i lokalizacji, ale zwykle reagujemy w ciągu 1-2 godzin od telefonu.",
    "Jeżeli wahasz się, czy potrzebny jest detoks medyczny, czy wystarczy doraźna pomoc - opisz objawy. Sygnałem ostrzegawczym są: drżenie rąk, silne pocenie, kołatanie serca, lęk, bezsenność po odstawieniu, sięganie po alkohol rano dla złagodzenia objawów. To są objawy zespołu odstawiennego, w którym farmakoterapia przynosi natychmiastową ulgę.",
  ],
  closingHtml:
    "Wszystkie rozmowy traktujemy poufnie. Nie sporządzamy dokumentacji trafiającej do NFZ ani do dokumentów pracodawcy - to pacjent decyduje, czy chce mieć ślad medyczny zabiegu. <strong>Pełna dyskrecja od pierwszego telefonu.</strong>",
  hoursNote: "Infolinia: w godzinach pracy gabinetu • E-rejestracja online: 24/7 • Dojazd lekarza: również w nocy i w święta.",
};

const KONTAKT_CONTENT: Record<SiteKey, KontaktContent> = {
  katowice,
  szczecin,
  bydgoszcz,
};

export function getKontaktContent(siteKey: SiteKey): KontaktContent {
  return KONTAKT_CONTENT[siteKey];
}
