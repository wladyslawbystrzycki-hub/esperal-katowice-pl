import type { SiteKey } from "@/lib/sites/types";

export type HomeContent = {
  hero: {
    title: string;
    highlight: string;
    description: string;
    imageAlt: string;
  };
  detoxInfo: {
    heading: string;
    subtitle: string;
    paragraphs: string[];
    warning: {
      headline: string;
      detail: string;
    };
    closing: string[];
  };
  treatment: {
    heading: string;
    subtitle: string;
    paragraphs: string[];
    figureCaption: string;
    cta: {
      linkText: string;
      paragraph: string;
    };
  };
  homeVisit: {
    title: string;
    subtitle: string;
    description: string;
  };
};

const katowice: HomeContent = {
  hero: {
    title: "Odtrucie alkoholowe Katowice -",
    highlight: "detoks alkoholowy",
    description:
      "Bezpieczna i skuteczna detoksykacja z nagromadzonego w organizmie alkoholu etylowego. Lekarz dojeżdża 24/7, również w niedziele i święta.",
    imageAlt: "Odtrucie alkoholowe Katowice - detoks alkoholowy",
  },
  detoxInfo: {
    heading: "Detoks alkoholowy - dlaczego jest tak ważny?",
    subtitle: "Pierwszy krok w leczeniu uzależnienia od alkoholu",
    paragraphs: [
      "Problem z leczeniem uzależnień alkoholowych wiąże się z częstym występowaniem ciągów alkoholowych mogących trwać nawet kilka tygodni. W tym czasie osoba uzależniona stara się nie doprowadzić do wytrzeźwienia, a jej nadrzędnym celem jest dostarczenie kolejnej dawki alkoholu. To z pewnością bardzo trudny czas zarówno dla tej osoby, jak i jej bliskich.",
      "Dlatego w takich sytuacjach proponujemy detoks alkoholowy jako pierwszy krok leczenia alkoholizmu. Zabieg odtrucia alkoholowego pozwoli na przerwanie ciągu alkoholowego przy jednoczesnym wyrównaniu wszystkich funkcji organizmu człowieka, a także zniesienie przykrych dla leczonego objawów abstynencji.",
    ],
    warning: {
      headline:
        "Zespół objawów abstynencyjnych często jest niebezpieczny dla pacjenta i zagraża jego zdrowiu.",
      detail:
        "Typowymi objawami są: podwyższone ciśnienie tętnicze, objawy zatrucia, bezsenność, nudności, silne drgawki całego ciała oraz bóle głowy.",
    },
    closing: [
      "Odtrucie alkoholowe w Katowicach, czyli zabieg detoksykacji, zapobiega powstaniu bardzo niebezpiecznej padaczki alkoholowej. Padaczka alkoholowa występuje przeważnie od 48 do 72 godzin od spadku poziomu procentów we krwi. Nawodnienie i uzupełnienie elektrolitów podczas detoksu alkoholowego zmniejsza prawdopodobieństwo wystąpienia padaczki poalkoholowej.",
      "Detoks alkoholowy pozwala złagodzić dolegliwości związane z powrotem do trzeźwości: poczucie osłabienia, ogólnego rozbicia, drżenie rąk, napady gorąca. Alkoholoodtrucie prowadzone przez specjalistów z naszej placówki leczenia uzależnień w Katowicach to gwarancja dyskrecji i bezpieczeństwa.",
    ],
  },
  treatment: {
    heading: "Odtrucie alkoholowe dla pacjentów. Katowice",
    subtitle: "Kompleksowe podejście do leczenia uzależnień",
    paragraphs: [
      "Prowadzimy leczenie choroby alkoholowej - detoks i alkoholoodtrucie zawsze pod ścisłą kontrolą lekarza medycyny. Polega na podawaniu indywidualnie dobranych substancji pomagających zwalczyć objawy odstawienia alkoholu i usuwających toksyny z krwiobiegu.",
      "Działamy kompleksowo - oprócz przerwania ciągu uzupełniamy płyny i elektrolity oraz dbamy o zniesienie objawów odstawienia: zarówno tych fizycznych, jak i psychicznych. Detoks alkoholowy jest całkowicie bezpieczny dla pacjenta, a oprócz oczywistych korzyści takich jak zaprzestanie picia alkoholu, powoduje także polepszenie ogólnego stanu zdrowia. Odtrucie alkoholowe przywraca pacjentowi równowagę psychiczną i fizyczną.",
      "Przez cały proces detoksykacji lekarz jest obecny i na bieżąco monitoruje stan pacjenta. Osoby uzależnione korzystające z odtrucia alkoholowego są całkowicie bezpieczne w rękach naszych specjalistów.",
    ],
    figureCaption: "Podejmij walkę z uzależnieniem i przerwij ciąg alkoholowy",
    cta: {
      linkText: "Odtrucie alkoholowe Katowice",
      paragraph:
        "jest dobrym początkiem walki z alkoholizmem. Oferujemy całe nasze doświadczenie i wiedzę z zakresu uzależnienia od alkoholu, aby nasi pacjenci w możliwie krótkim czasie wrócili do zdrowia. Zabieg detoksykacji jest dobrym początkiem dalszych terapii uzależnień alkoholowych - po osiągnięciu pełnej trzeźwości pacjent może umówić się na wszywkę alkoholową esperal, która ułatwia utrzymanie abstynencji.",
    },
  },
  homeVisit: {
    title: "Detoks - odtrucia alkoholowe w domu Pacjenta",
    subtitle:
      "Lekarz dojeżdża 24h/dobę, każdego dnia w tygodniu oraz w niedziele i święta.",
    description:
      "Zabiegi alkoholoodtrucia wykonujemy także w miejscu przebywania pacjenta. Nasza doświadczona i profesjonalna kadra lekarska poda optymalne dla każdego pacjenta leki w zależności od wieku, stanu zdrowia i płci. Działamy w Katowicach i okolicach, w tym w Częstochowie i Bielsku-Białej.",
  },
};

