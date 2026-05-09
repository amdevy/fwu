import type { Photographer } from '@/lib/types'

const FWU_2026 = {
  event: 'fwu-2026-mukachevo',
  eventLabel: { ua: 'FWU 2026 · Мукачево', en: 'FWU 2026 · Mukachevo' },
  eventDate: '2026-05-02',
}

export const photographers: Photographer[] = [
  {
    id: 'manyak-kateryna',
    slug: 'manyak-kateryna',
    name: { ua: 'Катерина Маняк', en: 'Kateryna Manyak' },
    driveMainUrl: 'https://drive.google.com/open?id=127Di_7JFLTTPGKoeG7sfCnoJv9pS9ced',
    designerFolders: {
      'beart': 'https://drive.google.com/open?id=1pZH8WBgwXCQnxVsJvj47tEgAzhjPJjF1',
      'dayinlinen': 'https://drive.google.com/open?id=1nevbxRD8me6OtuNUF0lRcwQYeK2KJnAV',
      'elsa-fairy': 'https://drive.google.com/open?id=1g4qyW6ZOaqHQCMgqatR_bwxa2yvxlpp5',
      'garmatyuk-kids': 'https://drive.google.com/open?id=1WBAlwHkfjXgM-7FLB2hH4itu6v0qErwX',
      'kosinski': 'https://drive.google.com/open?id=1OUKUONmBbDbTWDYDeRtqvkOKxnwGkUIm',
      'natali-vlad': 'https://drive.google.com/open?id=15mINoDVjnLPWfNX4NwkNb1pmzrW2Ls73',
      'lili-mager': 'https://drive.google.com/open?id=16s48S-0NCQAmEwfKdzGO32IL9D4edPDK',
      'loveli': 'https://drive.google.com/open?id=1D2Xyv0jKAOfBQNpxBfkLNPKua_Rfpk53',
      'brenzovych': 'https://drive.google.com/open?id=1Dt1i2IHryCEwqJJMMpTpBM1PnLfb_9oW',
      'oksana-sakal': 'https://drive.google.com/open?id=14XFzXhmcqc1Tzgt9jjHiYypEOTJmk8ww',
      'sams': 'https://drive.google.com/open?id=1t5ZvM8xQYgLGxShMpG7v6Sh7u7yxDPX2',
      'shevstudio': 'https://drive.google.com/open?id=1qlA-6yu5SLMPPlPc8A4hDVXq1s13ezxX',
      'cheypesh': 'https://drive.google.com/open?id=1IxzlEZUhRVZSJQJ0grkqm8XCHLmefviA',
    },
    generalFolders: [
      { label: { ua: 'Gala party', en: 'Gala party' }, url: 'https://drive.google.com/open?id=1El-4bSwxddThOe0TutgAzwaw8maC4MsT' },
      { label: { ua: 'Холл, партнери, бекстейдж', en: 'Hall, partners & backstage' }, url: 'https://drive.google.com/open?id=1lJdgSB7WeKc1JXPIwkGjJu40L9zY5_hJ' },
      { label: { ua: 'VALBAG', en: 'VALBAG' }, url: 'https://drive.google.com/open?id=1wlFVuD9zWQnZBNZQVeos6eA83HPu7y2X' },
      { label: { ua: 'VENSA', en: 'VENSA' }, url: 'https://drive.google.com/open?id=1zlks4NMoAFp5_AWJCZAASHN55wCfSdtJ' },
    ],
    ...FWU_2026,
  },
  {
    id: 'olha-khmil',
    slug: 'olha-khmil',
    name: { ua: 'Ольга Хміль', en: 'Olha Khmil' },
    driveMainUrl: 'TODO_MAIN_FOLDER_URL',
    designerFolders: {
      'andreas-moskin': 'TODO',
      'beart': 'TODO',
      'dayinlinen': 'TODO',
      'elsa-fairy': 'TODO',
      'kosinski': 'TODO',
      'natali-vlad': 'TODO',
      'lili-mager': 'TODO',
      'natalidorosh888': 'TODO',
      'oksana-sakal': 'TODO',
      'zlatich': 'TODO',
    },
    generalFolders: [
      { label: { ua: 'Fashion West (загальне)', en: 'Fashion West (general)' }, url: 'TODO' },
    ],
    ...FWU_2026,
  },
]

export const getPhotographer = (slug: string) =>
  photographers.find((p) => p.slug === slug)

export const getPhotographersForDesigner = (designerSlug: string) =>
  photographers.filter((p) => p.designerFolders[designerSlug])
