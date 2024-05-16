Ecco i calcoli di specificità per ciascun selettore CSS:

1. `ul li {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 0
   - Selettori di tipo e pseudo-elementi: 2 (ul e li)
   - Selettori universali e combinatori: 0
   - Specificità: (0, 0, 2, 0)

2. `ul > li {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 0
   - Selettori di tipo e pseudo-elementi: 2 (ul e li)
   - Selettori universali e combinatori: 1 (>)
   - Specificità: (0, 0, 2, 1)

3. `body > #main.mobile a:hover {}`
   - ID: 1 (#main)
   - Classi, attributi e pseudo-classi: 2 (.mobile e :hover)
   - Selettori di tipo e pseudo-elementi: 1 (a)
   - Selettori universali e combinatori: 1 (>)
   - Specificità: (1, 2, 1, 1)

4. `div p > span {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 0
   - Selettori di tipo e pseudo-elementi: 3 (div, p e span)
   - Selettori universali e combinatori: 2 (>)
   - Specificità: (0, 0, 3, 2)

5. `.users .name {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 2 (.users e .name)
   - Selettori di tipo e pseudo-elementi: 0
   - Selettori universali e combinatori: 0
   - Specificità: (0, 2, 0, 0)

6. `[href$='.pdf'] {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 1 ([href$='.pdf'])
   - Selettori di tipo e pseudo-elementi: 0
   - Selettori universali e combinatori: 0
   - Specificità: (0, 1, 0, 0)

7. `:hover {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 1 (:hover)
   - Selettori di tipo e pseudo-elementi: 0
   - Selettori universali e combinatori: 0
   - Specificità: (0, 1, 0, 0)

8. `div .name {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 1 (.name)
   - Selettori di tipo e pseudo-elementi: 1 (div)
   - Selettori universali e combinatori: 1 (spazio)
   - Specificità: (0, 1, 1, 1)

9. `a[href$='.pdf'] {}`
   - ID: 0
   - Classi, attributi e pseudo-classi: 1 ([href$='.pdf'])
   - Selettori di tipo e pseudo-elementi: 1 (a)
   - Selettori universali e combinatori: 0
   - Specificità: (0, 2, 1, 0)

10. `.pictures img:hover {}`
    - ID: 0
    - Classi, attributi e pseudo-classi: 2 (.pictures e :hover)
    - Selettori di tipo e pseudo-elementi: 1 (img)
    - Selettori universali e combinatori: 0
    - Specificità: (0, 2, 1, 0)

11. `.news.breaking.featured {}`
    - ID: 0
    - Classi, attributi e pseudo-classi: 3 (.news, .breaking e .featured)
    - Selettori di tipo e pseudo-elementi: 0
    - Selettori universali e combinatori: 0
    - Specificità: (0, 3, 0, 0)

12. `.user #name {}`
    - ID: 1 (#name)
    - Classi, attributi e pseudo-classi: 1 (.user)
    - Selettori di tipo e pseudo-elementi: 0
    - Selettori universali e combinatori: 0
    - Specificità: (1, 1, 0, 0)

13. `#name span {}`
    - ID: 1 (#name)
    - Classi, attributi e pseudo-classi: 0
    - Selettori di tipo e pseudo-elementi: 1 (span)
    - Selettori universali e combinatori: 0
    - Specificità: (1, 0, 1, 0)

14. `nav#nav > li:hover {}`
    - ID: 1 (#nav)
    - Classi, attributi e pseudo-classi: 1 (:hover)
    - Selettori di tipo e pseudo-elementi: 1 (li)
    - Selettori universali e combinatori: 1 (>)
    - Specificità: (1, 1, 1, 1)

15. `li:nth-child(2n+1):hover {}`
    - ID: 0
    - Classi, attributi e pseudo-classi: 2 (:nth-child(2n+1) e :hover)
    - Selettori di tipo e pseudo-elementi: 1 (li)
    - Selettori universali e combinatori: 0
    - Specificità: (0, 2, 1, 0)