const szczecin: HomeContent = {
  hero: {
    title: "Detoks alkoholowy Szczecin -",
    highlight: "odtrucie alkoholowe",
    description:
      "Dyskretne odtrucie poalkoholowe w gabinecie i pod adresem pacjenta. Lekarz dojedzie do Ciebie w Szczecinie i okolicach - całą dobę, także w weekendy i święta.",
    imageAlt: "Detoks alkoholowy Szczecin - lekarz przy pacjencie",
  },
  detoxInfo: {
    heading: "Kiedy potrzebujesz profesjonalnego odtrucia alkoholowego?",
    subtitle: "Sygnały, których nie wolno ignorować",
    paragraphs: [
      "Wielodniowy ciąg alkoholowy uruchamia w organizmie kaskadę reakcji, której nie da się zatrzymać samą wodą i snem. Mózg, przyzwyczajony do tłumiącego działania etanolu, w momencie odstawienia gwałtownie się rozhamowuje, stąd drżenia, kołatanie serca, zlewne poty, lęk i bezsenność. To nie kwestia silnej woli, lecz biochemia neuroprzekaźników, którą trzeba ustabilizować farmakologicznie.",
      "Jeśli osoba bliska próbuje przerwać picie i nie radzi sobie z objawami, jeśli pojawia się dezorientacja, halucynacje lub drgawki - to medyczna sytuacja wymagająca interwencji lekarza, nie domowego leczenia. Detoks alkoholowy w Szczecinie pozwala bezpiecznie przejść przez fazę odstawienia w warunkach kontrolowanych przez specjalistę.",
    ],
    warning: {
      headline:
        "Najgroźniejsze powikłania pojawiają się między 24. a 72. godziną od odstawienia alkoholu.",
      detail:
        "Drgawki abstynencyjne, majaczenie alkoholowe (delirium tremens), zaburzenia rytmu serca, gwałtowne skoki ciśnienia - wszystkie wymagają natychmiastowej farmakoterapii. W tej fazie samodzielne odstawienie jest realnym zagrożeniem życia.",
    },
    closing: [
      "Detoksykacja w Szczecinie obejmuje kroplówki z roztworami elektrolitów, witaminami z grupy B (tiamina) i magnezem - uzupełniają niedobory pogłębione przez przewlekłe picie. W razie potrzeby lekarz wdraża leki przeciwlękowe (benzodiazepiny krótko działające), które stabilizują układ nerwowy i zapobiegają drgawkom.",
      "Po zakończeniu zabiegu pacjent dostaje zalecenia i - jeżeli wyraża chęć - kierunek dalszej terapii: psychoterapia uzależnień, farmakoterapia ograniczająca głód alkoholowy (naltrekson, akamprozat), spotkania grup wsparcia w Szczecinie. Detoks nie leczy alkoholizmu, ale otwiera okno, w którym leczenie staje się możliwe.",
    ],
  },
  treatment: {
    heading: "Jak wygląda detoks alkoholowy w Szczecinie?",
    subtitle: "Przebieg zabiegu krok po kroku",
    paragraphs: [
      "Zaczynamy od wywiadu medycznego: lekarz pyta o czas trwania ciągu, ilość spożywanego alkoholu, choroby współistniejące (nadciśnienie, cukrzyca, padaczka, schorzenia wątroby), aktualnie przyjmowane leki. Sprawdzamy podstawowe parametry - ciśnienie, tętno, saturację, glukozę. Na tej podstawie dobieramy schemat farmakologiczny i czas trwania kroplówki (3, 6, 12 godzin).",
      "W trakcie zabiegu pacjent leży lub siedzi w komfortowych warunkach - w naszym gabinecie w Szczecinie lub we własnym mieszkaniu, jeżeli wybiera detoks wyjazdowy. Lekarz monitoruje stan, w razie potrzeby modyfikuje leczenie. Bliscy mogą być obecni - często to obecność rodziny jest dla pacjenta największą motywacją.",
      "Po detoksie pacjent jest trzeźwy, nawodniony, z wyrównaną elektrolitami. To moment, w którym decyduje, czy poprzestać na samym detoksie, czy potraktować go jako początek dłuższej terapii. Nie naciskamy - informujemy o dostępnych opcjach w Szczecinie i okolicach.",
    ],
    figureCaption: "Pierwszy krok - przerwanie ciągu w bezpiecznych warunkach",
    cta: {
      linkText: "Odtrucie alkoholowe Szczecin",
      paragraph:
        "to nie kara ani moralizatorska interwencja - to procedura medyczna, której podlegają tysiące pacjentów rocznie w całej Polsce. Działamy z pełną dyskrecją: bez kart pacjenta w NFZ, bez wpisów w dokumentacji pracodawcy, bez kontaktu z rodziną wbrew Twojej woli. W Szczecinie obsługujemy także Police, Stargard, Goleniów i Świnoujście - dojeżdżamy także do mniejszych miejscowości na pograniczu zachodniopomorskiego.",
    },
  },
  homeVisit: {
    title: "Detoks wyjazdowy - lekarz przyjeżdża do Ciebie",
    subtitle: "Szczecin, Police, Stargard, Goleniów - dyskretnie, bez kolejek, każdego dnia.",
    description:
      "Wielu pacjentów nie jest w stanie samodzielnie dotrzeć do gabinetu - albo z powodu silnych objawów odstawienia, albo dlatego, że woli przejść detoks w znanym otoczeniu. Wysyłamy doświadczonego lekarza pod wskazany adres w Szczecinie i w promieniu kilkudziesięciu kilometrów. Zabieg przebiega tak samo jak w gabinecie: kroplówka, monitoring, farmakoterapia. Telefon przyjmujemy w godzinach pracy gabinetu, a e-rejestracja online działa całą dobę.",
  },
};

