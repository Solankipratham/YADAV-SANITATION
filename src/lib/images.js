/**
 * Central image registry.
 *
 * To use the client's own photography later, replace the URL values below
 * (or point them at files placed in /public/images).
 */
const unsplash = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMG = {
  // Hero / company
  hero: unsplash('1541888946425-d81bb19240f5', 2000),
  heroAlt: unsplash('1486406146926-c627a92ad1ab', 1600),
  intro: unsplash('1504307651254-35680f356dfd', 1400),
  aboutHero: unsplash('1503387762-592deb58ef4e', 2000),
  tender: unsplash('1416879595882-3373a0480b5b', 1600),
  contact: unsplash('1497366216548-37526070297c', 1400),

  // Fire protection & security
  fireSuppression: unsplash('1582139329536-e7284fece509', 1400),
  fm200: unsplash('1581092160562-40aa08e78837', 1400),
  detection: unsplash('1581094794329-c8112a89af12', 1400),
  cctv: unsplash('1557597774-9d273605dfa9', 1400),
  access: unsplash('1553413077-190dd305871c', 1400),
  nurseCall: unsplash('1519494026892-80bbd2d6fd0d', 1400),

  // Heavy engineering
  steel: unsplash('1565793298595-6a879b1d9492', 1400),
  sheetMetal: unsplash('1504917595217-d4dc5ebe6122', 1400),
  piping: unsplash('1513828583688-c52646db42da', 1400),
  water: unsplash('1519999482648-25049ddd37b1', 1400),
  treatment: unsplash('1581093458791-9d42e3c7e117', 1400),
  demolition: unsplash('1503387837-b154d5074bd2', 1400),

  // Division covers
  divisionFire: unsplash('1518709268805-4e9042af9f23', 1600),
  divisionHeavy: unsplash('1516937941344-00b4e0337589', 1600),

  // Industries
  mall: unsplash('1519567241046-7f570eee3ce6', 1200),
  commercial: unsplash('1497366754035-f200968a6e72', 1200),
  industrial: unsplash('1581091226825-a6a2a5aee158', 1200),
  retail: unsplash('1441986300917-64674bd600d8', 1200),
  restaurant: unsplash('1517248135467-4c7edcad34c4', 1200),
  healthcare: unsplash('1516549655169-df83a0774514', 1200),
  office: unsplash('1524758631624-e2822e304c36', 1200),
  infrastructure: unsplash('1478486983479-9c1c9c94e0d3', 1200),

  // Projects
  proj1: unsplash('1590959651373-a3db0f38a961', 1200),
  proj2: unsplash('1504917595217-d4dc5ebe6122', 1200),
  proj3: unsplash('1581093588401-fbb62a02f120', 1200),
  proj4: unsplash('1541976590-713941681591', 1200),
  proj5: unsplash('1466611653911-95081537e5b7', 1200),
  proj6: unsplash('1517420704952-d9f39e95b43e', 1200),
  proj7: unsplash('1503387762-592deb58ef4e', 1200),
  proj8: unsplash('1487958449943-2429e8be8625', 1200),
}