const bydgoszcz: HomeContent = {
  hero: {
    title: "Detoks alkoholowy Bydgoszcz -",
    highlight: "odtrucie alkoholowe",
    description:
      "Bezpieczny detoks poalkoholowy w gabinecie i pod adresem pacjenta. Lekarz dojedzie do Ciebie w Bydgoszczy, Toruniu, Inowrocławiu i okolicach - przez całą dobę, także w weekendy i święta.",
    imageAlt: "Detoks alkoholowy Bydgoszcz - lekarz przy pacjencie",
  },
  detoxInfo: {
    heading: "Detoks alkoholowy - kiedy organizm potrzebuje wsparcia lekarza",
    subtitle: "Co tak naprawdę dzieje się po odstawieniu alkoholu",
    paragraphs: [
      "Po wielodniowym ciągu alkoholowym organizm jest w stanie głębokiej dysregulacji: wątroba nie nadąża z metabolizowaniem toksyn, gospodarka wodno-elektrolitowa jest rozchwiana, a układ nerwowy - przyzwyczajony do tłumiącego działania etanolu - reaguje na jego brak nadpobudliwością. To z tego biorą się drżenia rąk, lęk, kołatanie serca, bezsenność i poty. Nie da się ich przeczekać siłą woli - są efektem konkretnych zmian neurochemicznych.",
      "W Bydgoszczy i regionie kujawsko-pomorskim prowadzimy odtrucie alkoholowe pod nadzorem lekarza: kroplówka z elektrolitami i witaminami uzupełnia niedobory, a w razie potrzeby dołączamy farmakoterapię uspokajającą i przeciwlękową. Cel jest jeden - przeprowadzić pacjenta przez fazę odstawienia bezpiecznie i z minimalnym dyskomfortem.",
    ],
    warning: {
      headline:
        "Najgroźniejsze powikłania zespołu odstawiennego pojawiają się 24-72 godziny od odstawienia alkoholu.",
      detail:
        "Drgawki abstynencyjne, majaczenie alkoholowe (delirium tremens), zaburzenia rytmu serca, gwałtowne skoki ciśnienia. W tej fazie samodzielne radzenie sobie w domu jest realnym zagrożeniem życia - potrzebna jest farmakoterapia prowadzona przez lekarza.",
    },
    closing: [
      "Odpowiednio przeprowadzony detoks alkoholowy w Bydgoszczy znacząco zmniejsza ryzyko padaczki poalkoholowej, która zwykle ujawnia się w drugiej dobie po spadku stężenia alkoholu we krwi. Nawodnienie organizmu, suplementacja magnezu i witamin z grupy B (zwłaszcza tiaminy) chronią przed encefalopatią Wernickego - powikłaniem, którego skutki bywają nieodwracalne.",
      "Po zakończeniu kroplówki pacjent jest trzeźwy, nawodniony, z wyrównanymi parametrami. To dobry moment, żeby rozważyć kolejne kroki: psychoterapię uzależnień, farmakoterapię anty-głodową lub wszywkę Esperal. Nie naciskamy - informujemy, jakie opcje są dostępne w Bydgoszczy i okolicach.",
    ],
  },
  treatment: {
    heading: "Jak wygląda odtrucie alkoholowe w Bydgoszczy",
    subtitle: "Procedura medyczna, nie improwizacja",
    paragraphs: [
      "Zaczynamy od wywiadu medycznego: lekarz pyta o czas trwania ciągu, ilości spożywanego alkoholu, choroby przewlekłe (nadciśnienie, cukrzyca, padaczka, schorzenia wątroby), aktualnie przyjmowane leki. Mierzymy ciśnienie, tętno, saturację i poziom glukozy. Na podstawie tych danych dobieramy długość zabiegu (najczęściej 3, 6 lub 12 godzin) i skład kroplówki.",
      "W trakcie detoksu pacjent leży lub siedzi w wygodnej pozycji - w naszym gabinecie w Bydgoszczy albo we własnym mieszkaniu, jeśli wybiera wariant wyjazdowy. Lekarz monitoruje parametry i w razie potrzeby modyfikuje farmakoterapię. Wszywka, naltrekson i inne preparaty wspierające trzeźwość są tematem osobnej rozmowy - po zakończeniu detoksu.",
      "Każde odtrucie alkoholowe prowadzimy z pełną dyskrecją. Nie ma karty pacjenta w NFZ, nie ma kontaktu z pracodawcą, nie ma śladu w dokumentacji, której pacjent sobie nie życzy. Bliscy mogą być obecni - często ich obecność jest największym wsparciem.",
    ],
    figureCaption: "Pierwszy krok - bezpieczne przerwanie ciągu pod kontrolą lekarza",
    cta: {
      linkText: "Odtrucie alkoholowe Bydgoszcz",
      paragraph:
        "to procedura medyczna, z której rocznie korzystają tysiące pacjentów w całej Polsce. W Bydgoszczy obsługujemy także Toruń, Inowrocław, Solec Kujawski, Koronowo, Nakło nad Notecią, Świecie, Chełmno i Brodnicę - dojeżdżamy do mniejszych miejscowości w całym województwie kujawsko-pomorskim. Po detoksie pacjent może umówić się na wszywkę alkoholową Esperal, która stanowi dodatkową farmakologiczną barierę przed nawrotem.",
    },
  },
  homeVisit: {
    title: "Detoks wyjazdowy - lekarz przyjeżdża pod Twój adres",
    subtitle:
      "Bydgoszcz, Toruń, Inowrocław, Solec Kujawski - dyskretnie i o każdej porze.",
    description:
      "Część pacjentów nie jest w stanie samodzielnie dotrzeć do gabinetu - albo z powodu nasilonych objawów odstawienia, albo dlatego, że woli przejść detoks we własnym domu. Wysyłamy doświadczonego lekarza pod wskazany adres w Bydgoszczy i w promieniu kilkudziesięciu kilometrów. Zabieg wygląda identycznie jak w gabinecie: kroplówka, monitoring, farmakoterapia. Telefon do koordynatora odbieramy w godzinach pracy gabinetu, a e-rejestracja online działa całą dobę.",
  },
};

const HOME_CONTENT: Record<SiteKey, HomeContent> = {
  katowice,
  szczecin,
  bydgoszcz,
};

export function getHomeContent(siteKey: SiteKey): HomeContent {
  return HOME_CONTENT[siteKey];
}
